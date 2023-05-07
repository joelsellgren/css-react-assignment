import { useState } from "react"
import PropTypes from "prop-types"

const ProductModal = (props) => {

  const {showModal, setShowModal} = props;

    const [activeSlideIndex, setActiveSlideIndex] = useState(0)
    const [activeLargeSlideIndex, setActiveLargeSlideIndex] = useState(0)

  const handleSlideClick = (index) => {
    setActiveSlideIndex(index)
    setActiveLargeSlideIndex(index)
  }

  const handleArrowClick = (direction) => {

    if(direction == "left"){
      setActiveLargeSlideIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex))
      setActiveSlideIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex))
    }else if(direction == "right"){
      setActiveLargeSlideIndex((prevIndex) => (prevIndex < largeSlides.length - 1 ? prevIndex + 1 : prevIndex))
      setActiveSlideIndex((prevIndex) => (prevIndex < largeSlides.length - 1 ? prevIndex + 1 : prevIndex))
    }
          
  }

  const handleModal = () => {
    setShowModal(false)
  }

    const smallSlides = [
        {src: '/images/Shoes1.jpg'},
        {src: '/images/Shoes2.jpg'},
        {src: '/images/Shoes3.jpg'},
        {src: '/images/Shoes4.jpg'}, 
      ]
    
      const largeSlides = [
        {src: '/images/Shoes1large.jpg'},
        {src: '/images/Shoes2large.jpg'},
        {src: '/images/Shoes3large.jpg'},
        {src: '/images/Shoes4large.jpg'}, 
      ]
    


  return showModal &&  ( 
<div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <div className="fixed inset-0 bg-darkGrey bg-opacity-75 transition-opacity"></div>
  <div className="fixed inset-0 z-10 overflow-y-auto">
    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">                                   
            <div className="flex flex-col items-center mt-24">
              <p className="font-extrabold  text-2xl text-white p-2
               hover:text-orange hover:cursor-pointer ml-auto mr-6"
               onClick={handleModal}>
                X
                </p>
              <div className="flex items-center relative z-0">
                <div
                  className="flex justify-center items-center w-[56px] h-[56px]
                   bg-white rounded-full text-2xl font-extrabold hover:text-orange
                    hover:cursor-pointer absolute z-20"
                  onClick={() => handleArrowClick("left")}>
                  
                  {"<"}
                </div>
                <img
                  src={largeSlides[activeLargeSlideIndex].src}
                  className="w-[540px] h-[540px] m-7 rounded-[15px]"
                  alt="Picture of shoes"
                />
                <div
                  className="flex justify-center items-center w-[56px] h-[56px]
                   bg-white rounded-full text-2xl font-extrabold hover:text-orange
                    hover:cursor-pointer absolute z-10 right-0"
                  onClick={() => handleArrowClick("right")}>
                    {">"}
                  </div>
              </div>
            <div className="flex gap-7 mt-[32px]">
                {smallSlides.map((slide, index) => (
                  <div key={index} className={`${activeSlideIndex === index && "border-2 border-orange rounded-[15px]"}`}>                 
                    <img                      
                      className={`rounded-[15px] hover:cursor-pointer ${activeSlideIndex === index && " bg-white/75"}`}
                      src={slide.src}
                      alt="Picture of shoes"
                      onClick={() => handleSlideClick(index)}
                    />
                  </div>
                ))}
            </div>
            </div>                          
    </div>
  </div>
</div>
  )
}

// Set default props
ProductModal.propTypes = {
  showModal: PropTypes.bool,
  setShowModal: PropTypes.func 
};

export default ProductModal
