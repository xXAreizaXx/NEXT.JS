// NextJS
import Link from "next/link";

// Metadata
export const metadata = {
    description: 'Next Project - Store',
    keywords: 'next, project',
    title: 'Next Project - Store',
}

export default function StoreLayout({ children }) {
    return (
        <>
        <nav>
            <h3>Store Section</h3>

            <ul>
                <li>
                    <Link href="/store/categories">
                        Categories
                    </Link>
                </li>
            </ul>
        </nav>

            {children}
        </>
    )
}
