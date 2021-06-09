import React from 'react'
import './css/Contact.css'
import cv from './img/CV.png'

import ContactForm from './ContactForm'

export default function Contact() {
    return (
        <div className="page" id="contact">
            <h3>02</h3>
            <div className="border"></div>
            <h2><span className="hugeLetters">C</span>ontact</h2>
            <div className="contactContainer">
                <div className="contactPart1">
                    <ContactForm />
                    <a className="bold" href="mailto:daniel1.cadeau@epitech.eu"><i className="fas fa-envelope"></i> daniel1.cadeau@epitech.eu</a>
                    <a className="bold" href="tel:+33626408302"><i className="fas fa-phone-square-alt"></i> 06 26 40 83 02</a>
                </div>
                <div className="contactPart2">
                    <img src={cv} className="prevCV" alt="visuel du CV" onClick={ () => window.open(cv)} />
                    <a href="file/CV-DanielCadeau.pdf" className="cvButton" download>Télécharger le CV</a>
                </div>
                <div className="links">
                    <a href="https://twitter.com/CadeauDaniel">Twitter</a>
                    <a href="https://github.com/MrDanielCadeau">Github</a>
                    <a href="https://codepen.io/mrdanielcad">CodePen</a>
                    <a href="https://www.linkedin.com/in/daniel-cadeau-dev/">LinkedIn</a>      
                </div>
            </div>
        </div>
    )
}
