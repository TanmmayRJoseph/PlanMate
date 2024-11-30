"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function page({ id, topicTitle, topicDescription }) {
  const [Newtitle, setNewTitle] = useState(topicTitle);
  const [Newdescription, setNewDescription] = useState(topicDescription);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          newTitle: Newtitle,
          newDescription: Newdescription,
        }),
      });
      if (!res.ok) {
        throw new Error("Failed to update topic");
      }
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className=" w-7/12 flex flex-col gap-4 mx-auto my-6"
      >
        <div className="grid w-full  items-center gap-1.5">
          <label className="text-2xl bold" htmlFor="email ">
            Add Plan title
          </label>
          <input
            className="border border-slate-900 rounded-sm px-2"
            onChange={(e) => setNewTitle(e.target.value)}
            value={Newtitle}
            type="text"
            id="email"
            placeholder="Topic Title"
          />
        </div>
        <div className="grid w-full  items-center gap-1.5">
          <label className="text-2xl bold" htmlFor="description">
            Topic Description
          </label>
          <input
            className="border border-slate-900 rounded-sm px-2"
            onChange={(e) => setNewDescription(e.target.value)}
            value={Newdescription}
            type="text"
            id="description"
            placeholder="Topic Description"
          />
        </div>
        <button
          type="submit"
          variant="default"
          className="text-xl bg-green-400"
        >
          Update Topic
        </button>
      </form>
    </>
  );
}
