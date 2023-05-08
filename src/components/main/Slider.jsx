import Shoes1 from "/images/Shoes1.jpg"
import Shoes2 from "/images/Shoes2.jpg"
import Shoes3 from "/images/Shoes3.jpg"
import Shoes4 from "/images/Shoes4.jpg"
import Shoes1large from "/images/Shoes1large.jpg"
import Shoes2large from "/images/Shoes2large.jpg"
import Shoes3large from "/images/Shoes3large.jpg"
import Shoes4large from "/images/Shoes4large.jpg"

import { useState } from "react"
import PropTypes from "prop-types"


const Slider = (props) => {

  const { setShowModal } = props;

  const [activeSlideIndex, setActiveSlideIndex] = useState(0)
  const [activeLargeSlideIndex, setActiveLargeSlideIndex] = useState(0)
/*   const [showModal, setShowModal] = useState(false) */

  const handleSlideClick = (index) => {
    setActiveSlideIndex(index)
    setActiveLargeSlideIndex(index)
  }

  const smallSlides = [
    {src: Shoes1},
    {src: Shoes2},
    {src: Shoes3},
    {src: Shoes4} 
  ]

  const largeSlides = [
    {src: Shoes1large},
    {src: Shoes2large},
    {src: Shoes3large},
    {src: Shoes4large} 
  ]

  return (
    <div>
        <div className="flex flex-col items-center mt-24">
            <img
              src={largeSlides[activeLargeSlideIndex].src}
              className="rounded-[15px] hover:cursor-pointer"
              alt="Picture of shoes"
              onClick={() => setShowModal(true)} />
            <div className="flex gap-7 mt-[32px]">
                {smallSlides.map((slide, index) => (
                  <div key={index} className={`${activeSlideIndex === index && "border-2 border-orange rounded-[15px] "}`}>                 
                    <img                      
                      className={`rounded-[15px] hover:cursor-pointer hover:opacity-50 ${
                        activeSlideIndex === index && "opacity-50"}`}
                      src={slide.src}
                      alt="Picture of shoes"
                      onClick={() => handleSlideClick(index)}
                    />
                  </div>
                ))}
            </div>
        </div>
    </div>
  )
}

Slider.propTypes = {
  setShowModal: PropTypes.func
};


export default Slider