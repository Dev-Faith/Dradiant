import { NextResponse } from "next/server";
import Product from "../../../../Models/Product";
import dbConnect from "../../../../Utils/Db";

export async function GET() {
  await dbConnect();
  try {
    const product = await Product.find({});

    // Create a new response with headers to disable caching
    const response = NextResponse.json(product);
    response.headers.set(
      "Cache-Control",
      "no-store, no-cache, must-revalidate, proxy-revalidate"
    );

    return response;
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to get products", details: error.message },
      { status: 500 }
    );
  }
}
