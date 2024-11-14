import jwt from "jsonwebtoken";
import dbConnect from "../../../../Utils/Db";
import User from "../../../../Models/User";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

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

    // const payload = {userId:user._id, role:user.role}
    const payload = {...user};

    //generate token
    const token = jwt.sign(payload, process.env.JWT_KEY, {
      expiresIn: "1h",
    });

    return NextResponse.json({
      message: "registration Successful!",
      user,
      userId:user._id,
      token, role: user.role,
    });
  } catch (error) {
    console.log("Error handling registration:", error);
    return NextResponse.json({ error: "There's an error here", details:error }, { status: 400 });
  }
}
