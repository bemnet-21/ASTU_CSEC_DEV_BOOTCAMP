import React, { useState } from 'react'

const TaskInput = () => {
  const [task, setTask] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(task)
  }


  return (
    <section className="flex gap-3 p-4 bg-white rounded-xl shadow-md max-w-md mx-auto">
      <input
        type="text"
        placeholder="Enter a task..."
        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        type="submit"
        className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 active:scale-95 transition"
        onClick={handleSubmit}
      >
        Add Task
      </button>
    </section>
  )
}

export default TaskInput
