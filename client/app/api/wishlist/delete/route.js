import dbConnect from "@/Utils/Db";
import { NextResponse } from "next/server";
import User from "@/Models/User";

export async function DELETE(){
    await dbConnect();
    const {userId} = req.query;
    const {productId} = req.body;
    try {
        const user = await User.findById(userId);
        user.wishlist = user.wishlist.filter(item=>item.productId.toString() !== productId);
        await user.save();
        NextResponse.json({message:"Wishlist item removed!"}, {status:200});
    } catch (error) {
        NextResponse.json({message:"item removal failed", details:error.message}, {status: 500});
    }
};