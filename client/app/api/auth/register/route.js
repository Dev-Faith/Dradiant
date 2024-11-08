import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import dbConnect from "../../../../Utils/Db";
import User from "../../../../Models/User";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    //connecting DB
      await dbConnect();

    //Check if user already exists
    const existingUser = await User.findOne({ email });


    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists. Try a different email" },
        { status: 400 }
      );
    }
    //hashed Password
    const hashedPassword = await bcrypt.hash(password, 10);

    //create a new user in DB
    const user = await User.create({
      email,
      password: hashedPassword,
    });

    return NextResponse.json({
      message: "registration Successful!",
      user,
      userId:user._id
    });
  } catch (error) {
    console.error("Error handling registration:", error);
    return NextResponse.json({ error: "There's an error here" }, { status: 400 });
  }
}
