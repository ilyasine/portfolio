import { Container } from './styles'
import { BrowserRouter as Router } from 'react-router-dom'
import { NavHashLink, HashLink } from 'react-router-hash-link'
import { useState } from 'react'

import CV from '../../assets/CV_YassineIdrissi.pdf'
import RESUME from '../../assets/RESUME_YassineIdrissi.pdf'
import EN from '../../assets/en-flag.svg'
import FR from '../../assets/fr-flag.svg'
export function Header() {
  const [isactive, setActive] = useState(false)

  function toggleTheme() {
    let html = document.getElementsByTagName('html')[0]
    html.classList.toggle('light')
    let projects = document.querySelectorAll('.project')
    projects.forEach((project) => project.classList.toggle('light'))
    let projects_link = document.querySelectorAll('.project a')
    projects_link.forEach((project_link) => project_link.classList.toggle('light'))
  }

  function closeMenu() {
    setActive(false)
  }

  return (
    <Container className="header-fixed">
      <Router>
        <HashLink smooth to="#home" className="logo">
          <span className='il'>il</span>
          <span>yasine</span>         
        </HashLink>

        <input
          onChange={toggleTheme}
          className="container_toggle"
          type="checkbox"
          id="switch"
          name="mode"
        />
        <label htmlFor="switch">Toggle</label>

        <nav className={isactive ? 'active' : ''}>
          <NavHashLink smooth to="#home" onClick={closeMenu}>
            Home
          </NavHashLink>
          <NavHashLink smooth to="#sobre" onClick={closeMenu}>
            About me
          </NavHashLink>
          <NavHashLink smooth to="#portfolio" onClick={closeMenu}>
            Portfolio
          </NavHashLink>
          <NavHashLink smooth to="#contact" onClick={closeMenu}>
            contact
          </NavHashLink>
          <a href={CV} download className="button" id="resume">
            <img src={FR} style={{width: '22px'}}  alt="FR" title="Télécharger le CV en français" />
            <span>CV</span>
          </a>
          <a href={RESUME} download className="button" id="resume">    
            <img src={EN} style={{width: '22px'}} alt="EN" title="Download Resume in English" />
            <span>Resume</span>
          </a>
        </nav>

        <div
          aria-expanded={isactive ? 'true' : 'false'}
          aria-haspopup="true"
          aria-label={isactive ? 'Fechar menu' : 'Abrir menu'}
          className={isactive ? 'menu active' : 'menu'}
          onClick={() => {
            setActive(!isactive)
          }}
        ></div>
      </Router>
    </Container>
  )
}
