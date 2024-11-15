import mongoose, { models, model, Schema } from "mongoose";

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    desc: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    amount: { type: Number, required: true },
  },
  { timestamps: true }
);

export const Product = models.Product || model("Product", productSchema);
