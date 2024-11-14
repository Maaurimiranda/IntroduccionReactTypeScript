import React from "react"

export const ComponentCounter = () => {
    const [counter, setCounter] = React.useState<number>(0)
    
    const incrementCounter = () => {
        setCounter((prev) => prev + 1)
    }

    const decrementCounter = () => {
        if (counter > 0) {
            setCounter((prev) => prev - 1)
        }
    }
    
    return (
        <div>
            <h1>valor de contador: {counter}</h1>

            <button onClick={incrementCounter}>Incrementar </button>
            <button onClick={decrementCounter}>Decrementar </button>
        </div>
    )
}