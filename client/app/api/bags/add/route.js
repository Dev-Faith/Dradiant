import dbConnect from "../../../../Utils/Db";
import { Product } from "../../../../Models/Product";
import { NextResponse } from "next/server";

export async function POST(req) {
  await dbConnect();
  const { name, price, amount, category, desc, image, quantity } =
    await req.json();

  try {
    const newBag = new Product({
      name,
      price,
      amount,
      category,
      desc,
      image,
      quantity,
    });

    await newBag.save();
    return NextResponse.json({ message: "Product added successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to add product", details: error.message },
      { status: 500 }
    );
  }
}
