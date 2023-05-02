import { useState } from "react"

const Counter = () => {

  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(prevCount => prevCount + 1)
  }
  const decrement = () => {
    if(!count == 0){
      setCount(prevCount => prevCount - 1)
    }
  } 

  return (
    <div className="mr-4">
        <div className="flex justify-evenly items-center rounded-xl bg-offWhite w-[157px] h-[56px]">
            <button className="text-orange font-bold text-2xl w-1/3 h-full" onClick={decrement}>-</button>
            <p className="font-bold">{count}</p>
            <button className="text-orange font-bold text-2xl w-1/3 h-full" onClick={increment}>+</button>
        </div>
    </div>
  )
}

export default Counter