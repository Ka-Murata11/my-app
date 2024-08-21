import React from 'react'
import NewTaskForm from '@/components/NewTaskForm/NewTaskForm'

const NewAddPage = () => {
  return (
    <div className='flex flex-col items-center py-20'>
      <h2 className='text-center text-2xl font-bold'>Create New Task</h2>
      <NewTaskForm />
    </div>
  )
}

export default NewAddPage
