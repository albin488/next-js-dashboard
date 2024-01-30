import connectMongoDB from "@/libs/mongodb";
//import User from "@/models/user";
import Regi from "@/models/register";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const {
    newName: name,
    newEmail: email,
    newPassword: password,
    newRole: role,
    newStatu: statu,
  } = await request.json();
  await connectMongoDB();
  await Regi.findByIdAndUpdate(id, {
    name,
    email,
    password,
    role,
    statu,
  });
  return NextResponse.json({ message: "User updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const user = await Regi.findOne({ _id: id });
  return NextResponse.json({ user }, { status: 200 });
}
