import { Task } from "@mui/icons-material";
import EditTaskForm from "@/components/EditTaskForm/EditTaskForm";

interface Params {
    params: { id:string };
}

interface Task {
    id: string;
    title: string;
    description: string;
    dueDate: string;
    isCompleted: boolean;
}

const EditTaskPage = ({ params }: Params) => {
    // const id = params.id;
    const task: Task = {
        id: "1",
        title: "勉強",
        description: "プログラミングの練習",
        dueDate: "2020-8-12",
        isCompleted: false
    }

    return (
        <div className="flex flex-col justify-center py-20">
            <h2 className="text-center text-2xl font-bold">Edit Task</h2>
            <EditTaskForm />
        </div>
    )
}

export default EditTaskPage