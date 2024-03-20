import ParentComponent from './components/ParentComponent'
import FunctionalComponent from './components/FunctionalComponent'
import Counter from './components/Counter'
import DataFetcher from './components/DataFetcher'
import MainLayout from './components/MainLayout'
import useLocalStorage from './hooks/useLocalStorage'
import UsernameComponent from './components/UsernameComponent'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";

function App() {

  const [name, setName] = useLocalStorage('name','')
  return(
    <div className='main_app'>
    <h1>Mern 2 - Test</h1>
       
    <ul className='ul_app'>
      <li className='li_task'><NavLink className = 'alink' to='/task1'>Task 1</NavLink></li>
      <li className='li_task'><NavLink className = 'alink'  to='/task2'>Task 2</NavLink></li>
      <li className='li_task'><NavLink className = 'alink'  to='/task3'>Task 3</NavLink></li>
      <li className='li_task'><NavLink className = 'alink'  to='/task4'>Task 4</NavLink></li>
      <li className='li_task'><NavLink className = 'alink'  to='/task5'>Task 5</NavLink></li>
      <li className='li_task'><NavLink className = 'alink'  to='/task6'>Task 6</NavLink></li>
    </ul>

    <Routes>
      
      <Route path='/task1' element={<ParentComponent renderProp = {FunctionalComponent}/>}/>
      <Route path='/task2' element={<ParentComponent renderProp = {FunctionalComponent}/>}/>
      <Route path='/task3' element={<Counter/>}/>
      <Route path='/task4' element={<DataFetcher/>}/> 
      <Route path='/task5' element={<UsernameComponent/>}/>  
      <Route path='/task6/*' element={<MainLayout/>}/>
    </Routes>
 

    {/* <ParentComponent renderProp = {FunctionalComponent}/> */}
    {/* <Counter/> */}
    {/* <DataFetcher/> */}
    {/* <UsernameComponent/> */}
    {/* <MainLayout/> */}
    
    <Footer/>
    </div>
  )
}

export default App
