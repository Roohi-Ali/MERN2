import {useState, useEffect} from 'react'

import React from 'react'

const ThemeSwitcher = () => {

    const [ theme, setTheme] = useState('light');

    useEffect(()=>{
      if ( theme ===  'dark'){
        document.documentElement.classList.add('dark')
      }
      else{
        document.documentElement.classList.remove('dark')
      }
    }, [theme]);

const handleThemeSwitch = ()=>{
    setTheme( theme === 'dark' ? 'light' : 'dark')
  }
  return (
    <div className='h-screen bg-white dark:bg-black flex justify-center items-center'>
      {/* <h1 className='p-4 bg-blue-800 text-3xl'>Learning Context Part 2</h1> */}
    
    <button className='bg-green-200 p-4 rounded-3xl' onClick={handleThemeSwitch}>
      Dark Mode
    </button>
    </div>
  )
}

export default ThemeSwitcher
