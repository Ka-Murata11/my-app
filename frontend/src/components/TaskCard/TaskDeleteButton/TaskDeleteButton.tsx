import { Button } from "@mui/material";
import React from "react";

interface TaskDeleteButtonProps {
    id: string;
}

const TaskDeleteButton: React.FC<TaskDeleteButtonProps> = ({id}) => {
  return (
    <Button color="error" >
        削除
    </Button>
  )
}

export default TaskDeleteButton