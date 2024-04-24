
import './App.css'
import LoginControl from './components/LoginControl';
import ThemeSwitcher from './components/ThemeSwitcher';

import {useState, useEffect} from 'react'
import Timer from './components/Timer';

function App() {

  return (
  <>
  <LoginControl/>
  <br/>
  <Timer/>
  </>
  )
}

export default App
