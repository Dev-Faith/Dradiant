import dbConnect from "@/Utils/Db";
import { NextResponse } from "next/server";
import User from "@/Models/User";

export async function POST(req){
    await dbConnect();
    const { productId, userId } = await req.json();

    try {
        const user = await User.findById(userId);

        if (!user) {
            return NextResponse.json({ error: "please login first to add items to the wishlist" }, { status: 404 });
        }

        const existingwishlistItem = user.wishlist.find((item) => item.productId.toString() === productId);

        if (!existingwishlistItem) {
            user.wishlist.push({productId});
        };

        await user.save();

        return NextResponse.json(user.wishlist);
    } catch (error) {
        return NextResponse.json({error: "Failed to add to wishlist", details: error.message}, {status: 500});
    }
};

