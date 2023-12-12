// Components
import Navbar from "@components/Navbar";

// Font
import { Roboto } from "next/font/google";

// Metadata
export const metadata = {
    description: "Next Project - Home",
    keywords: "next, project",
    title: "Next Project - Home",
};

// Roboto Font
const roboto = Roboto({
    styles: ["normal", "italic"],
    subsets: ["latin"],
    weight: ["300", "400", "500", "700"],
});

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={roboto?.className}>
                <Navbar />

                {children}
            </body>
        </html>
    );
}
