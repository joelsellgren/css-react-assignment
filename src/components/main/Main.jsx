import Slider from "./Slider"
import ProductDetails from "./ProductDetails"
import PropTypes from "prop-types"

const Main = (props) => {

  const { setShowModal, updateCart, setUpdateCart } = props

  return (
    <div className="flex justify-center items-center">
        <Slider setShowModal={setShowModal} />
        <ProductDetails updateCart={updateCart} setUpdateCart={setUpdateCart} />
    </div>
  )
}

Main.propTypes = {
  setShowModal: PropTypes.func,
  updateCart: PropTypes.array,
  setUpdateCart: PropTypes.func
};

export default Main