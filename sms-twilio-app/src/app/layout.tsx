// NextJS
import type { Metadata } from "next";

// Providers
import { Providers } from "./providers";

// Sonner
import { Toaster } from 'sonner'

// Styles
import "./globals.css";

// Metadata
export const metadata: Metadata = {
    title: "SMS Twilio App",
    description: "App to send SMS messages using Twilio",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <Toaster position="top-center" />
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
