import Slider from "./Slider"
import ProductDetails from "./ProductDetails"
import PropTypes from "prop-types"
import { largeSlides, smallSlides } from "./../../content/sliderContent"

const Main = (props) => {

  const { setShowModal, count, setCount, setCartAmount  } = props

  return (
    <div className="flex justify-center items-center">
        <Slider setShowModal={setShowModal} largeSlides={largeSlides} smallSlides={smallSlides} />
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