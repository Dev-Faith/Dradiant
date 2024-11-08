import dbConnect from "@/Utils/Db";
import { NextResponse } from "next/server";
import User from "@/Models/User";

export async function DELETE(req){
    await dbConnect();
    const { productId, userId, empty, decrement } = await req.json();  
    try {
        const user = await User.findById(userId);
        user.wishlist = user.wishlist.filter(item=>item.productId.toString() !== productId);
        await user.save();
       return NextResponse.json({message:"Wishlist item removed!"}, {status:200});
    } catch (error) {
       return NextResponse.json({message:"item removal failed", details:error.message}, {status: 500});
    }
};