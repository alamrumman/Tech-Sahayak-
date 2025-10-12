import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { Avatar, AvatarImage } from "../components/ui/avatar";
import { href } from "react-router-dom";

function Message() {
  return (
    <div className="bg-zinc-100 w-130 h-30 rounded-3xl text-black p-5">
      <div className="flex  justify-center">
        <div className="py-3">
          <Avatar>
            <AvatarImage src="images\profile.png" />
          </Avatar>
        </div>
        <textarea
          className="text-black w-5/6 border-none outline-none p-3"
          name=""
          id=""
          placeholder="Write update..."
        ></textarea>
        <a className="p-2" href="/login">
          <FaLocationArrow className="size-8 hover:size-10 cursor-pointer" />
        </a>
        <div></div>
      </div>
    </div>
  );
}

export default Message;
