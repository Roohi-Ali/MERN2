
import { Route , Routes, Link} from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import NotFound from './pages/NotFound'


function App() {
  return(
    <>
    <h2>Create 4 pages using React Router Dom and use Link tag make connectivity</h2>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/*' element={<NotFound />}/>
    </Routes>
    </>
  )
}

export default App
