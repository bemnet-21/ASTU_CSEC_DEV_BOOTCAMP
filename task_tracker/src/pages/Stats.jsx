import React, { useContext } from 'react'
import { TaskContext } from '../store/taskContext'

const Stats = () => {
  const { tasks } = useContext(TaskContext)

  const totalTasks = tasks.length
  const completedTasks = tasks.filter(task => task.completed).length
  const remainingTasks = totalTasks - completedTasks

  return (
    <section className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Task Statistics
      </h2>

      <div className="space-y-4">
        <div className="flex justify-between">
          <span>Total Tasks</span>
          <span className="font-medium">{totalTasks}</span>
        </div>

        <div className="flex justify-between text-green-600">
          <span>Completed</span>
          <span className="font-medium">{completedTasks}</span>
        </div>

        <div className="flex justify-between text-orange-600">
          <span>Remaining</span>
          <span className="font-medium">{remainingTasks}</span>
        </div>
      </div>
    </section>
  )
}

export default Stats
