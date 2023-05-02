

const Slider = () => {
  return (
    <div>
        <div className="flex flex-col items-center mt-24">
            <img src="./Shoes1.jpg" alt="" />
            <div className="flex">
                <img className="m-4 rounded-[15px] hover:cursor-pointer hover:opacity-50" src="Shoes5.jpg" alt="" onClick={() => console.log("clicked")}/>
                <img className="m-4 rounded-[15px] hover:cursor-pointer hover:opacity-50" src="./Shoes2.jpg" alt="" onClick={() => console.log("clicked")}/>
                <img className="m-4 rounded-[15px] hover:cursor-pointer hover:opacity-50" src="./Shoes3.jpg" alt="" onClick={() => console.log("clicked")}/>
                <img className="m-4 rounded-[15px] hover:cursor-pointer hover:opacity-50" src="./Shoes4.jpg" alt="" onClick={() => console.log("clicked")}/>
            </div>
        </div>
    </div>
  )
}

export default Slider