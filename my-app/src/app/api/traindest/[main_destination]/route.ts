import prisma from "../../../lib/connect";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const { searchParams } = await new URL(req.url);
  const username = searchParams.get("main_destination");

  try {
    if (!username) {
      return new NextResponse(
        JSON.stringify({ message: "Train destination is required" }),
        { status: 400 }
      );
    }

    const userData = await prisma.train.findMany({
      where: {
        main_destination: username,
      },
    });

    if (!userData) {
      return new NextResponse(
        JSON.stringify({ message: "Train number not found", username }),
        { status: 404 }
      );
    }

    return new NextResponse(JSON.stringify(userData), { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }),
      { status: 500 }
    );
  }
};
