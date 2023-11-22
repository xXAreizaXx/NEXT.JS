// NextJS
import type { Metadata } from "next";

// Providers
import { Providers } from "./providers";

// Styles
import "./globals.css";

// Metadata
export const metadata: Metadata = {
    title: "Upload File App",
    description: "App to upload files",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
