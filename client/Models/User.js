import mongoose, { Schema, model, models } from "mongoose";

const cartItemSChema = new Schema({
    productId: {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
    quantity: {
      type: Number,
      required: true,
      default: 1,
    },
  });
  
  const wishListSchema = new Schema({
    product: {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  });

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "user",
    },
    cart: [cartItemSChema],
    wishlist: [wishListSchema],

}, { timestamps: true });

const User = models.User || model("User", UserSchema);

export default User;