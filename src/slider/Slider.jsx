import { useState } from "react"
import leftChevron from "../assets/left-arrow.svg"
import rightChevron from "../assets/right-arrow.svg"
import "./Slider.css"
import sliderData from "../data/sliderData"

export default function Slider() {

    const [sliderIndex, setSliderIndex] = useState(1)

    function handleClick(indexPayload) {
        let newState
        if (indexPayload + sliderData > sliderData.length) {
            newState = 1
        } else if (indexPayload + sliderIndex < 1) {
            newState = sliderData.length
        } else {
            newState = indexPayload + sliderIndex
        }
        setSliderIndex(newState)
    }
    return (
        <>
            <p className="index-info">{sliderIndex} / {sliderData.length}</p>
            <div className="slider">
                <p className="image-info">{sliderData.find(obj => obj.id === sliderIndex).description}</p>
                <img className="slider-image" src={`/images/img-${sliderIndex}.jpg`} alt="Bedroom" />
                <button className="nav-button prev-button" onClick={() => handleClick(-1)}>
                    <img src={leftChevron} alt="previous image" />
                </button>
                <button className="nav-button next-button" onClick={() => handleClick(1)}>
                    <img src={rightChevron} alt="next image" />
                </button>
            </div>
        </>
    )
}
