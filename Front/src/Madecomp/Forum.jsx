import React, { useState, useEffect } from "react";
import Message from "./Message";
import Cardin from "./Cardin";
import { useAuth } from "../Context/AuthContext";
import { Button } from "../components/ui/button";

function Forum() {
  const { user, token } = useAuth();
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [posts, setPosts] = useState([]);
  const [feedback, setFeedback] = useState("");

  // ✅ Fetch posts
  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "https://agroai-backend-jkws.onrender.com/api/post/posts",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) throw new Error("Could not fetch posts.");
      const data = await response.json();
      console.log(data);
      setPosts(data);
    } catch (error) {
      setFeedback(error.message);
    }
  };

  // ✅ Only run once (or when token changes)
  useEffect(() => {
    fetchPosts();
  }, [token]);

  // ✅ Handle posting
  const handleposting = async () => {
    if (!message.trim()) {
      alert("Message cannot be empty!");
      return;
    }

    if (!token) {
      alert("You must be logged in to post a message.");
      setIsModelOpen(true);
      return;
    }

    const postData = {
      message,
      email: user.email,
    };
    console.log(postData);

    try {
      const response = await fetch(
        "https://agroai-backend-jkws.onrender.com/api/post/posts",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(postData),
        }
      );

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Failed to post");

      alert("Posted successfully!");
      setMessage("");
      fetchPosts(); // refresh posts after posting
    } catch (error) {
      console.error("An error occurred while posting:", error);
    }
  };

  return (
    <section className="bg-white py-12 px-4">
      <div className="container mx-auto">
        <h1 className="mb-8 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Live Updates by Team Members
        </h1>

        <div className="bg-gray-50 rounded-2xl border border-gray-200 p-5 shadow-sm h-110">
          <div className="space-y-4 max-h-55 overflow-y-auto">
            {posts.length > 0 ? (
              posts.map((post) => (
                <div
                  key={post._id}
                  className="p-4 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
                >
                  {/* message */}
                  <p className="text-gray-800 leading-relaxed whitespace-pre-line mb-3">
                    {post.message}
                  </p>

                  {/* name, role, time */}
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <div className="">
                      <div className="flex">
                        <div className="py-2">
                          <img
                            className="h-8 w-8 rounded-4xl"
                            src={post.user?.image}
                            alt=""
                          />
                        </div>

                        <div className="flex-col p-1">
                          <span className="font-medium text-gray-800">
                            {post.user?.name || "Unknown User"}
                          </span>
                          <div>
                            <span className="text-xs text-gray-500">
                              {post.Role}
                            </span>
                          </div>
                        </div>
                      </div>

                      <span className="text-xs text-gray-400">
                        {post.timeStamp}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">No posts yet.</p>
            )}
          </div>

          {isModelOpen && <Cardin onclose={() => setIsModelOpen(false)} />}

          <div className="py-5 items-center gap-3">
            <Message message={message} setMessage={setMessage} />
            <Button
              className="w-24 bg-black hover:bg-zinc-800 text-white"
              onClick={() => {
                if (!user || !token) setIsModelOpen(true);
                else handleposting();
              }}
            >
              Post
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Forum;
