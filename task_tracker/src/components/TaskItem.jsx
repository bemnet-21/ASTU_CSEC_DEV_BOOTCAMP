import React from 'react'

const TaskItem = ({ task, taskStatus, onDelete }) => {
  return (
    <li className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => taskStatus(task.id)}
          className="w-5 h-5 accent-blue-600 cursor-pointer"
        />

        <span
          className={`text-gray-800 dark:text-gray-100 ${
            task.completed ? 'line-through text-gray-400 dark:text-gray-500' : ''
          }`}
        >
          {task.title}
        </span>
      </div>

      <button
        onClick={() => onDelete(task.id)}
        className="text-red-500 hover:text-red-700 dark:hover:text-red-400 transition font-medium"
      >
        Delete
      </button>
    </li>
  )
}

export default TaskItem