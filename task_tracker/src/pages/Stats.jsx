import React, { useContext } from 'react'
import { TaskContext } from '../store/taskContext'

const Stats = () => {
  const { tasks } = useContext(TaskContext)

  const totalTasks = tasks.length
  const completedTasks = tasks.filter(task => task.completed).length
  const remainingTasks = totalTasks - completedTasks

  return (
    <section className="max-w-md mx-auto mt-10 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md transition-colors duration-300">
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-900 dark:text-white">
        Task Statistics
      </h2>

      <div className="space-y-4">
        <div className="flex justify-between text-gray-700 dark:text-gray-300">
          <span>Total Tasks</span>
          <span className="font-medium">{totalTasks}</span>
        </div>

        <div className="flex justify-between text-green-600 dark:text-green-400">
          <span>Completed</span>
          <span className="font-medium">{completedTasks}</span>
        </div>

        <div className="flex justify-between text-orange-600 dark:text-orange-400">
          <span>Remaining</span>
          <span className="font-medium">{remainingTasks}</span>
        </div>
      </div>
    </section>
  )
}

export default Stats