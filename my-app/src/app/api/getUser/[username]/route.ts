import prisma from "@/app/lib/connect";
import { NextRequest, NextResponse } from "next/server";

export const GET = async(req:NextRequest)=>{
    const {searchParams} = await new URL(req.url);
    const username = searchParams.get("username");
    try{

    if(!username){
        return new NextResponse(
            JSON.stringify({
                message:'Username is required'
            }),{status:400}
        )
    }

    const userData = await prisma.users.findUnique({
        where:{
            username:username
        }
    })

    if (!userData) {

        return new NextResponse(
          JSON.stringify({ message: 'User not found',username, }),
          { status: 404 }
        );
      }

      return new NextResponse(JSON.stringify(userData),{status:201});
    }catch(e){
        console.error(e);
        return new NextResponse(
          JSON.stringify({ message: 'Something went wrong' }),
          { status: 500 }
        );
      }
}