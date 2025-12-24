import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;

    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <header className="flex items-center justify-between p-6 shadow-md transition-colors duration-300 bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
      
      <h1 className="text-2xl font-bold tracking-wide">
        Task Tracker
      </h1>

      <nav className='flex flex-row gap-x-8'>
        <Link to={'/'}>Home</Link>
        <Link to={'/stat'}>Stats</Link>
      </nav>

      <button
        onClick={toggleTheme}
        aria-label="Toggle Dark Mode"
        className="
          flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all
          bg-white text-gray-800 border border-gray-300 hover:bg-gray-50
          dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-700
        "
      >
        {darkMode ? (
          <>
            <span>☀️</span>
          </>
        ) : (
          <>
            <span>🌙</span>
          </>
        )}
      </button>
    </header>
  );
};

export default Header;