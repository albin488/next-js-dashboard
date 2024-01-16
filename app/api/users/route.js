import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import { redirect } from "next/navigation";

export async function POST(request) {
  const { name, lastname, email, date, adress, telephone, detail } =
    await request.json();
  await connectMongoDB();
  await User.create({ name, lastname, email, date, adress, telephone, detail });
  return NextResponse.json({ message: "user created" }, { status: 201 });
  redirect("/");
}
export async function GET() {
  await connectMongoDB();
  const users = await User.find();
  return NextResponse.json({ users });
}
export async function DELETE(request) {
  const _id = request.nextUrl.searchParams.get("id");

  try {
    await connectMongoDB();

    // Create a query object with the _id field
    const query = { id: _id };

    // Use findOneAndDelete with the query object
    await User.findByIdAndDelete(_id);
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
