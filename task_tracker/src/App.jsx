import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react'
import Header from './components/Header'
import TaskInput from './components/TaskInput'
import { TaskProvider } from './store/taskContext'
import TaskList from './components/TaskList'
import Home from './pages/Home'
import Stats from './pages/Stats'
import { Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './store/themeContext'

const App = () => {
  return (
    <ThemeProvider>
      <TaskProvider>
          <Header />
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path='/stat' element={ <Stats /> } />
          </Routes>
      </TaskProvider>
    </ThemeProvider>
  )
}



export default App
