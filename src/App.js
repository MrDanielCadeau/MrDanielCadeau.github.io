import './App.css'
import React, { useState } from 'react'
import { Link } from "react-scroll";

import About from './components/About'
import Projects from './components/Projects'
import Fronts from './components/Fronts'
import Contact from './components/Contact'

function App() {

  const [menu, setMenu] = useState(false)
  const [menuClass, setMenuClass] = useState('menu')
  const [menuWindowClass, setMenuWindowClass] = useState('menuWindow')
  const showMenu = () => {
    if(!menu){
      setMenuClass('menu active')
      setMenuWindowClass('menuWindow show')
      setMenu(true)
    }else{
      setMenuClass('menu close')
      setMenuWindowClass('menuWindow hide')
      setMenu(false)
    }
  }

  return (
    <div id="body">
      <div className={menuClass} onClick={showMenu}>
        <div className="line line1">
        </div>
        <div className="line line2">
        </div>
        <div className="line line3">
        </div>
      </div>
      <nav id="Navbar" className={menuWindowClass}>
        <ul>
          <li>
            <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            >01. A propos</Link>
          </li>
          <li>
            <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            >02. Contact</Link>
          </li>
          <li>
            <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            >03. Mes projets</Link>
          </li>
          <li>
            <Link
                activeClass="active"
                to="fronts"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            >04. Mes maquettes</Link>
          </li>
        </ul>
      </nav>
      <div id="pages">
        <About
            title="A propos"
            subtitle='test'
            dark={true}
            id="about"
        />
        <Contact
            title="Contact"
            subtitle='test'
            dark={true}
            id="contact"
        />
        <Projects
            title="Mes projets"
            subtitle='test'
            dark={false}
            id="projects"
        />
        <Fronts
            title="Mes maquettes"
            subtitle='test'
            dark={true}
            id="fronts"
        />
        <p className="copyright">Copyright 2021 - Développé avec REACT</p>
      </div>
    </div>
  )
}

export default App
