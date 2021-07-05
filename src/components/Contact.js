import React from 'react'
import './css/Contact.css'

import info from './data/info'
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
                    {info.contacts}
                </div>
                {info.cv}
                {info.links}
            </div>
        </div>
    )
}
