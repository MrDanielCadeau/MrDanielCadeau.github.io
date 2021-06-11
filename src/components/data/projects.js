import starWars from '../img/starWars.PNG'
import snapchat from '../img/snapchat.PNG'
import quizz from '../img/quizz.png'
import spotify from '../img/spotify.png'
import twitter from '../img/twitter.png'
import connect from '../img/connect4.png'

const projects = {
    starWars: {id: 1, img: starWars, description: 'Petit projet exploitant les données d\'une API tierce, codé en 2h30 en React', github: 'https://github.com/MrDanielCadeau/React-StarWars', link: ''},
    snapchat: {id: 2, img: snapchat, description: 'Snapchat Like - projet en groupe de 2, codé en une semaine avec React Native, relié à une API tierce', github: '#', link: ''},
    quizz: {id: 3, img: quizz, description: 'Site de quizz en ligne - projet en groupe de 3, codé en 2 semaines, développé sous SYMFONY', github: '#', link: ''},
    spotify: {id: 4, img: spotify, description: 'Spotify Like - projet en groupe de 4, codé en 2 jours de RUSH, développé sous REACT', github: '#', link: ''},
    twitter: {id: 5, img: twitter, description: 'Réseau social, Twitter Like - projet en groupe de 3, codé en 4 semaines, développé sans Framework', github: '#', link: ''},
    connect: {id: 6, img: connect, description: 'Jeu Navigateur "Puissance 4" - projet individuel de 2 semaines, développé en JQUERY', github: '#', link: ''},
}

export default projects