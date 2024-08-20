import TaskCard from "@/components/TaskCard/TaskCard";

interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  isCompleted: boolean;
}

const getAllTasks = async (): Promise<Task[]> => {
  const response = await fetch("http://localhost:8080/tasks", {
    cache: "no-store",
  });
  if(response.status !== 200) {
    throw new Error();
  }

  const data = await response.json();
  return data.tasks as Task[];
}

export default async function TaskListPage() {
  const allTasks = await getAllTasks();
  return (
    <div className="mt-8 flex flex-wrap gap-4">
      {allTasks.map((task) => (
        <TaskCard key={task.id} {...task} />
      ))}
    </div>
  );
}
