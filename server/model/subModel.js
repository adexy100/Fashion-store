import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;

const subSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      minlength: [2, "Too short"],
      maxlength: [20, "Too long"],
    },
    desc: {
      type: String,
      minlength: [2, "Too short"],
      maxlength: [32, "Too long"],
    },
    image: {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
    parent: {
      type: ObjectId,
      ref: "Category",
    },
  },
  { timestamps: true }
);

const Sub = mongoose.model("Sub", subSchema);

export default Sub;
