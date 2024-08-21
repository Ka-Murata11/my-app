'use client'

import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { TodoTask } from '@/models/task';

interface TodoTaskProps {
    task: TodoTask;
}


const EditTaskForm: React.FC<TodoTaskProps> = ({task}) => {
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);
    const [dueDate, setDueDate] = useState(task.dueDate);
    const [isCompleted, setIsCompleted] = useState(task.isCompleted);

    return (
        <div className='mt-10 w-full max-w-sm'>
            <form action="">
                <TextField 
                    required
                    id='outlined-required'
                    label="タスク名"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className='mt-2 py-1.5 px-2 w-full'
                />
                <TextField 
                    required
                    id='outlined-required'
                    label="説明"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className='mt-2 py-1.5 px-2 w-full'
                />
                <TextField 
                    required
                    id='outlined-required'
                    label="期限"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    className='mt-2 py-1.5 px-2 w-full'
                />
                <FormControlLabel 
                    control={<Checkbox checked={isCompleted} onChange={(e) => setIsCompleted(e.target.checked)}  />} 
                    label="タスクを完了にする" 
                    className='mt-2 py-1.5 px-2 w-full'
                />
                <Button variant="contained" type='submit' className='mt-2 py-1.5 px-2'>更新</Button>
            </form>
        </div>
    )
}

export default EditTaskForm