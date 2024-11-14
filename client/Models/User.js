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
    productId: {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  });

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    profileImage: {
        type: String,
        default: "https://res.cloudinary.com/dp4g1u5dy/image/upload/v1731460651/default_jm8hkq.webp"
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "user",
    },
    firstName: {
        type: String,
        trim:true
    },
    lastName:{
      type: String,
      trim:true
    },
    bio: {
        type: String,
    },
    phoneNumber: {
        type: String,
    },
    lodge: {
        type: String,
        trim: true
    },
    campus: {
        type: String,
        trim: true
    },
    city: {
        type: String,
        trim: true
    },
    state: {
        type: String,
        trim: true
    },
    country: {
        type: String,
        trim: true
    },
    cart: [cartItemSChema],
    wishlist: [wishListSchema],

}, { timestamps: true });

const User = models.User || model("User", UserSchema);

export default User;