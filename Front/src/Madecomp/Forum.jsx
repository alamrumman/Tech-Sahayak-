import React from "react";
import { useState, useEffect } from "react";
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

  useEffect(() => {
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
        if (!response.ok) {
          throw new Error("Could not fetch posts.");
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        setFeedback(error.message);
      }
    };
    fetchPosts();
  }, []);
  console.log("Current user:", user, "Token:", token);

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
      message: message,
      email: user.email,
    };
    console.log("Posting:", postData);
    try {
      const response = await fetch(
        "https://agroai-backend-jkws.onrender.com/api/post/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to post");
      }

      console.log("Post successful:", data);
      alert("Posted successfully!");
    } catch (error) {
      console.error("An error occurred while posting:", error);
    }
  };

  return (
    <section className="bg-white py-12 px-2">
      <div className="flex items-center justify-center">
        <div className="container">
          <h1 className="mb-5 text-center text-3xl font-bold tracking-tighter text-black sm:text-6xl">
            Live updates by Team members
          </h1>
          <div className="flex w-full justify-center flex-col gap-6 rounded-xl py-3 md:py-16 relative">
            <div className="px-5 bg-zinc-50 h-100 rounded-2xl border-solid border-1 border-black flex-col py-2">
              <div className="space-y-4 max-h-60 overflow-y-auto">
                {posts.length > 0 ? (
                  posts.map((post) => (
                    <div
                      key={post._id}
                      className="p-3 bg-gray-50 rounded-md border "
                    >
                      <p className="text-gray-800">{post.message}</p>
                      <p className="text-right text-xs text-gray-500 mt-2">
                        - {post.user?.name || "Anonymous"}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500">No posts yet.</p>
                )}
              </div>
              {isModelOpen && <Cardin onclose={() => setIsModelOpen(false)} />}
              <div className="py-5 mb-5">
                <Message message={message} setMessage={setMessage} />
                <Button
                  className="size-8 cursor-pointer ml-2 text-white w-20 bg-black hover:bg-zinc-800"
                  onClick={() => {
                    if (!user || !token) {
                      setIsModelOpen(true);
                    } else {
                      handleposting();
                    }
                  }}
                >
                  Post
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Forum;
