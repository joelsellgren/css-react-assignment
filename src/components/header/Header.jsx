import Logo from "./Logo"
import Navbar from "./Navbar"
import Cart from "./Cart"
import Login from "./Login"
import PropTypes from "prop-types"

const Header = (props) => {

  const {updateCart, setUpdateCart} = props;

  return (
    <div className="flex ml-40 mr-40 h-28 justify-between border-b-2 border-darkGrey/50">
        <div className="flex items-center justify-between w-1/3">
            <Logo />
            <Navbar />
        </div>
        <div className="flex items-center">
            <Cart updateCart={updateCart} setUpdateCart={setUpdateCart} />
            <Login />
        </div>
    </div>
  )
}

Header.propTypes = {
  updateCart: PropTypes.func,
  setUpdateCart: PropTypes.array
};


export default Header