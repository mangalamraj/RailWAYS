import prisma from "../../../lib/connect";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const { searchParams } = await new URL(req.url);
  const train_no = searchParams.get("train_no");

  try {
    if (!train_no) {
      return new NextResponse(
        JSON.stringify({ message: "Train number is required" }),
        { status: 400 }
      );
    }
    const trainNo = parseInt(train_no, 10);

    const trainData = await prisma.train.findUnique({
      where: {
        train_no: trainNo,
      },
    });

    if (!trainData) {
      return new NextResponse(
        JSON.stringify({ message: "Train number not found", trainData }),
        { status: 404 }
      );
    }

    return new NextResponse(JSON.stringify(trainData), { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }),
      { status: 500 }
    );
  }
};
