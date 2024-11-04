import { NextResponse } from "next/server";
import { Products } from "../../../../Models/Product";
import dbConnect from "../../../../Utils/Db";  


export async function GET() {
    await dbConnect();
    try {
        const products = await Products.find({});
        return NextResponse.json(products);
    } catch (error) {
        return NextResponse.json(
        { error: "Failed to get products", details: error.message },
        { status: 500 }
        );
    }
}