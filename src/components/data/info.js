import cv from '../img/CV.png'

const info = {
    name: (<h1><span className="hugeLetters">D</span>aniel <span className="hugeLetters">C</span>adeau,</h1>),
    welcome_text: 
    (
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
    ),
    alternance: 
    (
        <div className="alternance">
            <h4>En Recherche d'Alternance</h4>
            <p>27 septembre 2021 / 18 novembre 2022</p>
            <p>6-14 mois</p>
            <p>3 semaines en entreprise / 1 semaine en formation</p>
            <p><a href="http://eparcours.eu/epitech-webcademie-169/">Informations complémentaires rédigées par EPITECH</a></p>
        </div>
    ),
    study:
    (
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
    ),
    skills:
    (
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
    ),
    contacts: 
    (
        <>
            <a className="bold" href="mailto:daniel1.cadeau@epitech.eu"><i className="fas fa-envelope"></i> daniel1.cadeau@epitech.eu</a>
            <a className="bold" href="tel:+33626408302"><i className="fas fa-phone-square-alt"></i> 06 26 40 83 02</a>
        </>
    ),
    cv:
    (
        <div className="contactPart2">
            <img src={cv} className="prevCV" alt="visuel du CV" onClick={ () => window.open(cv)} />
            <a href="file/CV-DanielCadeau.pdf" className="cvButton" download>Télécharger le CV</a>
        </div>
    ),
    links:
    (
        <div className="links">
            <a href="https://twitter.com/CadeauDaniel">Twitter</a>
            <a href="https://github.com/MrDanielCadeau">Github</a>
            <a href="https://codepen.io/mrdanielcad">CodePen</a>
            <a href="https://www.linkedin.com/in/daniel-cadeau-dev/">LinkedIn</a>      
        </div>
    ),
}

export default info