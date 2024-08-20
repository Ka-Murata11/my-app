import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import TaskDeleteButton from './TaskDeleteButton/TaskDeleteButton';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import React from 'react'
import TaskEditButton from './TaskEditButton/TaskEditButton';

interface TaskCardProps {
    id: string;
    title: string;
    description: string;
    dueDate: string;
    isCompleted: boolean;
}

const TaskCard: React.FC<TaskCardProps> = ({
    id, title, description, dueDate, isCompleted
}) => {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography className='text-2xl font-bold'>
                    {title}
                </Typography>
                <Typography className='mt-1 text-base line-clamp-3'>
                    {description}
                </Typography>
                <Typography className='mt-1'>
                    {dueDate}
                </Typography>
            </CardContent>
            <CardActions className='justify-between'>
                <Chip label={isCompleted ? 'Completed' : 'Not Completed'}
                    className={`text-white mt-1 text-sm px-2 ${isCompleted ? 'bg-green-500' : 'bg-red-500'}`}
                />
                <div className='flex flex-col'>
                    <TaskEditButton id={id} />
                    <TaskDeleteButton id={id} />
                </div>
            </CardActions>
        </Card>
    )
}

export default TaskCard