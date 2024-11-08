import dbConnect from "@/Utils/Db";
import { NextResponse } from "next/server";
import User from "@/Models/User";

export async function POST(req){
    await dbConnect();
    const {userId} = req.query;
    const {productId, quantity} = req.body;

    try {
        const user = await User.findById(userId);
        const existingwishlistItem = user.wishlist.find((item) => item.product.toString() === productId);

        if (!existingwishlistItem) {
            user.wishlist.push({productId});
        };

        await user.save();

        return NextResponse.json(user.wishlist);
    } catch (error) {
        NextResponse.json({error: "Failed to add to wishlist", details: error.message}, {status: 500});
    }
};

