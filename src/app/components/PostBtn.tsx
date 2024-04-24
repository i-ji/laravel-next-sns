"use client";

import { AiFillPlusCircle } from "react-icons/ai";
import { FormEvent, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { addPosts } from "../api";

const PostBtn = () => {
  const [inputBody, setInputBody] = useState("");

  const postMyForm = async (e: FormEvent) => {
    e.preventDefault();

    if (inputBody === "" || inputBody.length >= 250) return;
    await addPosts(inputBody);
    setInputBody("");
    window.location.reload();
  };

  return (
    <Dialog>
      <DialogTrigger>
        <AiFillPlusCircle className="text-6xl cursor-pointer fixed bottom-4 right-5 sm:right-[calc(50%_-_300px)] sm:bottom-28 hover:text-black/80" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <form className="flex flex-col w-11/12" onSubmit={postMyForm}>
            <textarea
              className="border border-black px-2 py-1 rounded h-40"
              placeholder="本文"
              value={inputBody}
              onChange={(e) => setInputBody(e.target.value)}
            ></textarea>
            <button className="text-white bg-black rounded-xl w-1/6 py-1 ml-auto mt-3">
              POST
            </button>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default PostBtn;
