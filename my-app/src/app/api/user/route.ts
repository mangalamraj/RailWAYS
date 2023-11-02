import { db } from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function POST(req:Request) {
    try{
        const body = await req.json();
        const {name,username,mobile,email,password,Confirmpassword} = body;
        const existingUserByEmail = await db.users.findUnique({
            where:{email:email}
        })

        if (existingUserByEmail){
            return NextResponse.json({users:null,message:"User already exists."},{status:409})
        }

        const newUser = await db.users.create({
            data:{
                name,
                username,
                mobile,
                email,
                password,
                Confirmpassword
            }
        })

        const {...rest} = newUser;

        return NextResponse.json({user:rest,message:"User created!"},{status:201});
    }catch(e){
        return NextResponse.json({message:"Something went wrong"},
                                 {status:500});
    }
}