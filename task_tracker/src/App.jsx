import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react'
import Header from './components/Header'
import TaskInput from './components/TaskInput'
import { TaskProvider } from './store/taskContext'
import TaskList from './components/TaskList'

const App = () => {
  return (
    <TaskProvider>
      <section>
        <Header />
        <TaskInput />
        <TaskList />
      </section>
    </TaskProvider>
  )
}



export default App
