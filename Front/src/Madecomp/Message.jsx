import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { Avatar, AvatarImage } from "../components/ui/avatar";
import Cardin from "./Cardin";
import { href } from "react-router-dom";

function Message() {
  const [isModelOpen, setIsModelOpen] = useState(false);

  return (
    <div className="bg-zinc-100 w-130 resize-x flex-wrap h-30 z-10 rounded-3xl text-black p-5">
      <div className="flex  justify-center">
        <div className="py-3">
          <Avatar>
            <AvatarImage src="images\profile.png" />
          </Avatar>
        </div>
        <textarea
          className="text-black  w-full border-none outline-none p-3"
          name=""
          id=""
          placeholder="Write update..."
        ></textarea>
      </div>
    </div>
  );
}

export default Message;
