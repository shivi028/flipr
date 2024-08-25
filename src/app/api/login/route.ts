import {connect} from "@/dbConfig/dbConnect";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";


export async function POST(request: Request){
    try {
        await connect();

        const reqBody = await request.json()
        const {email, password} = reqBody

        console.log(reqBody);

        const user = await User.findOne({email})

        if(!user){
            return Response.json({error: "User does not exist"}, {status: 400})
        }

        console.log("User Exist")
        
        const validPassword = await bcryptjs.compare(password, user.password)

        if(!validPassword){
            return Response.json({error: "Check Your credential"}, {status: 500})
        }
        
        const tokenPayload = {
            id:user._id,
            username: user.username,
            email:user.email
        }

        const token = await jwt.sign(tokenPayload, process.env.TOKEN_SECRET!, {expiresIn: '1d'})

        const response = Response.json({
            message:"Logged In Successfully",
            success:true
        })

        cookies().set("token", token, {
            httpOnly: true
        })

        return response
        
    } catch (error:any) {
        return Response.json({error: error.message}, {status: 500})

    }
}