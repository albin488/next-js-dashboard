import connectMongoDB from "@/libs/mongodb";
import Regi from "@/models/register";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(request) {
  try {
    const { name, email, password } = await request.json();
    const hashedPassword = await bcrypt.hash(password, 10);

    await connectMongoDB();
    await Regi.create({ name, email, password: hashedPassword });
    return NextResponse.json({ message: "user created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ massage: "erreur:", error }, { status: 500 });
  }
}
