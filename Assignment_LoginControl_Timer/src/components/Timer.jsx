import React, {useState, useEffect} from 'react'

const Timer = () => {

    const [timer, setTimer] = useState(0)
   

    useEffect(()=>{

        const intervalId = setInterval(()=>{
            setTimer(t=>t+1)

            
        },1000)
        return ()=>clearInterval(intervalId)
    },[])


    function padZero(number){
        return (number < 10 ? '0' : '')+number
    }
function format(num){
    
    let hrs = Math.floor(num/3600)
    let mins = Math.floor((num%3600)/60)
    let secs = Math.floor((num%3600)%60)
    return  `${padZero(hrs)}:${padZero(mins)}:${padZero(secs)}`
}
    
  return (
    <div>
      <h2 className='font-bold'>Timer</h2>
    <p>{format(timer)}</p>
    </div>
  )
}

export default Timer
