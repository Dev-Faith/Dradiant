import dbConnect from "../../../../Utils/Db";
import User from "../../../../Models/User";
import { NextResponse } from "next/server";

export async function DELETE(req) {
    await dbConnect();

    try {
        const { productId, userId, empty, decrement } = await req.json();  
        const user = await User.findById(userId);  

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        if (decrement) {
            const existingCartItem = user.cart.find((item) => item.productId.toString() === productId);
            if (existingCartItem.quantity > 1) {
                existingCartItem.quantity--;
                await user.save();
                return NextResponse.json({ message: "Item quantity minus one!" }, { status: 200 });
            } else {
                user.cart = user.cart.filter(item => item.productId.toString() !== productId);
                await user.save();
                return NextResponse.json({ message: "Item removed from cart successfully" }, { status: 200 });
            }
        }

    
        empty ? user.cart = [] : user.cart = user.cart.filter(item => item.productId.toString() !== productId);
        await user.save();

        return NextResponse.json({ message: "Item removed from cart successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to remove item from cart", details: error.message }, { status: 500 });
    }
};
