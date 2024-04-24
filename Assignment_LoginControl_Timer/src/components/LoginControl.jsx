import React, {useState, useEffect} from 'react'

const LoginControl = () => {

    useEffect(()=>{
        setName('')
    },[])

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [name, setName] = useState('')

    const handleLogIn = ()=>{
        
        setIsLoggedIn(true)
        localStorage.setItem('name', name)
    }

    const handleLogOut = ()=>{
        setIsLoggedIn(false)
        setName('');
    }

    const handleChange = (e)=>{
        setName(e.target.value)
   }
  return (
    <div>
      { isLoggedIn ? 
                    <div>
                        <p>Welcome {localStorage.getItem('name')}</p>
                        <br/>
                        <button onClick={handleLogOut} className="bg-blue-500 text-white font-bold py-2 px-4 rounded">Log Out</button>
                    </div>
                    : 
                    <div>
                        <p>Please log In</p>
                        <input type='text' value={name} placeholder='Enter name' onChange={handleChange} className="bg-gray-50 border border-gray-300"/>
                        <br/>
                        <button id="btnLogIn" onClick={handleLogIn} className="bg-blue-500 text-white font-bold py-2 px-4 rounded" disabled={!name}>Log In</button>
                    </div>

      }
    </div>
  )
}

export default LoginControl
