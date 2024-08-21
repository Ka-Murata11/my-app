'use client'

import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import Button from '@mui/material/Button';

const NewTaskForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');

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
                <Button variant="contained" type='submit' className='mt-2 py-1.5 px-2'>追加</Button>
            </form>
        </div>
    )
}

export default NewTaskForm