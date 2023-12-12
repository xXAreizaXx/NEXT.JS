"use client";

// NextJS
import { useRouter } from "next/navigation";

export default function AboutPage() {
    // Router
    const router = useRouter();

    return (
        <section>
            <h1>About page</h1>

            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum sint, reiciendis quam magnam iure explicabo doloribus rem voluptates praesentium nulla.</p>

            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => {
                    router.push("/");
                }}
            >
                Click me
            </button>
        </section>
    );
}