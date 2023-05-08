import Button from "../main/Button"
import PropTypes from "prop-types"

const CartModal = (props) => {

    const { cartAmount, setCartAmount } = props;
    

    const emptyCart = () => {
        setCartAmount(0)    
    }

  return (
    cartAmount === 0 ?
    <div className="z-0">
    <div className="bg-white flex flex-col w-[360px] h-[256px] mt-5 mr-20 shadow-xl rounded-md absolute z-50 right-0">
        <div className="h-[67px]">
            <h3 className="font-bold p-4 border-b-2 border-darkGrey/50">Cart</h3>
        </div>
        <div className="flex justify-center items-center h-[188px]">
            <p className="text-darkGrey font-semibold m-2">Your cart is empty.</p>
        </div>
    </div>
    </div>
    :
    <div className="z-0">
        <div className="bg-white flex flex-col w-[360px] h-[256px] mt-5 mr-20 shadow-xl rounded-md absolute z-50 right-0">
            <div className="h-[67px]">
                <h3 className="font-bold p-4 border-b-2 border-darkGrey/50">Cart</h3>
            </div>
            <div className="flex justify-center items-center h-[188px]">
                <img className="rounded" src="images\Shoes1small.jpg" alt="" />
                <div className="flex flex-col m-6">
                    <p className="text-darkGrey font-semibold">Fall Limited Edition Sneakers</p> 
                    <div className="flex">
                        <p className="text-darkGrey font-semibold mr-2">{`$125.00 x ${cartAmount}`}</p>
                        <p className="font-black">{`$${cartAmount * 125}`}</p>
                    </div>  
                </div>
                <img className="hover:cursor-pointer"
                    src="images\Paperbin.jpg" 
                    alt="Paperbin"
                    onClick={emptyCart} />
            </div>
            <div className="flex justify-center mb-8">
                <Button buttonText={"Go to Checkout"}/>
            </div>
        </div>
    </div>
  )
}

CartModal.propTypes = {
    buttonText: PropTypes.string,
    cartAmount: PropTypes.number,
    setCartAmount: PropTypes.func
  };

export default CartModal


    