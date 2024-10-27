import prisma from "../../lib/connect";
import { NextRequest, NextResponse } from "next/server";

//FETCHING ALL CATEGORIES
export const GET = async () => {
  try {
    const trains = await prisma.train.findMany();
    return new NextResponse(JSON.stringify(trains), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }),
      { status: 500 }
    );
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const projects = await prisma.train.create({
      data: body,
    });
    return new NextResponse(JSON.stringify(projects), { status: 201 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something is not good" }),
      { status: 500 }
    );
  }
};
