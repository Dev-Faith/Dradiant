import dbConnect from "@/Utils/Db";
import { NextResponse } from "next/server";
import User from "@/Models/User";

export async function GET(req){
    await dbConnect();
    const { userId } = req.body;

    try {
        const user = await User.findById(userId).populate("wishlist.productId");
        NextResponse.json(user.wishlist);
    } catch (error) {
        NextResponse.json({error: "Failed to get wishlist", details: error.message}, {status: 500});
    }
};