import dbConnect from "../../../../Utils/Db";
import User from "../../../../Models/User";
import { NextResponse } from "next/server";


export async function PATCH(req) {
    try {
        await dbConnect();
        const {
            userId,
            firstName,
            lastName,
            email,
            bio,
            phoneNumber,
            lodge,
            campus,
            city,
            state,
            country,
            type
        } = await req.json();

        // Ensure user exists
        const user = await User.findById(userId);
        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }

        switch (type) {
            case "personal":
                if (email) {
                    const existingUser = await User.findOne({ email });
                    if (existingUser && existingUser._id.toString() !== userId) {
                        return NextResponse.json({ message: "Email is already in use" }, { status: 400 });
                    }
                }
                const updatedUser = await User.findByIdAndUpdate(
                    userId,
                    { firstName, lastName, email, bio, phoneNumber },
                    { new: true }
                );
                return NextResponse.json({ message: "Profile Updated Successfully", user:updatedUser }, { status: 200 });

            case "address":
                const updatedAddress = await User.findByIdAndUpdate(
                    userId,
                    { lodge, campus, city, state, country },
                    { new: true }
                );
                return NextResponse.json({ message: "Address Updated Successfully", user: updatedAddress }, { status: 200 });

            default:
                return NextResponse.json({ message: "Invalid Request" }, { status: 400 });
        }

    } catch (error) {
        console.error("Error updating profile:", error);
        return NextResponse.json({ message: "An error occurred while updating profile", details: error.message }, { status: 500 });
    }
}
