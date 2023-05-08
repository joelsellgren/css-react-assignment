import Button from "./Button"
import PropTypes from "prop-types"


const Counter = (props) => {

  const { count, setCount, setCartAmount } = props;

  const increment = () => {
    setCount(prevCount => prevCount + 1)
  }
  const decrement = () => {
    if(!count == 0){
      setCount(prevCount => prevCount - 1)
    }
  } 

  return (
    <div className="mr-4 flex">
        <div className="flex justify-evenly items-center rounded-xl bg-offWhite w-[157px] h-[56px] mr-2">
            <button className="text-orange font-bold text-2xl w-1/3 h-full" onClick={decrement}>-</button>
            <p className="font-bold">{count}</p>
            <button className="text-orange font-bold text-2xl w-1/3 h-full" onClick={increment}>+</button>
        </div>
        <div className="ml-2">
          <Button buttonText={"Add to Cart"} count={count} setCartAmount={setCartAmount} />
        </div>
    </div>
  )
}

Counter.propTypes = {
  count: PropTypes.number,
  setCount: PropTypes.func,
  setCartAmount: PropTypes.func
};

export default Counter