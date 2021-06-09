import React, { useState, useEffect } from 'react'

import './css/Slider.css'

import profile_card from './img/profile_card.png'
import grid_section from './img/grid_section.png'

function getSlides(){
    const slides = {
        profile_card: {img: profile_card, description: 'Carte de visite en ligne, Profile card component de la plateforme Front-End Mentor', platform: 'frontendmentor.io', github: 'https://github.com/MrDanielCadeau/Profile-card-component', link: 'https://www.frontendmentor.io/challenges/profile-card-component-cfArpWshJ'},
        grid_section: {img: grid_section, description: 'Testimonials grid section - challenge de la plateforme Front-End Mentor', platform: 'frontendmentor.io', github: 'https://github.com/MrDanielCadeau/Testimonials-grid-section', link: 'https://www.frontendmentor.io/challenges/testimonials-grid-section-Nnw6J7Un7'}
    }
    return slides
}

export default function Fronts() {
    const slides = getSlides()
    const first = 1
    const last = 2

    const [currentSlide, setCurrentSlide] = useState(1)
    const [slide, setSlide] = useState(slides.profile_card)
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
        const slides = getSlides()
        switch (currentSlide) {
          case 1:
            setSlide(slides.profile_card)
            break
          case 2:
            setSlide(slides.grid_section)
            break
          default:
            setSlide(slides.profile_card)
            break
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
