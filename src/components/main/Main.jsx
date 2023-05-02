import Slider from "./Slider"

const Main = () => {
  return (
    <div className="flex">
        <Slider />
        <div>
            <div className="w-[445px] ml-32 mt-40">
                <h4 className="text-orange font-bold mb-6">SNEAKER COMPANY</h4>
                <h1 className="font-bold text-5xl mb-8">Fall Limited Edition Sneakers</h1>
                <p>These low-profile sneakers are your perfect casual wear companion.
                    Featuring a durable rubber outer sole, they’ll withstand everything
                    the weather can offer.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main