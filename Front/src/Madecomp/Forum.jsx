import React from "react";
import { useState } from "react";
import Message from "./Message";
import Cardin from "./Cardin";

import { Button } from "../components/ui/button";

function Forum() {
  const [isModelOpen, setIsModelOpen] = useState(false);
  return (
    <section className="bg-white py-12 px-2">
      <div className="flex items-center justify-center">
        <div className="container">
          <h1 className="mb-5 text-center text-3xl font-bold tracking-tighter text-black sm:text-6xl">
            Live updates by Team members
          </h1>
          <div className="flex w-full justify-center flex-col gap-6 rounded-xl py-3 md:py-16 relative">
            <div className="px-5 bg-zinc-50 h-100 rounded-2xl border-solid border-1 border-black flex items-end justify-center ">
              {isModelOpen &&
                Cardin(
                  (onclose = () => {
                    setIsModelOpen(false);
                  })
                )}
              <div className="mb-5">
                <Message />
                <Button
                  className="size-8  cursor-pointer ml-2 text-white w-20  bg-black hover:bg-zinc-800"
                  onClick={() => {
                    setIsModelOpen(true);
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
