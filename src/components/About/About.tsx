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
import pythonIcon from "../../assets/python-icon.svg";
import seoIcon from "../../assets/seo-icon.svg";
import gitIcon from "../../assets/github-logo.svg";
import sqlIcon from "../../assets/mysql-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import laravelIcon from "../../assets/laravel-icon.svg";
import shopifyIcon from "../../assets/shopify-icon.svg";
import postgresqlIcon from "../../assets/postgresql-icon.svg";
import api_integrationIcon from "../../assets/api-integration-icon.svg";
import CI_CDIcon from "../../assets/CI-CD-icon.svg";
import react_nativeIcon from "../../assets/react-native-icon.svg";
import graphqlIcon from "../../assets/graphql-icon.svg";
import NestJSIcon from "../../assets/NestJS-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";


export function About(){
  return(
    <Container id="sobre">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
          <p>Hi, welcome to my profile 😉. My name is Yassine Idrissi, and I'm a Senior Full Stack Web Developer with a deep passion for crafting innovative AI-driven web solutions.</p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000} style={{marginTop: "2rem"}}>
          <p>Web development is not just my daily business but my lifelong passion. I actively contribute to the open-source community through support, free plugins, and sharing my knowledge with others.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.6 * 1000} style={{marginTop: "2rem", marginBottom: "2rem"}}>
          <p>Over the years, I've honed my skills by working on a wide array of projects, either individually or as part of a team. My experience spans across:</p>
          <ul style={{listStyle: 'inside'}}>
            <li style={{listStyle: 'inside', fontSize: '18px', margin: '5px auto'}}><b>CMS & E‑commerce:</b> WordPress (themes, plugins, Gutenberg blocks), Shopify (custom themes & apps).</li>
            <li style={{ listStyle: 'inside', fontSize: '18px', marginBottom: '5px' }}><b>Backend Development:</b> PHP (Laravel, Symfony), Node.js (Express, NestJS).</li>
            <li style={{ listStyle: 'inside', fontSize: '18px', marginBottom: '5px' }}><b>Frontend Development:</b> React, Vue.js, TypeScript, Liquid, Next.js.</li>
            <li style={{ listStyle: 'inside', fontSize: '18px', marginBottom: '5px' }}><b>Mobile Apps:</b> React Native for cross‑platform Android & iOS solutions.</li>
            <li style={{ listStyle: 'inside', fontSize: '18px', marginBottom: '5px' }}><b>Data & APIs:</b> GraphQL, REST APIs, PostgreSQL, MySQL, Elasticsearch.</li>
            <li style={{ listStyle: 'inside', fontSize: '18px', marginBottom: '5px' }}><b>Infrastructure:</b> Docker, Kubernetes, DevOps pipelines, Git.</li>
            <li style={{ listStyle: 'inside', fontSize: '18px', marginBottom: '5px' }}><b>Integrations:</b> AI models, SEO optimization, secure authentication, Payment Gateway (Stripe, PayPal, WooCommerce, Shopify Payments, CMI, Mollie, and more).</li>
          </ul>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.8 * 1000}>
          <p>Alongside this, I’m channeling my expertise into the world of artificial intelligence, developing solutions that personalize user experiences and optimize business outcomes.</p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={1 * 1000}>
          <p>My work philosophy revolves around creating highly individualized, state-of-the-art web solutions that cater to your unique needs, blending technical precision with creativity. Whether it’s <b>WordPress</b>, <b>Shopify</b>, <b>SaaS</b>, or <b>AI‑driven applications</b>, I thrive on delivering platforms that are not only functional but transformative and I love every moment of it.</p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={1.2* 1000}>
          <h3 className="orangec">Here are my main skills:</h3>
        </ScrollAnimation>

        <div className="hard-skills">
          
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={(0.1 * 1000) + 1000}> 
              <img src={htmlIcon} alt="Html" title="Html" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={(0.2 * 1000) + 1000}> 
              <img src={cssIcon} alt="Css" title="Css" />
            </ScrollAnimation>
          </div>
    
          <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={(0.3 * 1000) + 1000}> 
                <img src={jsIcon} alt="JavaScript" title="JavaScript" />
              </ScrollAnimation>
          </div>
                
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={(0.4 * 1000) + 1000}>
              <img src={reactIcon} alt="React" title="React" />
            </ScrollAnimation>
          </div>
    
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={(0.5* 1000) + 1000}>
              <img src={vueIcon} alt="Vue" title="Vue" />
            </ScrollAnimation>
          </div>
    
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={(0.6* 1000) + 1000}>
              <img src={typescriptIcon} alt="TypeScript" title="TypeScript" />
            </ScrollAnimation>
          </div>
    
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={(0.7* 1000) + 1000}>
              <img src={nodeIcon} alt="Node.js" title="Node.js" />
            </ScrollAnimation>
          </div>

          <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={(0.8 * 1000) + 1000}>
                <img src={phpIcon} style={{width: '60px'}} alt="PHP" title="PHP" />
              </ScrollAnimation>
          </div>

          <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={(0.9 * 1000) + 1000}>
                <img src={graphqlIcon} style={{width: '40px'}} alt="GraphQL" title="GraphQL" />
              </ScrollAnimation>
          </div>
          
          <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={(1 * 1000) + 1000}>
                <img src={wordpressIcon} alt="Wordpress" title="Wordpress" />
              </ScrollAnimation>
          </div>
          
          <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={(1.1 * 1000) + 1000}>
                <img src={laravelIcon} alt="Laravel" title="Laravel" />
              </ScrollAnimation>
          </div>
          
          <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={(1.2 * 1000) + 1000}>
                <img src={drupalIcon} alt="Drupal" title="Drupal" />
              </ScrollAnimation>
          </div>
          
          <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={(1.3 * 1000) + 1000}>
                 <img src={shopifyIcon} alt="Shopify" title="Shopify" />
              </ScrollAnimation>
          </div>
          
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={(1.4 * 1000) + 1000}>
              <img src={pythonIcon} alt="python" title="python" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={(1.5 * 1000) + 1000}>
              <img src={gitIcon} alt="Git" title="Git" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={(1.6 * 1000) + 1000}>
              <img src={postgresqlIcon} alt="PostgreSQL" title="PostgreSQL" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={(1.7 * 1000) + 1000}>
              <img src={api_integrationIcon} alt="API Integration" title="API Integration" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={(1.8 * 1000) + 1000}>
              <img src={CI_CDIcon} alt="CI/CD" title="CI/CD" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={(1.9 * 1000) + 1000}>
              <img src={sqlIcon} style={{width: '60px'}} alt="Mysql" title="Mysql" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={(2 * 1000) + 1000}>
              <img src={seoIcon} style={{width: '60px'}} alt="Seo" title="Seo" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={(2.1 * 1000) + 1000}>
              <img src={react_nativeIcon} alt="React Native" title="React Native" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={(2.2 * 1000) + 1000}>
              <img src={NestJSIcon} alt="NestJS" title="NestJS" />
            </ScrollAnimation>
          </div>
          
        </div>

      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.6 * 1000}>
          <img src={profileImage} alt="profile Image" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
