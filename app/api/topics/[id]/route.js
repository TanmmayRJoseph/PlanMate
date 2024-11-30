import { NextResponse } from "next/server";
import connectMongodb from "@/lib/mongodb";
import Topic from "@/models/topics";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: topicTitle, newDescription: topicDescription } =
    await request.json();
  await connectMongodb();
  await Topic.findByIdAndUpdate(id, { topicTitle, topicDescription });
  return NextResponse.json(
    { message: "Topic updated successfully" },
    { status: 200 }
  );
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongodb();
  const topic = await Topic.findOne({_id:id});
  return NextResponse.json({ topic }, { status: 200 });
}
