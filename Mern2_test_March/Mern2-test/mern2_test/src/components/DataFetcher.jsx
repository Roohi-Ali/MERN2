import { useState, useEffect } from "react";
function DataFetcher (){

    const url = 'https://jsonplaceholder.typicode.com/todos'
    const [data,setData] = useState([])

    function fetchData() {
        fetch(url)
        .then(res=>res.json())
        .then(json=>setData(json))
    }

    //this will fetch data when it mounts
    useEffect(fetchData,[])

    const myUl = document.getElementById('myUl')
    
    function toggleBtn(){
        myUl.classList.toggle('hide')
    }
    return (
        <div>
            Task 4 -<b> DataFetcher Component - displaying titles only </b>
            
            <button onClick={toggleBtn}>Show/Hide</button>
                <ul id='myUl'>
                    {data.map((el,index)=><li key={index}>{el.title}</li>)}  
                </ul>
            <hr/>
        </div>
    )
}

export default DataFetcher;