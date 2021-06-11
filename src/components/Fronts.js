import React, { useState, useEffect } from 'react'

import fronts from './data/fronts'
import './css/Slider.css'

export default function Fronts() {

    const first = 1
    const last = Object.keys(fronts).length

    const [currentSlide, setCurrentSlide] = useState(1)
    const [slide, setSlide] = useState([])
    const nextSlide = () => {
        let nextSlide = currentSlide + 1
        if(nextSlide <= last){
          setCurrentSlide(nextSlide)
        }else{
            setCurrentSlide(first)
        }
    }
    const prevSlide = () => {
        let prevSlide = currentSlide - 1
        if(prevSlide >= first){
            setCurrentSlide(prevSlide)
        }else{
            setCurrentSlide(last)
        }
    }

    useEffect(() =>{
        for (const [key, front] of Object.entries(fronts)){
            if(front.id === currentSlide){
                setSlide(front)
            }
        }
      }, [currentSlide])

    return (
        <div className="page" id="fronts">
            <h3>04</h3>
            <div className="border"></div>
            <h2><span className="hugeLetters">M</span>aquettes</h2>
            <div className="slider">
                <div className="slide">
                    <figure>
                        <a href={slide.github}><img src={slide.img} alt={slide.description} /></a>
                        <figcaption>{slide.description}</figcaption>
                        <a href={slide.link} className="sliderLinks">{slide.platform}</a>
                    </figure>
                </div>
                <div className="arrows">
                    <div className="prevSlide" onClick={() => prevSlide()}><i className="fas fa-chevron-left"></i></div>
                    <div className="nextSlide" onClick={() => nextSlide()}><i className="fas fa-chevron-right"></i></div>
                </div>
            </div>
        </div>
    )
}
