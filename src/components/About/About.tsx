import { Container } from "./styles";

import profileImage from "../../assets/profile-mountain.jpg"
import cssIcon from "../../assets/css-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import wordpressIcon from "../../assets/wordpress-icon.svg";
import drupalIcon from "../../assets/drupal-icon.svg";
import phpIcon from "../../assets/php-icon.svg";
import seoIcon from "../../assets/seo-icon.svg";
import gitIcon from "../../assets/github-logo.svg";
import sqlIcon from "../../assets/mysql-icon.svg";
import laravelIcon from "../../assets/laravel-icon.svg";
import symfonyIcon from "../../assets/symfony-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";


export function About(){
  return(
    <Container id="sobre">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
          <p>Hi, welcome to my profile 😉. My name is Yassine Idrissi, and I'm a Senior Full Stack PHP Developer with a deep passion for crafting innovative web solutions.</p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000} style={{marginTop: "2rem"}}>
          <p>PHP development is not just my daily business but my lifelong passion. I actively contribute to the open-source community through support, free plugins, and sharing my knowledge with others.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.6 * 1000} style={{marginTop: "2rem", marginBottom: "2rem"}}>

          <p>Over the years, I've honed my skills by working on a wide array of projects, either individually or as part of a team. My experience spans across:</p>
          <ul style={{listStyle: 'inside'}}>
            <li style={{listStyle: 'inside', fontSize: '18px', margin: '5px auto'}}>Crafting tailored WordPress themes, plugins, and Gutenberg blocks.</li>
            <li style={{listStyle: 'inside', fontSize: '18px', marginBottom: '5px'}}>Developing custom Drupal modules to extend functionality and integrate third-party systems.</li>
            <li style={{listStyle: 'inside', fontSize: '18px', marginBottom: '5px'}}>Building robust web applications with Laravel and Symfony frameworks.</li>
          </ul>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.8 * 1000}>

          <p>My work philosophy revolves around creating highly individualized, state-of-the-art web solutions that cater to your unique needs, blending technical precision with creativity. Whether it's WordPress, Drupal, Symfony or Laravel, I make it all possible—and love every moment of it.</p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={1 * 1000}>
          <h3 className="orangec">Here are my main skills:</h3>
        </ScrollAnimation>

          <div className="hard-skills">

            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={(0.1 * 1000) + 1000}>
                <img src={phpIcon} style={{width: '60px'}} alt="PHP" title="PHP" />
              </ScrollAnimation>
          </div>
          
          <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={(0.2 * 1000) + 1000}>
                <img src={wordpressIcon} alt="Wordpress" title="Wordpress" />
              </ScrollAnimation>
          </div>
          
          <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={(0.3 * 1000) + 1000}>
                <img src={drupalIcon} alt="Drupal" title="Drupal" />
              </ScrollAnimation>
          </div>
          
          {/* <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={(0.4 * 1000) + 1000}>
                <img src={laravelIcon} alt="Laravel" title="Laravel" />
              </ScrollAnimation>
          </div> */}
          
          <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={(0.5 * 1000) + 1000}>
                <img src={symfonyIcon} alt="symfony" title="symfony" />
              </ScrollAnimation>
            </div>

            <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={(0.6 * 1000) + 1000}> 
              <img src={htmlIcon} alt="Html" title="Html" />
            </ScrollAnimation>
            </div>

            <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={(0.7 * 1000) + 1000}> 
              <img src={cssIcon} alt="Css" title="Css" />
            </ScrollAnimation>
            </div>

            <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={(0.8 * 1000) + 1000}> 
              <img src={jsIcon} alt="JavaScript" title="JavaScript" />
            </ScrollAnimation>
            </div>
      
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={(0.9 * 1000) + 1000}>
                <img src={reactIcon} alt="React" title="React" />
              </ScrollAnimation>
            </div>

            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={(1 * 1000) + 1000}>
                <img src={gitIcon} alt="Git" title="Git" />
              </ScrollAnimation>
            </div>

            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={(1.1 * 1000) + 1000}>
                <img src={sqlIcon} style={{width: '60px'}} alt="Mysql" title="Mysql" />
              </ScrollAnimation>
            </div>

            <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={(1.2 * 1000) + 1000}>
              <img src={seoIcon} style={{width: '60px'}} alt="Seo" title="Seo" />
            </ScrollAnimation>
            </div>

            <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={(1.3 * 1000) + 1000}>
              <img src={typescriptIcon} alt="Typescript" title="Typescript" />
            </ScrollAnimation>
            </div>
          </div>

      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.6 * 1000}>
          <img src={profileImage} alt="Imagem de perfil" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
