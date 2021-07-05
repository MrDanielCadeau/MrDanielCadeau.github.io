import React from 'react'
import './css/About.css'

import info from './data/info'
import profile from './img/profile.jpg'

export default function About() {
    return (
        <div className="page" id="about">
            <h3>01</h3>
            <div className="border"></div>
            {info.name}
            <div className="parts">
                <div className="part1">
                    <div className="aboutMe">
                        <img className="profilePicture" src={profile} alt="me" />
                        {info.welcome_text}
                    </div>
                    {info.alternance}
                </div>
                <div className="part2">
                    {info.study}
                    <div className="borderStudy"></div>
                    <h4>Mes Compétences :</h4>
                    {info.skills}
                </div>
            </div>
        </div>
    )
}
