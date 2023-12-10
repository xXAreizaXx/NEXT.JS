// NextJS
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center px-10 p-3 bg-slate-400 text-black mb-4">
            <ul>
                <li>
                    <Link href="/" className="font-bold text-black">
                        Home
                    </Link>
                </li>
            </ul>
        </nav>
    );
}