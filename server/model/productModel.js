import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter product name"],
    trim: true,
    maxLength: [64, "Product name cannot exceed 64 characters"],
    text: true,
  },
  slug: {
    type: String,
    unique: true,
    lowercase: true,
    index: true,
  },
  actualPrice: {
    type: Number,
    maxLength: [10, "Product price cannot exceed 10 characters"],
    default: 0.0,
  },
  discountPrice: {
    type: Number,
    required: [true, "Please enter product discount price"],
    maxLength: [10, "Product price cannot exceed 10 characters"],
    default: 0.0,
  },
  description: {
    type: String,
    required: [true, "Please enter product description"],
    maxLength: [2000, "Product name cannot exceed 2000 characters"],
    text: true,
  },
  ratings: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: ObjectId,
    ref: "Category",
  },
  subOptions: [
    {
      type: ObjectId,
      ref: "Sub",
    },
  ],
  brand: {
    type: String,
    required: [true, "Please enter product brand"],
  },
  stock: {
    type: Number,
    required: [true, "Please enter product stock"],
    maxLength: [50, "Product name cannot exceed 5 characters"],
    default: 0,
  },
  sold: {
    type: Number,
    default: 0,
  },
  shipping: {
    type: String,
    enum: ["Yes", "No"],
  },
  color: {
    type: String,
    enum: ["Black", "Brown", "Silver", "White", "Blue"],
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  // reviews: [
  //   {
  //     user: {
  //       type: ObjectId,
  //       ref: "User",
  //       required: true,
  //     },
  //     name: {
  //       type: String,
  //       required: true,
  //     },
  //     rating: {
  //       type: Number,
  //       required: true,
  //     },
  //     comment: {
  //       type: String,
  //       required: true,
  //     },
  //   },
  // ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
