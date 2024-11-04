import jwt from "jsonwebtoken";
import dbConnect from "../../../../Utils/Db";
import User from "../../../../Models/User";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    await dbConnect();

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { error: "Invalid Credentials" },
        { status: 401 }
      );
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "Invalid Credentials" },
        { status: 401 }
      );
    }

    const payload = {userId:user._id, role:user.role}

    //generate token
    const token = jwt.sign(payload, process.env.JWT_KEY, {
      expiresIn: "1h",
    });

    return NextResponse.json({ message: "Login Successful", token, role: user.role });
  } catch (error) {
    console.error("Error login in:", error);
    return NextResponse.json(
      { error: "Can't login. Something is wrong" },
      { status: 400 }
    );
  }
}
