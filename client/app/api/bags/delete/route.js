import dbConnect from "../../../../Utils/Db";
import { NextResponse } from "next/server";
import Product from "../../../../Models/Product";

export async function DELETE(req) {
  await dbConnect();
  try {
    const { productId, userId, empty, decrement } = await req.json();
    const products = await Product.find();
    console.log("products", products);

    empty
      ? await Product.deleteMany({})
      : (Product.cart = Product.cart.filter(
          (item) => item.productId.toString() !== productId
        ));
    return NextResponse.json(
      { message: "All products removed from the shop successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to clear shop", details: error.message },
      { status: 500 }
    );
  }
}
