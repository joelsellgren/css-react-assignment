import Header from "./components/header/Header"
import Main from "./components/main/Main"
import ProductModal from "./components/main/ProductModal"
import { useState } from "react"

function App() {

  const [showModal, setShowModal] = useState(false)
  const [updateCart, setUpdateCart] = useState([])

  return (
    <div>
      <Header />
      <Main setShowModal={setShowModal} updateCart={updateCart} setUpdateCart={setUpdateCart} />
      <ProductModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  )
}

export default App
