import React, { useContext, useState } from 'react'
import { TaskContext } from '../store/taskContext'

const TaskInput = () => {
  const [title, setTitle] = useState('')
  const { addTask, tasks } = useContext(TaskContext)
  const handleSubmit = (e) => {
    e.preventDefault()
    if(!title) {
      alert('Please add a task. Field cannot be empty')
      return
    }

    addTask(title)
    console.log(tasks)
    setTitle('')
    
  }

  return (
    <form className="flex gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md max-w-md mx-auto transition-colors duration-300">
      <input
        type="text"
        placeholder="Enter a task..."
        value={title}
        className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white dark:placeholder-gray-400 transition-colors duration-300"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        type="submit"
        className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 active:scale-95 transition"
        onClick={handleSubmit}
      >
        Add Task
      </button>
    </form>
  )
}

export default TaskInput