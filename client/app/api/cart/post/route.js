import dbConnect from "../../../../Utils/Db";
import User from "../../../../Models/User";
import { NextResponse } from "next/server";

export async function POST(req) {
  await dbConnect();
  console.log("POST request received at /api/cart/post");

  // Extract request body data
  const { productId, quantity, userId, increment, decrement } =
    await req.json();

  // console.log("Request body data:", { productId, quantity, userId });

  try {
    // Find the user by ID
    const user = await User.findById(userId);

    // Return an error if the user does not exist
    if (!user) {
      return NextResponse.json(
        { error: "please login first to add items to cart" },
        { status: 404 }
      );
    }

    // Check if the product already exists in the user's cart
    const existingCartItem = user.cart.find(
      (item) => item.productId.toString() === productId
    );

    // increment ? existingCartItem.quantity++ : decrement ? existingCartItem.quantity-- : null;
    if (increment && !existingCartItem) {
      user.cart.push({ productId, quantity });
    }
    if (increment) {
      existingCartItem.quantity++;
      console.log(existingCartItem.quantity);
      await user.save();
      return NextResponse.json(
        { message: "Item quantity plus one!" },
        { status: 200 }
      );
    }
    if (existingCartItem) {
      return NextResponse.json(
        { message: "Item is already in the cart" },
        { status: 400 }
      );
      // existingCartItem.quantity += quantity;
    } else {
      // Add the new item to the user's cart
      user.cart.push({ productId, quantity });
    }

    // Save the updated user document to the database
    await user.save();

    // Return a success response
    return NextResponse.json(
      { message: "Item added to cart successfully" },
      { status: 200 }
    );
  } catch (error) {
    // Return an error response if something goes wrong
    return NextResponse.json(
      { error: "Failed to add item to cart", details: error.message },
      { status: 500 }
    );
  }
}
