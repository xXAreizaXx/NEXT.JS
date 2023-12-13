// Styles
import "./globals.css";

// Metadata
export const metadata = {
    title: "NextJS CRUD Prisma",
    description: "NextJS CRUD Prisma",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <main className="flex min-h-screen flex-col items-center justify-between p-24">
                    {children}
                </main>
            </body>
        </html>
    );
}
