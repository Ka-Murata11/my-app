'use client'

import TextField from '@mui/material/TextField';
import { useState } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';



const EditTaskForm = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [isCompleted, setIsCompleted] = useState(false);
    console.log(title)

    return (
        <div>
            <form action="">
                <TextField 
                    required
                    id='outlined-required'
                    label="タスク名"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <TextField 
                    required
                    id='outlined-required'
                    label="説明"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <TextField 
                    required
                    id='outlined-required'
                    label="期限"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                />
                <FormControlLabel control={<Checkbox checked={isCompleted} onChange={(e) => setIsCompleted(e.target.checked)}  />} label="完了" />
            </form>
        </div>
    )
}

export default EditTaskForm