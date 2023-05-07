
import Counter from "./Counter"
import PropTypes from "prop-types"


const ProductDetails = () => {


  return (
    <div>
        <div className="w-[445px] ml-32">
            <h4 className="text-orange font-bold mb-6">SNEAKER COMPANY</h4>
            <h1 className="font-bold text-5xl mb-8">Fall Limited Edition Sneakers</h1>
            <p className="text-darkGrey">These low-profile sneakers are your perfect casual wear companion.
                Featuring a durable rubber outer sole, they’ll withstand everything
                the weather can offer.
            </p>
            <div className="flex items-center mt-7 mb-1">
                <h2 className="mr-10 font-black text-2xl">$125.00</h2>
                <h2 className="bg-orange/30 rounded-lg text-orange font-bold p-1">50%</h2>
            </div>
            <h4 className="text-darkGrey font-bold text-sm opacity-50 line-through">$250.00</h4>
            <div className="flex mt-8">
                <Counter />
            </div>
        </div>
        
    </div>
  )
}

ProductDetails.propTypes = {
    buttonText: PropTypes.string,
    updateCart: PropTypes.array,
    setUpdateCart: PropTypes.func
  };

export default ProductDetails