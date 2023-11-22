// NextJS
import { NextResponse } from "next/server";

// Twilio
import twilio from 'twilio';

// Config
const accountSID = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioNumber = process.env.TWILIO_NUMBER;

// Twilio Client
const client = twilio(accountSID, authToken);

export async function POST(request: Request): Promise<Response> {
    try {
        // Request
        const data = await request?.json();

        const message = await client.messages.create({
            body: data.message,
            from: twilioNumber,
            to: data.phone
        })
    
        return NextResponse.json({ message: 'Mensaje enviado', data: message })
    } catch (error) {
        return NextResponse.json({ message: 'Error al enviar el mensaje', data: error })
    }
}