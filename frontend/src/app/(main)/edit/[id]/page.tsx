import EditTaskForm from "@/components/EditTaskForm/EditTaskForm";
import { TodoTask } from "@/models/task";

interface Params {
    params: { id:string };
}

const EditTaskPage = ({ params }: Params) => {
    // const id = params.id;
    const task: TodoTask = {
        id: "1",
        title: "勉強",
        description: "プログラミングの練習",
        dueDate: "2020-8-12",
        isCompleted: false
    }

    return (
        <div className="flex flex-col items-center py-20">
            <h2 className="text-center text-2xl font-bold">Edit Task</h2>
            <EditTaskForm  task={task}/>
        </div>
    )
}

export default EditTaskPage