import React from 'react'
import './css/Hobbies.css'

import guitar from './img/guitar.png'
import master from './img/master.jpg'
import onegin from './img/onegin.jpg'
import salinger from './img/salinger.jpg'
import vian from './img/vian.jpg'

import xfiles from './img/x-files.gif'

export default function Hobbies() {
    const text = (
        <p>
            Je suis passionné par la lecture, ce portfolio inspiré par l'aspect d'un livre en témoigne.<br/><br/>
            Je pourrais aussi vous parler de ma passion pour le cinéma et les séries, mais on manque si vite de place sur une page de livre...<br/>
            Si vous reconnaissez l'un des livres sur cette page c'est top, sinon je suis certain que l'on pourra trouver un ouvrage commun duquel parler !<br/><br/>
            Quoique j'ai bien envie par ailleurs de conclure avec une phrase mythique sortie tout droit d'une série tout aussi mythique :<br/><br/>
            I WANT TO BELIEVE (Fox Mulder)
        </p>
    )

    return (
        <div className="page" id="hobbies">
            <h3>05</h3>
            <div className="border"></div>
            <h2><span className="hugeLetters">M</span>es <span className="hugeLetters">H</span>obbies</h2>
            <div className="hobbiesContainer">
                <div className="hobbiesText">
                    {text}
                </div>
                <div className="booksAndVideo">
                    <img src={xfiles} alt="Fox Mulder from X-Files show" className="fox" />
                    <div className="favoritesBooks">
                        <img src={master} alt="Le Maitre et Marguerite de Boulgakov" className="book" />
                        <img src={onegin} alt="Onegin de Pouchkine" />
                        <img src={salinger} alt="L'attrape-Coeur de Salinger" />
                        <img src={vian} alt="L'écume des jours de Boris Vian" />
                    </div>
                </div>
                <div className="guitarPart">
                    <img src={guitar} alt="guitare" className="guitar" />
                    <h4>J'essaye d'en jouer au grand malheur de mes voisins :)</h4>
                </div>
            </div>
            
        </div>
    )
}
