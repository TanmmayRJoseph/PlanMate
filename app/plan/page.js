// "use client";
// // import { label } from "@/components/ui/label";
// // import { input } from "@/components/ui/input";
// // import { button } from "@/components/ui/button";
// import { useRouter } from "next/navigation";
// import { useState } from "react";

// export default function Page() {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const router = useRouter();
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!title || !description) {
//       alert("Please fill all the fields");
//       return;
//     }
//     try {
//       const res = await fetch("http://localhost:3000/api/topics", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ title, description }),
//       });

//       if (res.ok) {
//         router.push("/");
//       } else {
//         throw new Error("Failed to create a topic");
//       }
//     } catch (error) {
//       console.error(error);
//       alert(error.message);
//     }
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit} className=" w-7/12 flex flex-col gap-4 mx-auto my-6">
//         <div className="grid w-full  items-center gap-1.5">
//           <label className="text-2xl" htmlFor="text ">
//             Add Plan title
//           </label>
//           <input
//             onChange={(e) => setTitle(e.target.value)}
//             value={title}
//             type="text"
//             id="text"
//             placeholder="Topic Title"
//             className="text-black"
//           />
//         </div>
//         <div className="grid w-full  items-center gap-1.5">
//           <label className="text-2xl" htmlFor="description">
//             Topic Description
//           </label>
//           <input
//             onChange={(e) => setDescription(e.target.value)}
//             value={description}
//             type="text"
//             id="description"
//             placeholder="Topic Description"
//           />
//         </div>
//         <button type="submit">Add Topic</button>
//       </form>
//     </>
//   );
// }

"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!title || !description) {
      alert("Please fill all the fields");
      return;
    }
    if (title.length < 3 || description.length < 5) {
      alert("Title must be at least 3 characters, and description at least 5.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-7/12 flex flex-col gap-4 mx-auto my-6"
    >
      <div className="grid w-full items-center gap-1.5">
        <label className="text-2xl" htmlFor="text">
          Add Plan Title
        </label>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          id="text"
          placeholder="Topic Title"
          className="border border-slate-900 rounded-sm px-2 text-black"
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <label className="text-2xl" htmlFor="description">
          Topic Description
        </label>
        <input
          className="border border-slate-900 rounded-sm px-2"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          type="text"
          id="description"
          placeholder="Topic Description"
        />
      </div>
      <button
        onSubmit={handleSubmit}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="submit"
      >
        Add Topic
      </button>
    </form>
  );
}
