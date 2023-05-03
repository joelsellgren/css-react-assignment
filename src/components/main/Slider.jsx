import { useState } from "react"

const Slider = () => {

  const [activeSlideIndex, setActiveSlideIndex] = useState(0)
  const [activeLargeSlideIndex, setActiveLargeSlideIndex] = useState(0)

  const handleSlideClick = (index) => {
    setActiveSlideIndex(index)
    setActiveLargeSlideIndex(index)
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

  return (
    <div>
        <div className="flex flex-col items-center mt-24">
            <img
              src={largeSlides[activeLargeSlideIndex].src}
              className="rounded-[15px]"
              alt="Picture of shoes" />
            <div className="flex">
                {smallSlides.map((slide, index) => (
                  <img
                    key={index}
                    className={`m-4 rounded-[15px] hover:cursor-pointer hover:opacity-50 ${
                      activeSlideIndex === index && "opacity-50 border-2 border-orange"}`}
                    src={slide.src}
                    alt="Picture of shoes"
                    onClick={() => handleSlideClick(index)}
                  />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Slider