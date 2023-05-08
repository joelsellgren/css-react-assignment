import Slider from "./Slider"
import ProductDetails from "./ProductDetails"
import PropTypes from "prop-types"

const Main = (props) => {

  const { setShowModal, count, setCount, setCartAmount  } = props

  return (
    <div className="flex justify-center items-center">
        <Slider setShowModal={setShowModal} />
        <ProductDetails count={count} setCount={setCount} setCartAmount={setCartAmount} />
    </div>
  )
}

Main.propTypes = {
  setShowModal: PropTypes.func,
  count: PropTypes.number,
  setCount: PropTypes.func,
  setCartAmount: PropTypes.func
};

export default Main