
import { useState } from "react"
import PropTypes from "prop-types"

const Slider = (props) => {

  const { setShowModal, smallSlides, largeSlides } = props;

  const [activeSlideIndex, setActiveSlideIndex] = useState(0)
  const [activeLargeSlideIndex, setActiveLargeSlideIndex] = useState(0)
/*   const [showModal, setShowModal] = useState(false) */

  const handleSlideClick = (index) => {
    setActiveSlideIndex(index)
    setActiveLargeSlideIndex(index)
  }


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
  setShowModal: PropTypes.func,
  smallSlides: PropTypes.object,
  largeSlides: PropTypes.object
};


export default Slider