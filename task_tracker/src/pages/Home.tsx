import React from 'react'
import TaskList from '../components/TaskList'
import TaskInput from '../components/TaskInput'

const Home = () => {
  return (
    <section className='pt-24 dark:bg-gray-800 h-screen'>
      <TaskInput />
      <TaskList />
    </section>
  )
}

export default Home
