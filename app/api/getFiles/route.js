// pages/api/getFiles.js
import fs from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

export async function GET() {
  const folderPath = path.resolve("./uploads");
  const files = await fs.readdir(folderPath);
  //res.status(200).json(files);
  return NextResponse.json({ files });
}
