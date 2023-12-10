"use client";

// NextJS
import Image from "next/image";
import Link from "next/link";

export default function Users({ users }) {
    return (
        <ul>
            {users.map((user) => (
                <Link href={`/users/${user.id}`} key={user.id}>
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
                </Link>
            ))}
        </ul>
    );
}
