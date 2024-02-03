import fs from "fs/promises";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const formData = await request.formData();
    // const file = formData.get("file");
    // Get an array of all files in the request
    const files = Array.from(formData.entries()).filter(
      ([key, value]) => value instanceof File
    );

    //const name = formData.get("name");

    // Check if any files are present
    if (files.length === 0) {
      return NextResponse.json(
        { error: "Files not provided in the request" },
        { status: 400 }
      );
    }
    //console.log("fille:", formData);
    for (const [key, file] of files) {
      const fileName = file.name;
      const filePath = `uploads/${fileName}`;

      // Ensure the file buffer is a Buffer
      const fileBuffer = Buffer.from(await file.arrayBuffer());

      await fs.writeFile(filePath, fileBuffer);
    }
    return NextResponse.json(
      { message: "File saved successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error processing the file:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
