import connectMongoDB from "@/libs/mongodb";
import Regis from "@/models/register";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(request) {
  try {
    const { name, email, password, role, statu } = await request.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectMongoDB();
    await Regis.create({ name, email, role, statu, password: hashedPassword });
    return NextResponse.json({ message: "user created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ massage: "erreur:", error }, { status: 500 });
  }
}
