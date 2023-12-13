// NextJS
import { NextResponse } from "next/server";

// Libs
import { prisma } from "@libs/prisma";

export async function GET(request, { params }) {
    // Prisma
    const task = await prisma.task.findUnique({
        where: {
            id: Number(params.id)
        }
    });

    return NextResponse.json(task);
}

export async function PUT(request, { params }) {
    // Body
    const data = await request.json();

    // Prisma
    const updatedTask = await prisma.task.update({
        where: {
            id: Number(params.id)
        },
        data: {
            title: data.title,
            description: data.description,
        }
    });

    return NextResponse.json(updatedTask);
}

export async function DELETE(request, { params }) {
    try {
        // Prisma
        const removedTasks = await prisma.task.delete({
            where: {
                id: Number(params.id)
            }
        });
    
        return NextResponse.json({
            message: "Eliminando tarea #" + params.id,
            data: removedTasks
        });
    } catch (error) {
        return NextResponse.json({
            message: "No se pudo eliminar la tarea #" + params.id,
            data: error
        });
    }
}
