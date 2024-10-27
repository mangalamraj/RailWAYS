import prisma from "@/app/lib/connect";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function PUT(req: Request) {
  const { searchParams } = await new URL(req.url);
  const username = searchParams.get("username");
  try {
    const body = await req.json();
    const { password } = body;
    if (!username) {
      return new NextResponse(
        JSON.stringify({
          message: "Username is required",
        }),
        { status: 400 }
      );
    }
    const updatedUser = await prisma.users.update({
      where: { username: username },
      data: { password: password },
    });

    const { password: updatedPassword, ...rest } = updatedUser;

    return new NextResponse(
      JSON.stringify({ user: rest, message: "Password updated successfully" }),
      { status: 200 }
    );
  } catch (e) {
    console.error(e);
    return new NextResponse(
      JSON.stringify({ message: "Internal Server Error" }),
      { status: 500 }
    );
  }
}
