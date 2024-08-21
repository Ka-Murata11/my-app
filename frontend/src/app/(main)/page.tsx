// 'use client'

import TaskCard from "@/components/TaskCard/TaskCard";
import React, { useEffect, useState } from "react";

interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  isCompleted: boolean;
}

const getAllTasks = async (): Promise<Task[]> => {
  const response = await fetch("http://backend-container:8080/tasks", {
    cache: "no-store",
  });
  console.log(response)
  // if(response.status !== 200) {
  //   throw new Error();
  // }

  const data = await response.json();
  console.log(data)
  return data as Task[];
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

// const TaskListPage: React.FC = () => {
//   const [tasks, setTasks] = useState<Task[]>([]);

//   useEffect(() => {
//     const fetchTasks = async () => {
//       try {
//         const res = await fetch('http://localhost:8080/tasks');
//         if (!res.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data: Task[] = await res.json();
//         setTasks(data);
//       } catch (error) {
//         throw new Error()
//       }
//     };

//     fetchTasks();
//   }, []);

//   return(
//     <div className="mt-8 flex flex-wrap gap-4">
//        {tasks.map((task) => (
//         <TaskCard key={task.id} {...task} />
//       ))}
//     </div>
//   )
// }
