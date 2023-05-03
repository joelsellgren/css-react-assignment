import { useState } from "react"

const Slider = () => {

  const slides = [
    {public: '/images/Shoes2.jpg'},
    {public: '/images/Shoes3.jpg'},
    {public: '/images/Shoes4.jpg'},
    {public: '/images/Shoes5.jpg'},
  ]

  return (
    <div>
        <div className="flex flex-col items-center mt-24">
            <img src="/images/Shoes1.jpg" alt="Picture of shoes" />
            <div className="flex">
                <img className="m-4 rounded-[15px] hover:cursor-pointer hover:opacity-50" src="/images/Shoes5.jpg" alt="Picture of shoes" onClick={() => console.log("clicked")}/>
                <img className="m-4 rounded-[15px] hover:cursor-pointer hover:opacity-50" src="/images/Shoes2.jpg" alt="Picture of shoes" onClick={() => console.log("clicked")}/>
                <img className="m-4 rounded-[15px] hover:cursor-pointer hover:opacity-50" src="/images/Shoes3.jpg" alt="Picture of shoes" onClick={() => console.log("clicked")}/>
                <img className="m-4 rounded-[15px] hover:cursor-pointer hover:opacity-50" src="/images/Shoes4.jpg" alt="Picture of shoes" onClick={() => console.log("clicked")}/>
            </div>
        </div>
    </div>
  )
}

export default Slider