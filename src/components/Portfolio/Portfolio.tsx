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
                <a href="https://github.com/ilyasine/maintenance-coming-soon-redirect-animation" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
                <a href="https://wordpress.org/plugins/maintenance-coming-soon-redirect-animation/" target="_blank" rel="noreferrer">
                  <img src={externalLinkIcon} alt="Visit site" />
                </a>
              </div>
              <img src={GoldStar} style={{ width: '36px' }} alt="Star" />
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
                <a href="https://github.com/ilyasine/kodingschools" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://kodingschools.com/" target="_blank" rel="noreferrer">
                  <img src={externalLinkIcon} alt="Visit site" />
                </a>
              </div>
              <img src={GoldStar} style={{ width: '36px' }} alt="Star" />
            </header>
            <div className="body">
              <h3>Koding Schools</h3>
              <p>KodingSchools is a pioneering online E-learning platform specifically designed for schools. As the first of its kind, it offers a unique and comprehensive learning experience that bridges the gap between traditional classroom education and the digital world.</p>
              <p>KodingSchools is powered by six custom-made plugins, I've built from scratch, each contributing to the robust and user-friendly nature of the platform. These plugins, combined with meticulously crafted themes, provide an intuitive and engaging interface that enhances the learning process.</p>
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
                <li>Ajax</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation className="projectdiv" animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#ffb943 " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/ilyasine/wordpress-themes/tree/master/mohamedelidrissi" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
                <a href="https://mohamedelidrissi.com/" target="_blank" rel="noreferrer">
                  <img src={externalLinkIcon} alt="Visit site" />
                </a>
              </div>
              <img src={GoldStar} style={{ width: '36px' }} alt="Star" />
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
                <a href="https://github.com/ilyasine/virtual-coach" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
                <a href="https://skillssystem.com/" target="_blank" rel="noreferrer">
                  <img src={externalLinkIcon} alt="Visit site" />
                </a>
              </div>
              <img src={GoldStar} style={{ width: '36px' }} alt="Star" />
            </header>
            <div className="body">
              <h3>Virtual Coach</h3>
              <p>The Virtual Coach plugin is a powerful mental health management tool designed to integrate seamlessly with the Skills System website. It offers a suite of interactive features aimed at helping users of all ages and abilities regulate their emotions effectively. With tools like goal setting, safety planning, and regular check-ins, the plugin provides a structured yet flexible approach to mental well-being. Whether users are looking to track their progress, create actionable plans, or simply check in with themselves, the Virtual Coach plugin serves as a supportive companion on their journey toward emotional balance and resilience.
              </p>
              <p>This plugin is particularly valuable for individuals seeking to enhance their emotional regulation skills in a user-friendly and accessible manner. By incorporating the Virtual Coach into the Skills System, users can benefit from a cohesive and intuitive platform that simplifies the process of managing complex emotions. The plugin’s interactive tools are designed to empower users, offering guidance and structure while allowing for personalization and growth. Whether used independently or as part of a broader mental health strategy, the Virtual Coach plugin is an essential resource for anyone looking to build emotional resilience and achieve their mental health goals.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>WordPress</li>
                <li>Php</li>
                <li>MySql</li>
                <li>jQuery</li>
                <li>Javascript</li>
                <li>CSS</li>
                <li>ElevenLabs API</li>
                <li>Ajax</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation className="projectdiv" animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#ffb943 " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/ilyasine/Patient-Management-System" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
                <a href="https://pr.rabii.ilyasine.com/" target="_blank" rel="noreferrer">
                  <img src={externalLinkIcon} alt="Visitar site" />
                </a>
              </div>
              <img src={GoldStar} style={{ width: '36px' }} alt="Star" />
            </header>
            <div className="body">
              <h3>Patient Management System</h3>
              <p>a complete patient management system built with Laravel for doctor to manage their patient appointments, patient details and also manage billing of particular patient
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Html</li>
                <li>CSS</li>
                <li>Sass</li>
                <li>JavaScript</li>
                <li>Vue</li>
                <li>PHP</li>
                <li>MVC</li>
                <li>Laravel</li>
                <li>MYSQL</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation className="projectdiv" animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#ffb943 " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/ilyasine/bizworld" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://bizworld.org/" target="_blank" rel="noreferrer">
                  <img src={externalLinkIcon} alt="Visit site" />
                </a>
              </div>
              <img src={GoldStar} style={{ width: '36px' }} alt="Star" />
            </header>
            <div className="body">
              <h3>BizWorld</h3>
              <p>BizWorld is a cutting-edge e-learning platform that seamlessly integrates education with e-commerce, offering educators a unique and comprehensive way to bring innovative programs into their classrooms. Designed to inspire and empower the next generation of entrepreneurs, BizWorld provides a dynamic digital environment where educators can purchase, manage, and teach specialized programs with ease.</p>
              <p>At the heart of BizWorld is its intuitive e-commerce system, which allows educators to browse and purchase programs tailored to their needs. Upon completing a purchase, the educator gains access to either a classroom or school environment, depending on the Access Type they choose. This flexible access model ensures that the platform can scale to meet the needs of individual teachers or entire schools.</p>
              {/*  <p>Once access is granted, educators can immediately begin creating student profiles, either individually or in bulk, and organize them into classrooms. The platform’s user-friendly interface makes it simple to manage students, track their progress, and deliver engaging lessons from the purchased program. BizWorld’s programs are designed to be interactive and hands-on, fostering creativity, critical thinking, and real-world skills in students.</p>
              <p>In addition to its educational features, BizWorld offers robust tools for educators to customize their teaching experience. From assigning tasks and monitoring student performance to promoting students to new levels or classrooms, the platform streamlines administrative tasks, allowing educators to focus on what they do best: teaching.</p>
              <p>BizWorld is more than just an e-learning platform—it’s a gateway to transformative education. By combining e-commerce functionality with powerful classroom management tools, it empowers educators to bring entrepreneurial learning to life, inspiring students to dream big and achieve even bigger. Whether you’re an individual teacher or a school administrator, BizWorld provides the tools and resources to create a vibrant, future-focused learning environment.</p> */}
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
                <li>Ajax</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation className="projectdiv" animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#ffb943 " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/ilyasine/tepunareomaori" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://tepunareomaori.co.nz/" target="_blank" rel="noreferrer">
                  <img src={externalLinkIcon} alt="Visit site" />
                </a>
              </div>
              <img src={GoldStar} style={{ width: '36px' }} alt="Star" />
            </header>
            <div className="body">
              <h3>Tepuna Reo Māori</h3>
              <p>Tepuna Reo Māori is an innovative international e-learning platform designed to revolutionize the way schools engage with digital education. Tailored specifically for educational institutions, it offers a seamless and feature-rich experience that bridges the gap between traditional teaching methods and modern technology.</p>
              <p>At its core, Tepuna Reo Māori is a dynamic platform where schools can easily register through a streamlined form. Once approved by the administrator, the platform automatically generates a customized school environment, complete with staff profiles and organizational structures. This automation ensures a smooth onboarding process, allowing schools to focus on what matters most: education.</p>
              {/* <p>The platform empowers school principals (directors) with full control over their school’s digital ecosystem. They can effortlessly manage staff, teachers, students, and family members—whether adding individuals individually or in bulk. Additionally, the platform supports the creation of classrooms, enabling educators to organize their teaching spaces with ease. One of its standout features is the intuitive system for promoting students from one academic year to the next or transferring them between classrooms, simplifying administrative tasks and saving valuable time.</p>
              <p>Tepuna Reo Māori is packed with brilliant features designed to enhance the learning and administrative experience. From its user-friendly interface to its robust functionality, the platform is a game-changer for schools looking to embrace the future of education. Whether you're managing a single classroom or an entire school, Tepuna Reo Māori provides the tools you need to create a thriving digital learning environment.</p> */}
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
                <li>Ajax</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation className="projectdiv" animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#ffb943 " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/ilyasine/ikacom-api/tree/main" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://www.ikacom.fr/" target="_blank" rel="noreferrer">
                  <img src={externalLinkIcon} alt="Visit site" />
                </a>
              </div>
              <img src={GoldStar} style={{ width: '36px' }} alt="Star" />
            </header>
            <div className="body">
              <h3>IKACOM API Integration Plugin</h3>
              <p>The IKACOM API Integration Plugin connects your WordPress site with the IKACOM API for seamless phone number verification. It offers a streamlined interface for configuring API keys and settings, ensuring secure communication. Users call the SVA numbers, receive a code via message, and input the code, which the plugin verifies in real-time, enhancing user experience with instant feedback.
              </p>
              <p>Server-side code handles API requests and responses, maintaining data security and integrity. The plugin also dynamically generates and displays SVA cartridges based on the verification results, making it visually appealing and informative. This functionality is easily integrated into your site using simple shortcodes.
              </p>
              <p>With easy setup and comprehensive documentation, the plugin is accessible even for users with limited technical expertise. Our support team is available to assist with any questions or issues. Enhance your website's capabilities with the IKACOM API Integration Plugin for reliable phone number verification.
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
                <li>JSON</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation className="projectdiv" animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#ffb943 " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/ilyasine/elementor-widgets/tree/master/Animated-Shapes-Widget" target="_blank" rel="noreferrer">
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
                <a href="https://github.com/ilyasine/wordpress-themes/tree/master/reponses-photo" target="_blank" rel="noreferrer">
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
                {/* <a href="https://github.com/ilyasine/wordpress-themes/tree/master/elmokristudio" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://elmokristudio.ilyasine.com/" target="_blank" rel="noreferrer">
                  <img src={externalLinkIcon} alt="Visit site" />
                </a> */}
                <h3 style={{ color: '#ffb943' }}>Coming soon</h3>
              </div>
              <img src={GoldStar} style={{ width: '36px' }} alt="Star" />
            </header>
            <div className="body">
              <h3>Learndash Course Review</h3>
              <p><strong>Learndash Course Review</strong> is a WordPress plugin that revolutionizes the LearnDash experience by incorporating a comprehensive review, rating, feedback, and survey system.
              </p>
              <p>This plugin allows for the display of ratings and student reviews, boosting course relevance and credibility
              </p>
              <p>It also includes a feedback system for course improvement, and a review reminder notification to encourage student participation.
              </p>
              <p>Additionally, it offers features like image/video reviews and restricts feedback to students who’ve completed the course.
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
                {/* <a href="https://github.com/ilyasine/wordpress-themes/tree/master/elmokristudio" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://elmokristudio.ilyasine.com/" target="_blank" rel="noreferrer">
                  <img src={externalLinkIcon} alt="Visit site" />
                </a> */}
                <h3 style={{ color: '#ffb943' }}>Coming soon</h3>
              </div>
              <img src={GoldStar} style={{ width: '36px' }} alt="Star" />
            </header>
            <div className="body">
              <h3>Sell Product Anywhere</h3>
              <p><strong>Sell Product Anywhere</strong> is a revolutionary WordPress plugin designed to enhance the shopping experience on your WooCommerce site.
              </p>
              <p>Developed by Yassine Idrissi, this plugin allows customers to add products to their cart from anywhere on your website, providing a seamless and convenient shopping experience. </p>
              <p>No longer do customers need to navigate to specific product pages to make a purchase. With Sell Product Anywhere, every page is a storefront, making shopping quicker and easier than ever before. Experience the future of online shopping with Sell Product Anywhere.</p>
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



      </div>
    </Container>
  );
}