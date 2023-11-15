import prisma from '../../../lib/connect';
import { NextRequest, NextResponse } from "next/server"


export const GET = async (req:NextRequest) => {
  
    const { searchParams } = await new URL(req.url);
    const username = searchParams.get("id")
   
    
    try {
        if (!username) {

          return new NextResponse(
            JSON.stringify({ message: 'Booking id is required' }),
            { status: 400 }
          );
        }
        const idNo = parseInt(username, 10);
 
        const userData = await prisma.booking.findUnique({
          where: {
            id: idNo,
          },
        });

    if (!userData) {

      return new NextResponse(
        JSON.stringify({ message: 'Booking id not found',username }),
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