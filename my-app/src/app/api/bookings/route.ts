
import prisma from "../../lib/connect";
import { NextRequest, NextResponse } from "next/server"



export const GET = async()=>{
    try{
          
    const projects= await prisma.booking.findMany();
    return new NextResponse(
        JSON.stringify(projects),
        {status:200}
    )

    }catch(err){
        console.log(err);
        return new NextResponse(
            JSON.stringify({message:"Something went wrong"}),
            {status:500}
        );
    }
};


export const POST = async(req:NextRequest)=>{
    try{
          const body=await req.json();
const projects= await prisma.booking.create({
    data:body,
});
    return new NextResponse(JSON.stringify(projects),{status:201});

    }catch(err){
      console.log(err);
        return new NextResponse(
            JSON.stringify({message:"Something is not good"}),
            {status:500}
        );
    }
};