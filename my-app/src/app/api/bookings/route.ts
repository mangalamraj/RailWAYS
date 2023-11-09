
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
interface Passenger {
  passenger_name: string;
  passenger_phon: number;
  passenger_age: number;
  passenger_class: string;
  passenger_gender: 'male' | 'female';
  passenger_berth: 'lower' | 'upper' | 'middle' | 'sidelower' | 'sideupper';
  passenger_status: string;
}

export const POST = async (req: NextRequest) => {
    try {
      const { train_no, passengers, passenger_fare } = await req.json();
  
      // Save the booking data to the database using Prisma
      const newBooking = await prisma.booking.create({
        data: {
          trainNo: train_no,
          passengerFare: passenger_fare,
          passengers: {
            createMany: {
              data: passengers.map((passenger:Passenger) => ({
                passengerName: passenger.passenger_name,
           
                passengerPhone: passenger.passenger_phon,
                passengerAge: passenger.passenger_age,
                passengerClass: passenger.passenger_class,
                passengerGender: passenger.passenger_gender,
                passengerBerth: passenger.passenger_berth,
                passengerStatus: passenger.passenger_status,
              })),
            },
          },
        },
      });
  
      return new NextResponse(JSON.stringify(newBooking), { status: 201 });
    } catch (err) {
      console.error(err);
      return new NextResponse(
        JSON.stringify({ message: "Failed to create booking" }),
        { status: 500 }
      );
    }
  };
  


