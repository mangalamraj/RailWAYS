import prisma from '../../../lib/connect';
import { NextRequest, NextResponse } from "next/server"


export const GET = async (req:NextRequest) => {
  
    const { searchParams } = await new URL(req.url);
    const username = searchParams.get("passengerPhone")
   
    
    try {
        if (!username) {

          return new NextResponse(
            JSON.stringify({ message: 'Passenger phone no is required' }),
            { status: 400 }
          );
        }
        const passNo = parseInt(username, 10);
 
        const userData = await prisma.passenger.findMany({
          where: {
            passengerPhone: passNo,
          },
        });

    if (!userData) {

      return new NextResponse(
        JSON.stringify({ message: 'Passenger phone not found',username }),
        { status: 404 }
      );
    }

    return new NextResponse(JSON.stringify(userData), { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ message: 'Something went wrong' }),
      { status: 500 }
    );
  }
};