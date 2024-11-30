"use client";
import EditTopicForm from "@/components/EditTopicForm"; // Ensure this path is correct

const getTopicsByID = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
     

      cache: "no-store", // Avoid caching for dynamic data
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return await res.json(); // Parse and return JSON response
  } catch (err) {
    console.error("Error fetching topic by ID:", err);
    return null; // Return null if there's an error
  }
};

export default async function Page({ params }) {
  const { id } = params;

  // Fetch topic data
  const data = await getTopicsByID(id);

  // Handle error state
  if (!data || !data.topic) {
    return <div>Error fetching topic. Please try again later.</div>;
  }

  const { topicTitle, topicDescription } = data.topic;

  return (
    <EditTopicForm
      id={id}
      topicTitle={topicTitle}
      topicDescription={topicDescription}
    />
  );
}
