import prisma from "@/app/lib/connect";
import { NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";



export async function DELETE(req:Request){
    
  const { searchParams } = await new URL(req.url);
  const username = searchParams.get("train_no")
 
  
  try {
      if (!username) {

        return new NextResponse(
          JSON.stringify({ message: 'Train number is required' }),
          { status: 400 }
        );
      }
      const trainNo = parseInt(username, 10);

      const userData = await prisma.train.deleteMany({
        where: {
          train_no: trainNo,
        },
      });

  if (!userData) {

    return new NextResponse(
      JSON.stringify({ message: 'Train number not found',username }),
      { status: 404 }
    );
  }

  return new NextResponse(JSON.stringify(userData), { status: 200 });
    }catch(e){
        console.error(e);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    
    }
}
