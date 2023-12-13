"use client";

// NextJS
import { useRouter } from "next/navigation";

export default function NewTaskPage() {
    // Router
    const router = useRouter();
  
    // Functions
    const handleSubmit = async (event) => {
        // Event
        event.preventDefault();

        // Constants
        const title = event.target.title.value;
        const description = event.target.description.value;

        const res = await fetch("/api/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title,
                description,
            }),
        });

        const data = await res.json();

        router.push("/");
    };

    return (
        <div className="flex flex-col gap-4 items-center">
            <h1 className="text-2xl font-bold text-white">Create a new task</h1>
            <form onSubmit={handleSubmit} className="bg-slate-700 p-4 rounded-lg shadow-md mt-4 flex flex-col gap-4">
                <label className="text-white">Task Name</label>
                <input id="title" type="text" placeholder="Task name" className="border border-gray-300 px-4 py-2 rounded-lg shadow-sm text-black" />

                <label className="text-white">Task Description</label>
                <textarea id="description" rows={3} placeholder="Task description" className="border border-gray-300 px-4 py-2 rounded-lg shadow-sm text-black" />

                <button type="submit" className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg shadow-md text-white">
                  Create
                </button>
            </form>
        </div>
    );
}