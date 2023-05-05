import { useState } from "react"

const Slider = () => {

  const [activeSlideIndex, setActiveSlideIndex] = useState(0)
  const [activeLargeSlideIndex, setActiveLargeSlideIndex] = useState(0)
/*   const [showModal, setShowModal] = useState(false) */

  const handleSlideClick = (index) => {
    setActiveSlideIndex(index)
    setActiveLargeSlideIndex(index)
  }

  /* const toggleModal = () => {
    setShowModal(!showModal)
  } */

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

  return (
    <div>
        <div className="flex flex-col items-center mt-24">
            <img
              src={largeSlides[activeLargeSlideIndex].src}
              className="rounded-[15px] hover:cursor-pointer"
              alt="Picture of shoes"
              onClick={() => console.log("clicked")} />
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


export default Slider