import User from "../../../../Models/User";
import dbConnect from "@/Utils/Db";
import { NextResponse } from "next/server";

export async function GET(req) {
    await dbConnect();
    const url = new URL(req.url);
    const userId = url.searchParams.get("userId");
  
    try {
      const user = await User.findById(userId).populate("cart.productId");
      return NextResponse.json(user.cart);
    } catch (error) {
      return NextResponse.json(
        { error: "Failed to get cart", details: error.message },
        { status: 500 }
      );
    }
  }
  