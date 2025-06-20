import mongoose from "mongoose";

const ItemSchema =new mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
      enum: ["Shirt", "Pant", "Shoes", "Sports Gear", "Other"],
    },
    coverImage: {
      type: String,
    },
    additionalImages: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true });


  const Item=mongoose.model("Item", ItemSchema)