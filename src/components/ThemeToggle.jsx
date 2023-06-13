import React, { useContext } from 'react'
import {ThemeContext} from '../contexts/ThemeContext'
import { motion } from 'framer-motion';
import {FaSun, FaMoon} from 'react-icons/fa'

const ThemeToggle = () => {
  const {theme,setTheme} = useContext(ThemeContext)

  return (
      <motion.div className=' rounded-full p-2'>
          {theme === 'dark' ? (
              <FaSun
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className='text-gray-500 text-2xl dark:text-gray-400 cursor-pointer'
              />
          ) : (
              <FaMoon
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className='text-gray-500 text-2xl dark:text-gray-400 cursor-pointer'
              />
          )}
      </motion.div>
  )
}

export default ThemeToggle