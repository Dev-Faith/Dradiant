import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json(
        { error: "Missing required parameter - file" },
        { status: 400 }
      );
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer).toString("base64");
    const dataURI = `data:${file.type};base64,${buffer}`;

    const uploadResponse = await cloudinary.uploader.upload(dataURI);

    return NextResponse.json({ url: uploadResponse.secure_url });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Image upload failed",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
