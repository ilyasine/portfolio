import { Container } from './styles'

import reactIcon from '../../assets/react-icon.svg'
import linkedinIcon from '../../assets/linkedin.png'
import githubIcon from '../../assets/github.png'
import slackIcon from '../../assets/slack-icon.svg'
import wordpressIcon from '../../assets/wordpress-icon.svg'
import Topscroll from './Topscroll'


export function Footer() {
  return (
    <Container className="footer">
      <a href="/" className="logo">
          <span>yasine</span>
          <span className='dr'>dr</span>
      </a>
      <div>
        <p>
        This website was made with <img src={reactIcon} alt="React" /> and a lot of
          <span>❤️</span>
        </p>
      </div>

      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/yassine-idrissi/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="LinkedIn" title='LinkedIn' />
        </a>

        <a
          href="https://github.com/yasinedr"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" title='GitHub' />
        </a>

        <a
          href="https://app.slack.com/client/T024MFP4J/D044B9CAVK9"
          target="_blank"
          rel="noreferrer"
        >
          <img src={slackIcon} alt="slack" title='Slack' />
        </a>

        <a
          href="https://profiles.wordpress.org/yasinedr/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={wordpressIcon} alt="WordPress" title='WordPress' />
        </a>
      </div>
      <Topscroll />
    </Container>
  )
}
