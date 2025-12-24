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
          <div className="min-h-screen transition-colors duration-300 bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      
      <Header />

      <main className="container mx-auto p-4">
        <Routes>
          {/* Add your Home route here */}
          <Route path="/" element={<Home />} />
          
          <Route path="/stat" element={<Stats />} />
        </Routes>
      </main>

    </div>
      </TaskProvider>
    </ThemeProvider>
  )
}



export default App
