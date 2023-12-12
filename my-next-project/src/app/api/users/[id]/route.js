// NextJS
import { NextResponse } from "next/server";

export function GET(request, { params }) {
    const { searchParams } = new URL(request.url);

    return NextResponse.json({
        message: "Obteniendo usuario #" + params.id,
        searchParams
    });
}