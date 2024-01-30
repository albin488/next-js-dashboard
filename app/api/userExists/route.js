import connectMongoDB from "@/libs/mongodb";
import Regis from "@/models/register";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connectMongoDB();
    const { email } = await request.json();
    const emailR = await Regis.findOne({ email }).select("_id");
    console.log("email:", emailR);
    return NextResponse.json({ emailR });
  } catch (error) {
    return NextResponse.json({ massage: "erreur:", error }, { status: 500 });
  }
}
