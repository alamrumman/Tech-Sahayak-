import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { Avatar, AvatarImage } from "../components/ui/avatar";
import Cardin from "./Cardin";
import { href } from "react-router-dom";

function Message({ message, setMessage }) {
  const [isModelOpen, setIsModelOpen] = useState(false);

  return (
    <div className="bg-zinc-100 w-80 md:w-130 resize-x flex-wrap h-30 z-10 rounded-3xl text-black p-4">
      <div className="flex  justify-center">
        <div className="py-3">
          <Avatar>
            <AvatarImage src="images\profile.png" />
          </Avatar>
        </div>
        <textarea
          className="text-black w-full border-none outline-none p-3"
          onChange={(e) => setMessage(e.target.value)}
          name=""
          id=""
          placeholder="Write update..."
        ></textarea>
      </div>
    </div>
  );
}

export default Message;
