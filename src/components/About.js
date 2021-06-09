import React from 'react'
import './css/About.css'

import profile from './img/profile.jpg'

export default function About() {

    const text = (
        <p> 
            Bonjour très chers visiteurs, je suis heureux de vous accueillir ici.
            <br/>
            Le menu en haut à droite vous donnera accès au sommaire : le site est divisé en différentes rubriques indépendantes.
            <br/>
            <br/>
            Je m'appelle Daniel Cadeau, 21 ans, développeur WEB passionné depuis très jeune par le monde du code. Et si j'ai d'abord délaissé cette passion pour suivre une voie en rapport avec le monde des lettres, j'ai fini par retrouver mon sentier et voilà bientôt plus de deux ans que je me forme pleinement au code. D'abord en autodidacte, puis en intégrant la formation que je suis actuellement à la Web@cadémie by Epitech.
            <br/>
            <br/>
            Je reste joignable par téléphone ou par mail pour toute information complémentaire.
            Mes coordonnées ainsi que mon CV sont par ailleurs consultables en page 2.
            <br/>
            <span className="bold">Bonne visite !</span>
        </p>
    )

    return (
        <div className="page" id="about">
            <h3>01</h3>
            <div className="border"></div>
            <h1><span className="hugeLetters">D</span>aniel <span className="hugeLetters">C</span>adeau,</h1>
            <div className="parts">
                <div className="part1">
                    <div className="aboutMe">
                        <img className="profilePicture" src={profile} alt="me" />
                        {text}
                    </div>
                    <div className="alternance">
                        <h4>En Recherche d'Alternance</h4>
                        <p>27 septembre 2021 / 18 novembre 2022</p>
                        <p>6-14 mois</p>
                        <p>3 semaines en entreprise / 1 semaine en formation</p>
                        <p><a href="http://eparcours.eu/epitech-webcademie-169/">Informations complémentaires rédigées par EPITECH</a></p>
                    </div>
                </div>
                <div className="part2">
                    <div className="study">
                        <h5>Développeur - Intégrateur WEB</h5>
                        <h6 className="date">2020 - 2022</h6>
                        <p>Titre 5 RNCP - BAC +2</p>
                        <p>Web@cadémie by EPITECH - Paris</p>
                        <h5>Parcours scolaire</h5>
                        <h6 className="date">jusqu'à 2018</h6>
                        <p>Première L</p>
                        <p>Diplôme équivalent Brevet obtenu dans le système scolaire russe</p>
                    </div>
                    <div className="borderStudy"></div>
                    <h4>Mes Compétences :</h4>
                    <div className="skills">
                        <div className="frontPartSkills">
                            <span>HTML5 / CSS3</span>
                            <span>SASS</span>
                            <span>Javascript</span>
                            <span>JQUERY</span>
                            <span>React JS</span>
                        </div>
                        <div className="backPartSkills">
                            <span>PHP</span>
                            <span>SYMFONY / LARAVEL</span>
                            <span>EXPRESS / NODEJS</span>
                            <span>MYSQL / NOSQL</span>
                            <span>CMS (WordPress)</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
