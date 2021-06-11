import React, { useState, useEffect } from 'react'
import './css/Slider.css'

import projects from './data/projects'

export default function Projects() {
    
    const first = 1
    const last = Object.keys(projects).length

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
        for (const [key, project] of Object.entries(projects)){
            if(project.id === currentSlide){
                setSlide(project)
            }
        }
      }, [currentSlide])

    return (
        <div className="page" id="projects">
            <h3>03</h3>
            <div className="border"></div>
            <h2><span className="hugeLetters">P</span>rojets WEB</h2>
            <div className="slider">
                <div className="slide">
                    <figure>
                        <a href={slide.github}><img src={slide.img} alt={slide.description} /></a>
                        <figcaption>{slide.description}</figcaption>
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
