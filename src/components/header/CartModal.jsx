import Button from "../main/Button"

const CartModal = () => {

  return (
    <div className="z-0">
        <div className="bg-white flex flex-col w-[360px] h-[256px] mt-5 mr-20 shadow-xl rounded-md absolute z-50 right-0">
            <div className="h-[67px]">
                <h3 className="font-bold p-4 border-b-2 border-darkGrey/50">Cart</h3>
            </div>
            <div className="flex flex-col m-2 ml-11 justify-center h-[188px]">
                <p>img</p>
                <p className="text-darkGrey font-semibold">Fall Limited Edition Sneakers</p>
                <p>$125.00 x 3</p>                
            </div>
            <div className="flex justify-center mb-8">
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
    