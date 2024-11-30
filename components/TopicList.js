// import RemoveBtn from "./RemoveBtn";
// import Link from "next/link";
// import { HiPencilAlt } from "react-icons/hi";
// const getTopics = async () => {
//   try {
//     const res = await fetch("http://localhost:3000/api/topics", {
//       cache: "no-store",
//     });
//     if (!res.ok) {
//       throw new Error("Failed to fetch topics");
//     }
//     return res.json();
//   } catch (err) {
//     console.log(err);
//   }
// };

// export default async function TopicList() {
//  const{topics}= await getTopics();
//   return (
//     <>
//     {topics.map(t=>(
//       <div className="p-4 border mx-5 border-slate-900 my-3 flex justify-between gap-5 items-start rounded-lg">
//         <div>
//           <h2 className="font-bold text-2xl">{t.topicTitle}</h2>
//           <div>{t.topicDescription}</div>
//         </div>
//         <div className="flex gap-2">
//           <RemoveBtn  id={t._id}/>
//           <Link href={`/editTopic/${t._id}`}>
//             <HiPencilAlt size={24} />
//           </Link>
//         </div>
//       </div>
//       ))}
//     </>
//   );
// }
// ------------------------------------------------

import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

export default async function TopicList() {
  const { topics } = await getTopics();

  return (
    <>
      {topics.map((t) => (
        <div
          key={t._id}
          className="p-6 mb-6 mx-4 rounded-xl bg-gradient-to-r from-indigo-100 to-blue-100 shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out"
        >
          <div className="flex justify-between items-start gap-6">
            {/* Topic Content */}
            <div>
              <h2 className="font-bold text-4xl text-blue-800 hover:text-blue-600 transition-colors duration-300">
                {t.topicTitle}
              </h2>
              <p className="text-xl text-gray-700 mt-3">{t.topicDescription}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 items-center">
              <RemoveBtn id={t._id} />
              <Link
                className="text-blue-600 hover:text-blue-400 transition duration-300"
                href={`/editTopic/${t._id}`}
              >
                <HiPencilAlt size={28} />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
