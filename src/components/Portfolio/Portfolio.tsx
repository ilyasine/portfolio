import { Container } from "./styles";
import githubIcon from "../../assets/github-icon.svg"
import externalLinkIcon from "../../assets/external-link-icon.svg"
import GoldStar from "../../assets/Gold_Star.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Portfolio() {
  return (
    <Container id="portfolio">
      <h2>Some of my projects</h2>

      <div className="projects">

        <ScrollAnimation className="projectdiv" animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#ffb943 " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/yasinedr/maintenance-coming-soon-redirect-animation" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
                <a href="https://wordpress.org/plugins/maintenance-coming-soon-redirect-animation/" target="_blank" rel="noreferrer">
                  <img src={externalLinkIcon} alt="Visit site" />
                </a>
              </div>
              <img src={GoldStar} style={{width: '36px'}} alt="Star" />
            </header>
            <div className="body">
              <h3>Maintenance & Coming Soon Redirect Animation</h3>
              <p>WordPress plugin intended primarily for developers , designers and site administrators that need to allow clients to preview site before being available to the general public or to temporarily hide it while undergoing major updates.
              </p>
              <p>This plugin will let you Make your website under maintenance in seconds with great looking animations and configure settings to allow specific users to bypass the maintenance mode</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>WordPress</li>
                <li>Php</li>
                <li>MySql</li>
                <li>Javascript</li>
                <li>CSS</li>
                <li>LottieFiles</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation className="projectdiv" animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#ffb943 " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/yasinedr/wordpress-themes/tree/master/reponses-photo" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
                <a href="https://www.reponsesphoto.fr/" target="_blank" rel="noreferrer">
                  <img src={externalLinkIcon} alt="Visitar site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Reponses Photo</h3>
              <p>Customized WordPress theme, with buit in solutions tailored to client needs, custom shortcodes, metas,Sidebar, blocks, event post type ...
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Html</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Sass</li>
                <li>Php</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation className="projectdiv" animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#ffb943 " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/yasinedr/wordpress-themes/tree/master/mohamedelidrissi" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
                <a href="https://mohamedelidrissi.com/" target="_blank" rel="noreferrer">
                  <img src={externalLinkIcon} alt="Visit site" />
                </a>
              </div>
              <img src={GoldStar} style={{width: '36px'}} alt="Star" />
            </header>
            <div className="body">
              <h3>Mohamed El Idrissi</h3>
              <p>An advanced WordPress theme, high SEO Optimized, with a lot of exclusive features: 
              </p>
              <p>
              custom post-types [ Audio player and video player as mu-plugins ], taxonomies for each post type, highly responsive, built-in draggable slideshow galleries, new implemeted hooks (actions and filters), advanced WP_Query, Ajax requests ...
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Html</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>jQuery</li>
                <li>WordPress</li>
                <li>Php</li>
                <li>MySql</li>    
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation className="projectdiv" animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#ffb943 " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/yasinedr/elementor-widgets/tree/master/Animated-Shapes-Widget" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Animated Shapes Widget</h3>
              <p>Elementor Widget that add a beautifull Animated shapes, every shape has full a control manager.
              </p>
              <p>
              From the widget settings page : user can Choose a Background Image from the media library, set it's width, choose a logo and set it's width as well, there is a possibility to add description.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Html</li>
                <li>Css</li>
                <li>JavaScript</li>
                <li>PHP</li>
                <li>Elementor Controls Api</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation className="projectdiv" animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#ffb943 " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/yasinedr/wordpress-themes/tree/master/elmokristudio" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://elmokristudio.ilyasine.com/" target="_blank" rel="noreferrer">
                  <img src={externalLinkIcon} alt="Visit site" />
                </a>
              </div>
              <img src={GoldStar} style={{width: '36px'}} alt="Star" />
            </header>
            <div className="body">
              <h3>El Mokri Studio</h3>
              <p>Modern and unique WooCommerce WordPress Theme, comes with high-quality animations, Elementor compatible, built in components and widgets, Custom WooCommerce internals and hooks, customizable Admin panel, fully responsive; looks great on any device ( desktop, tablet, mobile, large screens ). Extensive ecommerce features, and Extraordinary store design.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Html</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>jQuery</li>
                <li>WordPress</li>
                <li>Php</li>
                <li>MySql</li>
                <li>LottieFiles</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation className="projectdiv" animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#ffb943 " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/yasinedr/benefit-calculator" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Benefit Calculator</h3>
              <p>Simple WordPress plugin that calculates the benefit for customers :
              </p>
              <p>
              The Administrator can add a new transaction by entering a customer name and the amount attached to it ; the plugin, then, will calculate the profit & loss, All data are inserted in the database with Ajax without refreshing the page, The Administrator can either edit or delete transaction.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Php</li>
                <li>Mysql</li>
                <li>Ajax</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>



      </div>
    </Container>
  );
}