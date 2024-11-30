import { NextResponse } from "next/server";
import connectMongodb from "@/lib/mongodb";
import Topic from "@/models/topics";
//POST request
// export async function POST(request) {
//   const { topicTitle, topicDescription } = await request.json();
//   await connectMongodb();
//   await Topic.create({ topicTitle: topicTitle, topicDescription: topicDescription });
//   return NextResponse.json(
//     { message: "Topic created successfully" },
//     { status: 201 }
//   );
// }

export async function POST(request) {
    try {
      const { title, description } = await request.json();
  
      // Validate input data
      if (!title || title.length < 3) {
        return NextResponse.json(
          { error: "Title must be at least 3 characters long" },
          { status: 400 }
        );
      }
      if (!description || description.length < 5) {
        return NextResponse.json(
          { error: "Description must be at least 5 characters long" },
          { status: 400 }
        );
      }
  
      // Connect to MongoDB and create the topic
      await connectMongodb();
      await Topic.create({
        topicTitle: title,
        topicDescription: description,
      });
  
      return NextResponse.json(
        { message: "Topic created successfully" },
        { status: 201 }
      );
    } catch (error) {
      console.error("Error creating topic:", error);
      return NextResponse.json(
        { error: "Failed to create topic", details: error.errors },
        { status: 500 }
      );
    }
  }
  

export async function GET() {
  await connectMongodb();
  const topics = await Topic.find();
  return NextResponse.json({ topics }, { status: 200 });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongodb();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json(
    { message: "Topic deleted successfully" },
    { status: 200 }
  );
}
 