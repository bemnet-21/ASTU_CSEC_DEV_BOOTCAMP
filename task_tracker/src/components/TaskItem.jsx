import React from 'react'

const TaskItem = ({ task, taskStatus, onDelete }) => {
  return (
    <li className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border">
      <div className="flex items-center gap-3">
        {/* Checkbox */}
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => taskStatus(task.id)}
          className="w-5 h-5 accent-blue-600 cursor-pointer"
        />

        {/* Task text */}
        <span
          className={`text-gray-800 ${
            task.completed ? 'line-through text-gray-400' : ''
          }`}
        >
          {task.title}
        </span>
      </div>

      {/* Delete button */}
      <button
        onClick={() => onDelete(task.id)}
        className="text-red-500 hover:text-red-700 transition font-medium"
      >
        Delete
      </button>
    </li>
  )
}

export default TaskItem
