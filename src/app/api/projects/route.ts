import { NextResponse } from "next/server";
import { prisma } from "@/db";
import validator from "validator"; // Add this import

export async function GET() {
  try {
    const projects = await prisma.project.findMany();
    return NextResponse.json({ projects });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    let { name } = body;

    if (
      !name ||
      typeof name !== "string" ||
      !validator.isLength(name, { min: 1, max: 100 })
    ) {
      return NextResponse.json(
        { error: "Project name is required and must be 1-100 characters." },
        { status: 400 }
      );
    }

    name = validator.escape(name); // Sanitize input

    const project = await prisma.project.create({
      data: { name },
    });

    return NextResponse.json({ project }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create project" },
      { status: 500 }
    );
  }
}
