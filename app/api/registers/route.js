import connectMongoDB from "@/libs/mongodb";
import Regi from "@/models/register";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { name, email, password } = await request.json();
    console.log("name:", name);
    console.log("email:", email);
    console.log("password:", password);

    //await connectMongoDB();
    // await Regi.create({ name, email, password });
    return NextResponse.json({ message: "user created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ massage: "eruer ", error }, { status: 400 });
  }
}
