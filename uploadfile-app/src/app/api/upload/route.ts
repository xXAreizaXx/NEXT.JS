// NodeJS
import { writeFile } from "fs/promises";
import path from "path";

export async function POST(request: Request): Promise<Response> {
    // Request
    const data = await request?.formData();

    const file = data?.get('file') as File;

    const bytes = await file.arrayBuffer();

    const buffer = Buffer.from(bytes).toString('base64');

    const filePath = path.join(process.cwd(), 'src', 'images', file.name);

    writeFile(filePath, buffer, 'base64');

    console.log('[Write File]: ', filePath);

    return new Response(JSON.stringify({
        message: 'Archivo subido correctamente!'
    }));
}