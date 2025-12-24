import React, { useContext } from 'react'
import TaskItem from './TaskItem'
import { TaskContext } from '../store/taskContext'

const TaskList = () => {

  const { tasks, taskStatus, deleteTask } = useContext(TaskContext)
  if (tasks.length === 0) {
    return (
      <p className="mt-6 text-center text-gray-500">
        No tasks yet. Add one above 👆
      </p>
    )
  }

  return (
    <ul className="mt-6 max-w-md mx-auto space-y-3">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          taskStatus={taskStatus}
          onDelete={deleteTask}
        />
      ))}
    </ul>
  )
}

export default TaskList
