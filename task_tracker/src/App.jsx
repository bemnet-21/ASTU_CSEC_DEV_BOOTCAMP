import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react'
import Header from './components/Header'
import TaskInput from './components/TaskInput'

const App = () => {
  return (
    <section>
      <Header />
      <TaskInput />
    </section>
  )
}



export default App
