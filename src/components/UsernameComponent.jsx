import useLocalStorage from "../hooks/useLocalStorage"
const UsernameComponent = ()=>{

    const [username, setUsername]= useLocalStorage('username','')

    const handleChange = (event)=>{
        setUsername(event.target.value)
    }
    return(
    <>
        <p>Task - 5</p>
        <label >Username: </label>
        <input type='text' placeholder='enter your username' value={username} onChange={handleChange}/>

        <p>{username}</p>
        <hr/>
    </>
    )
}

export default UsernameComponent