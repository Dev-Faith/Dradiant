export const dynamic = "force-dynamic";
import dbConnect from "../../../../Utils/Db";
import { NextResponse } from "next/server";
import User from "../../../../Models/User";
import Product from "@/Models/Product";

export async function GET(req) {
  await dbConnect();
  const url = new URL(req.url);
  const userId = url.searchParams.get("userId");

  try {
    const user = await User.findById(userId).populate("wishlist.productId");
    return NextResponse.json(user.wishlist);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to get wishlist", details: error.message },
      { status: 500 }
    );
  }
}
