import React, { useState, useEffect } from 'react'
import './css/Slider.css'

import twitter from './img/twitter.png'
import quizz from './img/quizz.png'
import spotify from './img/spotify.png'
import snapchat from './img/snapchat.PNG'
import connect from './img/connect4.png'

function getSlides(){
    const slides = {
        snapchat: {img: snapchat, description: 'Snapchat Like - projet en groupe de 2, codé en une semaine avec React Native, relié à une API tierce', github: '#', link: ''},
        quizz: {img: quizz, description: 'Site de quizz en ligne - projet en groupe de 3, codé en 2 semaines, développé sous SYMFONY', github: '#', link: ''},
        spotify: {img: spotify, description: 'Spotify Like - projet en groupe de 4, codé en 2 jours de RUSH, développé sous REACT', github: '#', link: ''},
        twitter: {img: twitter, description: 'Réseau social, Twitter Like - projet en groupe de 3, codé en 4 semaines, développé sans Framework', github: '#', link: ''},
        connect: {img: connect, description: 'Jeu Navigateur "Puissance 4" - projet individuel de 2 semaines, développé en JQUERY', github: '#', link: ''},
    }
    return slides
}

export default function Projects() {
    const slides = getSlides()
    
    const first = 1
    const last = Object.keys(slides).length

    const [currentSlide, setCurrentSlide] = useState(1)
    const [slide, setSlide] = useState(slides.quizz)
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
            setSlide(slides.snapchat)
            break
          case 2:
            setSlide(slides.spotify)
            break
          case 3:
            setSlide(slides.quizz)
            break
          case 4:
            setSlide(slides.twitter)
            break
          case 5:
            setSlide(slides.connect)
            break
          default:
            setSlide(slides.quizz)
            break
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
