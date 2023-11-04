import prisma from "@/app/lib/connect";
import { NextResponse } from "next/server";

export async function POST(req:Request) {
    try{
        const body = await req.json();
        const {email,password}=body;

        const existingUser = await prisma.users.findUnique({
            where:{
                email:email,
            }
        })

        if(existingUser && existingUser.password===password){
            const {email,password,username, ...rest} = existingUser;
            return NextResponse.json({
                email,
                username,
                message:"logged in"
            },{status:201});
        }else{
            return NextResponse.json({
                message: "Invalid email or password",
            }, { status: 401 });
            
        }

    }catch(e){
        return NextResponse.json({message:"Something went wrong"},{status:500})
    }
}