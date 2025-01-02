import mongoose from "mongoose";

const messageSpaceSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    sender: {
      type: String,
      required: true,
    },
    reactions: [
      {
        emoji: String,
        by: String,
      },
    ],
    isStarred: {
      type: Boolean,
      default: false,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("MessageSpace", messageSpaceSchema, "MessageSpace");