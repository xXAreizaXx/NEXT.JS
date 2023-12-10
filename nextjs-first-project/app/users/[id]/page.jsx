// NextJS
import Image from "next/image";

// Fetch
async function fetchUser(id) {
    const res = await fetch(`https://reqres.in/api/users/${id}`);
    const json = await res.json();

    return json.data;
}

export default async function UserPage({ params }) {
    // Const
    const user = await fetchUser(params?.id);

    return (
        <li className="bg-slate-400 mb-2 p-4 rounded-md text-black flex justify-between items-center">
            <div>
                <h5 className="font-bold">
                    {user?.id}. {user?.first_name} {user?.last_name}
                </h5>
                <p className="text-slate-100">{user?.email}</p>
            </div>
            <Image
                alt={user?.first_name}
                className="rounded-full"
                height={75}
                src={user?.avatar}
                width={75}
            />
        </li>
    );
}