import { Button } from "@mui/material";
import React from "react";

interface TaskEditButtonProps {
    id: string;
}

const TaskEditButton: React.FC<TaskEditButtonProps> = ({id}) => {
  return (
    <Button href={`/edit/${id}`} >
        編集
    </Button>
  )
}

export default TaskEditButton