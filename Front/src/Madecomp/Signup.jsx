import { useState } from "react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import axios from "axios";
import { useAuth } from "../Context/AuthContext";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setconfirmPass] = useState("");
  const [error, setError] = useState("");
  const [Role, setRole] = useState("Web developer");
  const [isloading, setisLoading] = useState(false);

  const { login } = useAuth();
  const handleConfirmpasschange = (e) => {
    setconfirmPass(e.target.value);

    if (pass !== e.target.value) {
      setError("Passwords do not match");
    } else {
      setError("");
    }
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    if (pass.length < 4) {
      setError("Password should be of at least 5 characters");
      return;
    } else {
      setError("");
      try {
        const response = await fetch(
          "https://agroai-backend-jkws.onrender.com/api/auth/signup",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, pass, Role }),
          }
        );
        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message || "Failed to create account.");
        }

        // 3. On success, call the login function with the user data from the backend!
        // This updates the global state for your whole app.
        login(responseData.user);

        alert("Account created successfully!");
        // Here you would typically navigate the user away, e.g., to the homepage
        // navigate('/');
       
      } catch (err) {
        setError(err.message);
      } finally {
        setisLoading(false);
      }
    }
  };

  return (
    <section className=" fixed inset-0 bg-white bg-opacity-100 text-black flex items-center justify-center p-5 z-50">
      <form
        onSubmit={handlesubmit}
        className="w-full items-center justify-center flex"
      >
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Create account</CardTitle>
            <CardDescription>
              Enter your details below to create your account
            </CardDescription>
            <CardAction>
              <a href="/">
                <Button
                  type="button"
                  className={"text-black hover:cursor-pointer"}
                  variant="link"
                >
                  Close
                </Button>
              </a>
            </CardAction>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label>Name</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type=""
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  value={pass}
                  onChange={(e) => {
                    setPass(e.target.value);
                  }}
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Confirm Password</Label>
                </div>
                <Input
                  id="confirmpassword"
                  type="password"
                  value={confirmPass}
                  onChange={handleConfirmpasschange}
                  placeholder="Confirm your password"
                  required
                />
              </div>
            </div>
            <div>
              <CardFooter className="flex-col gap-2">
                {error && <p> {error} </p>}
                <Button
                  type="submit"
                  className="w-full bg-black text-white hover:bg-zinc-800 cursor-pointer"
                  disabled={isloading}
                >
                  {isloading ? "Creating account..." : "Create Account"}
                </Button>
              </CardFooter>
            </div>
          </CardContent>
        </Card>
      </form>
    </section>
  );
}

export default Signup;
