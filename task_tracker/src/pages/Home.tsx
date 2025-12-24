import React from 'react'
import TaskList from '../components/TaskList'
import TaskInput from '../components/TaskInput'

const Home = () => {
  return (
    <section>
      <TaskInput />
      <TaskList />
    </section>
  )
}

export default Home
