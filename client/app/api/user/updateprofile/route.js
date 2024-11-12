import dbConnect from "../../../Utils/Db";
import User from "../../../Models/User";
import { NextResponse } from "next/server";

export async function post(req){

    try {
        await dbConnect();
        const  {userId, firstName, lastName, email, bio, phoneNumber, lodge, campus, city, state, country} = req.json();

        const user = await User.findByIdAndUpdate(userId, {firstName, lastName, email, bio, phoneNumber, lodge, campus, city, state, country}, {new: true});

        return NextResponse.json({message: "Profile Updated Successfully", user}, {status: 200});

    } catch (error){
        return NextResponse.json({message: "An error occured while updating profile"}, {status: 500});
    }
}