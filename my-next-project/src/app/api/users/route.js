// NextJS
import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json({ message: "Obteniendo usuarios" });
}

export async function POST(request) {
    const data = await request.json();
    
    return NextResponse.json({
        message: "Creando usuario",
        body: data
    });
}

export function PUT() {
    return NextResponse.json({ message: "Actualizando usuario" });
}

export function DELETE() {
    return NextResponse.json({ message: "Eliminando usuario" });
}