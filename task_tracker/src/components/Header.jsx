import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../store/themeContext';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="flex items-center justify-between p-6 shadow-md transition-colors duration-300 bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
      
      <h1 className="text-2xl font-bold tracking-wide">
        Task Tracker
      </h1>

      <nav className='flex flex-row gap-x-8'>
        <Link to={'/'} className="hover:text-blue-500 transition-colors">Home</Link>
        <Link to={'/stat'} className="hover:text-blue-500 transition-colors">Stats</Link>
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
        {theme === 'dark' ? (
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