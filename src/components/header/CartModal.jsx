import Button from "../main/Button"

const CartModal = () => {

  return (
    <div className="z-0">
        <div className="bg-white flex flex-col w-[360px] h-[256px] mt-5 mr-20 shadow-xl rounded-md absolute z-50 right-0">
            <div className="h-[67px]">
                <h3 className="font-bold p-4 border-b-2 border-darkGrey/50">Cart</h3>
            </div>
            <div className="flex justify-center items-center h-[188px]">
                <img className="rounded" src="public\images\Shoes1small.jpg" alt="" />
                <div className="flex flex-col m-6">
                    <p className="text-darkGrey font-semibold">Fall Limited Edition Sneakers</p> 
                    <div className="flex">
                        <p className="text-darkGrey font-semibold mr-2">$125.00 x 3</p>
                        <p className="font-black">dynamic text</p>
                    </div>  
                </div>
                <img className="hover:cursor-pointer" src="public\images\Paperbin.jpg" alt="Paperbin" />
            </div>
            <div className="flex justify-center mb-8">
                {/* Todo: Fix button text */}
                <Button />
            </div>
        </div>
    </div>
  )
}

export default CartModal

{/* <div className="z-0">
        <div className="bg-white flex flex-col w-[360px] h-[256px] mt-5 mr-20 shadow-xl rounded-md absolute z-50 right-0">
            <div className="h-[67px]">
                <h3 className="font-bold p-4 border-b-2 border-darkGrey/50">Cart</h3>
            </div>
            <div className="flex justify-center items-center h-[188px]">
                <p className="text-darkGrey font-semibold m-2">Your cart is empty.</p>
            </div>
        </div>
    </div> */}
    