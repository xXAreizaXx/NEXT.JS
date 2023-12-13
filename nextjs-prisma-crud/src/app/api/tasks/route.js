// NextJS
import { NextResponse } from "next/server";

// Libs
import { prisma } from "@libs/prisma";

export async function GET() {
    // Prisma
    const tasks = await prisma.task.findMany();

    return NextResponse.json(tasks);
}

export async function POST(request) {
    // Body
    const data = await request.json();

    // Prisma
    const newTask = await prisma.task.create({
        data: {
            title: data.title,
            description: data.description,
        }
    });

    return NextResponse.json(newTask);
}