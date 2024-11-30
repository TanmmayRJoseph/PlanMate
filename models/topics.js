import mongoose from "mongoose";

const topicSchema = new mongoose.Schema({
  topicTitle: {
    type: String,
    required: [true, "Topic title is required"],
    minlength: [3, "Topic title must be at least 3 characters long"],
  },
  topicDescription: {
    type: String,
    required: [true, "Topic description is required"],
    minlength: [5, "Topic description must be at least 5 characters long"],
  },
});

const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);
export default Topic;
