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
import { useAuth } from "../Context/AuthContext";

function Cardin({ onclose }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useAuth();

  const handlesubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim() || !pass.trim()) {
      setError("Email or password is empty");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(
        "https://agroai-backend-jkws.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            pass,
          }),
        }
      );
      const responseData = await response.json();
      console.log("login response:", responseData);

      if (!response.ok) {
        // server returned error status
        throw new Error(responseData.message || "Login failed.");
      }

      // Expecting responseData.token and responseData.user
      const tokenFromServer = responseData.token;
      const userFromServer = responseData.existingUser;

      if (!userFromServer?.email) {
        console.warn(
          "User object does not include email. Forum POST will fail!"
        );
      }
      if (!tokenFromServer) {
        // still persist if token was stored elsewhere, but warn
        console.warn("Login succeeded but no token returned from server.");
      } else {
        // persist token to localStorage (optional - login() will also set it)
        localStorage.setItem("token", tokenFromServer);
      }

      // IMPORTANT: pass both user and token to context login
      login(userFromServer, tokenFromServer);

      // close modal and reset fields
      setEmail("");
      setPass("");
      alert("Login successful!");
      onclose();
    } catch (err) {
      console.error("Login error:", err);
      setError(err.message || "Invalid email or password");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className=" fixed inset-0 bg-white bg-opacity-100 text-black flex items-center justify-center p-5 z-50">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
          <CardAction>
            <a href="/signup">
              <Button className={"text-black"} variant="link">
                Sign Up
              </Button>
            </a>
            <Button
              onClick={onclose}
              className={"text-black hover:cursor-pointer"}
              variant="link"
            >
              Close
            </Button>
          </CardAction>
        </CardHeader>

        <CardContent>
          {/* Form uses onSubmit so Enter key works and semantics are correct */}
          <form onSubmit={handlesubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="email"
                  placeholder="m@example.com"
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
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  type="password"
                  required
                />
              </div>
            </div>

            {/* error display inside the form so focus/scroll works */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mt-4">
                <p className="text-sm">{error}</p>
              </div>
            )}

            <CardFooter className="flex-col gap-2 mt-4">
              <Button
                type="submit"
                className="w-full bg-black text-white hover:bg-zinc-800 cursor-pointer"
                disabled={isLoading}
              >
                {isLoading ? "Logging in ...." : "Log in"}
              </Button>

              <Button
                onClick={() => alert("Google login disabled for now ")}
                variant="outline"
                className="w-full"
              >
                Login with Google
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}

export default Cardin;
