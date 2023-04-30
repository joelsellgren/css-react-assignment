import Logo from "./Logo"
import Navbar from "./Navbar"
import Cart from "./Cart"
import Login from "./Login"

const Header = () => {
  return (
    <div className="flex ml-40 mr-40 h-28 justify-between border-b-2">
        <div className="flex items-center justify-between w-1/3">
            <Logo />
            <Navbar />
        </div>
        <div className="flex items-center">
            <Cart />
            <Login />
        </div>
    </div>
  )
}

export default Header