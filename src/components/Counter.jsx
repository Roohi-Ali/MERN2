import { useState } from "react"

function Counter() {

    const [count, setCount] = useState(0);

    function incrementCount() {
    setCount(count+1)
    }
    function decrementCount() {
        setCount(count-1)
    }
    return (
        <div>
            <p>Task3 - Count: {count}</p>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={decrementCount}>Decrement</button>
            <hr/>
        </div>
    )
}

export default Counter