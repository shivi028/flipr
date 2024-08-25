import {connect} from "@/dbConfig/dbConnect";
import SubscribeEmail from "@/models/subscribeModel";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest){
    try {
        await connect();
        
        const reqBody = await request.json()
        const { mail } = reqBody;

        const Mail = new SubscribeEmail({
          mail
        })

        const savedMail = await Mail.save()
        console.log(savedMail);

  
        return NextResponse.json({
            message: "Email saved successfully",
            success: true,
            savedMail
        })
        
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}      