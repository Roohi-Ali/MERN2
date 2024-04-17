import Header from './components/Header'
import {Route, Routes, Navigate } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'

function App() {
return(
  <>  
  <h1>My App</h1>
  <Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/*' element={<Navigate to='/' />} />
  </Routes>
  </>
)
}

export default App
