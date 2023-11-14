
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


  export const PUT = async (req: NextRequest) => {
    try {
      // Validate and extract data from the request body
      const body = await req.text();


      const requestBody = JSON.parse(body);
  
      // Ensure a valid Prisma instance is available
      const updatedPassenger = await prisma.passenger.update({
        where: {
          id: requestBody.id,
        },
        data: {
          passengerStatus: 'cancelled',
        },
      });
  
      // Return a successful response with the updated passenger data
      return new NextResponse(JSON.stringify(updatedPassenger), { status: 200 });
    } catch (err) {
      // Log detailed error information for debugging
      console.error('Error updating passenger status:', err);
  
      // Return an error response with a generic error message
      return new NextResponse(
        JSON.stringify({ message: 'Failed to update passenger status' }),
        { status: 500 }
      );
    }
  };

  
  
  
  
  
  


