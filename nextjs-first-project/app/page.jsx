// Components
import Users from "@components/Users";

// Fetch
async function fetchUsers() {
    const res = await fetch("https://reqres.in/api/users");
    const json = await res.json();

    return json.data;
}

export default async function HomePage() {
    // Const
    const users = await fetchUsers();

    return <Users users={users} />;
}
