import { useState } from 'react'
import "./Counter.css"

const Counter = ({ children }) => {
    const initial = 0
    let [count, setCount] = useState(initial)

    const decremet = () => {
        if(count > 0){
            setCount(count - 1)
        }
    }

    const increment = () => {
        setCount(count + 1)
    }

    const reset = () => {
        setCount(initial)
    }

    return (
        <div>
            {children}
            <h3>{count}</h3>
            <button onClick = {decremet}>-</button>
            <button onClick = {reset}>Reset</button>
            <button onClick = {increment}>+</button>
        </div>
    )
}

export default Counter