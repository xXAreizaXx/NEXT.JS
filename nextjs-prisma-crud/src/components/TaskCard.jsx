export default function TaskCard({ task }) {
    return (
        <div key={task?.id} className="bg-slate-700 p-4 rounded-lg shadow-md mt-4 flex flex-col gap-4 hover:bg-slate-600 cursor-pointer">
            <h1 className="text-2xl font-bold text-white">{task?.title}</h1>
            <p className="text-white">{task?.description}</p>
        </div>
    );
}