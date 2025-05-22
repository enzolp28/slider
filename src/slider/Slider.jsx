import { useState } from "react"
import leftChevron from "../assets/left-arrow.svg"
import rightChevron from "../assets/right-arrow.svg"


export default function Slider() {
    const [photo, setPhoto] = useState([
        "img-1.jpg",
        "img-2.jpg",
        "img-3.jpg",
        "img-4.jpg",
        "img-5.jpg",
    ])

    function handleClick() {
        setPhoto
    }
    return (
        <>
            <p className="index-info">3/5</p>
            <div className="slider">
                <p className="image-info">Bedroom</p>
                <img className="slider-image" src="/images/img-3.jpg" alt="Bedroom" />
                <button className="nav-button prev-button" onClick={handleClick}>
                    <img src={leftChevron} alt="previous image" />
                </button>
                <button className="nav-button prev-button" onClick={handleClick}>
                    <img src={rightChevron} alt="next image" />
                </button>
            </div>
        </>
    )
}
