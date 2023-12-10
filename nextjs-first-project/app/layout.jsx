// Components
import Navbar from "@components/Navbar";

// Styles
import "./globals.css";

export const metadata = {
    title: "NextJS | FaztCode",
    description: "This is my first Next.js app.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                <main className="container mx-auto h-[calc(100vh - 7rem)] flex justify-center items-center">
                    {children}
                </main>
            </body>
        </html>
    );
}
