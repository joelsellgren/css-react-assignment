import Header from "./components/header/Header"
import Main from "./components/main/Main"
import ProductModal from "./components/main/ProductModal"
import { useState } from "react"

function App() {

  const [showModal, setShowModal] = useState(false)
  const [count, setCount] = useState(0)
  const [cartAmount, setCartAmount] = useState(0)

  return (
    <div>
      <Header cartAmount={cartAmount} setCartAmount={setCartAmount} />
      <Main setShowModal={setShowModal} count={count} setCount={setCount} cartAmount={cartAmount} setCartAmount={setCartAmount} />
      <ProductModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  )
}

export default App
