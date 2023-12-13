// Components
import TaskCard from "@components/TaskCard";

async function loadTasks() {
    const res = await fetch("http://localhost:3000/api/tasks");
    
    const { data } = await res?.json();

    return data;
}

export default async function TasksPage() {
    // Fetch
    const tasks = await loadTasks();

    return (
        <div className="grid grid-cols-3 gap-4">
            {tasks?.map((task) => (
                <TaskCard key={task?.id} task={task} />
            ))}
        </div>
    );
}
