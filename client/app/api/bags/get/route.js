import { NextResponse } from "next/server";
import { Product } from "../../../../Models/Product";
import dbConnect from "../../../../Utils/Db";  


export async function GET() {
    await dbConnect();
    try {
        const product = await Product.find({});
        return NextResponse.json(product);
    } catch (error) {
        return NextResponse.json(
        { error: "Failed to get products", details: error.message },
        { status: 500 }
        );
    }
}