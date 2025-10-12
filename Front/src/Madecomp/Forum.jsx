import React from "react";
import Message from "./Message";

function Forum() {
  return (
    <section className="bg-white py-12">
      <div className="flex items-center justify-center">
        <div className="container">
          <h1 className="mb-5 text-center text-3xl font-bold tracking-tighter text-black sm:text-6xl">
            Live updates by Team members
          </h1>
          <div className="flex w-full justify-center flex-col gap-6 rounded-xl py-3 md:py-16 relative">
            <div className="px-5 bg-zinc-50 h-100 rounded-2xl border-solid border-1 border-black flex items-end justify-center ">
              <div className="mb-5">
                <Message />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Forum;
