import { createContext, useEffect, useState } from "react";

export const TaskContext = createContext()

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('tasks')

        return savedTasks ? JSON.parse(savedTasks) : [
        { id:1, title: 'Laundary', completed: true },
        { id:2, title: 'Shopping', completed: true }
    ]
    })

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    const addTask = (title) => {
        const newTask = {
            id: crypto.randomUUID(),
            title,
            completed: false
        }

        setTasks([...tasks, newTask])
    }

    const deleteTask = (id) => {
        const newTasks = tasks.filter((task)=> task.id !== id)
        setTasks(newTasks)
    }

    const taskStatus = (id) => {
        const newTasks = tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task)

        setTasks(newTasks)
    }

    return (
        <TaskContext.Provider value={{ tasks, addTask, deleteTask, taskStatus }} >
            { children }
        </TaskContext.Provider>
    )
}