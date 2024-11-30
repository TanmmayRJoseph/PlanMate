"use client";
import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function RemoveBtn({ id }) {
  const router = useRouter(); // Move this to the top level of the component

  const removeTopic = async () => {
    const confirmation = confirm("Are you sure you want to delete this topic?");
    if (confirmation) {
      try {
        const res = await fetch(`/api/topics?id=${id}`, {
          method: "DELETE",
        });

        if (res.ok) {
          alert("Topic deleted successfully!");
          router.refresh(); // Refresh the page to reflect changes
        } else {
          const errorData = await res.json();
          console.error("Failed to delete topic:", errorData);
          alert("Failed to delete the topic. Please try again.");
        }
      } catch (error) {
        console.error("Error deleting topic:", error);
        alert("An error occurred. Please try again.");
      }
    }
  };

  return (
    <button onClick={removeTopic} className="text-red-500">
      <HiOutlineTrash size={24} />
    </button>
  );
}
