import { Container } from './styles'
import { BrowserRouter as Router } from 'react-router-dom'
import { NavHashLink, HashLink } from 'react-router-hash-link'
import { useState } from 'react'

import CV from '../../assets/CV_YassineIdrissi.pdf'
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
          <span>yasine</span>
          <span className='dr'>dr</span>
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
          <a href={CV} download className="button">
            CV
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
