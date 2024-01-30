import connectMongoDB from "@/libs/mongodb";
import Regi from "@/models/register";
import { NextResponse } from "next/server";

export async function GET() {
  await connectMongoDB();
  const users = await Regi.find();
  return NextResponse.json({ users });
}
export async function DELETE(request) {
  const _id = request.nextUrl.searchParams.get("id");

  try {
    await connectMongoDB();

    // Create a query object with the _id field
    const query = { id: _id };

    // Use findOneAndDelete with the query object
    await Regi.findByIdAndDelete(_id);
    return NextResponse.json({ message: "use deleted" }, { status: 200 });
  } catch (error) {
    console.error("Error:", error.message);
    return new NextResponse.json(
      { message: "Internal Server Error" },
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
