import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.webp'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/Ssaurabhs/TodoAcadmint" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
                <a href="https://todotaskflo.netlify.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>TODO App</h3>
              <p>
                A task management web app built using React.js with TypeScript for type safety and maintainability. The app allows users to add, edit, delete, and mark tasks as complete, with support for task prioritization, pinning, and progress tracking. Implemented state management with React hooks, and optimized components using memoization. Styled using Tailwind CSS for a responsive, modern UI.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>TypeScript</li>
                <li>HTML</li>
                <li>JavaScript</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/Ssaurabhs/online-learning-website" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                  <a href="https://ssaurabhs.github.io/online-learning-website/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a>
                </div>
            </header>
            <div className="body">
              <h3>Online Learning Website</h3>
              <p> A responsive e-learning platform built using HTML, JavaScript, and SCSS for modular and maintainable styling. The site includes interactive UI components, dynamic content rendering, and smooth navigation.The project emphasizes responsive design, clean code structure, and scalability for future enhancements. </p>
            </div>
            <footer> <ul className="tech-list"> <li>SCSS</li> <li>HTML</li> <li>JavaScript</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/Ssaurabhs/ShoppingSite" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a>
                <a href="https://68e87b80c386b849443f57fd--e-shoppingsite.netlify.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>E Commerce Shopping Website</h3>
              <p>
                A web-based shopping platform developed using HTML, CSS, and JavaScript. The site includes core e-commerce features such as product listings, category-based browsing, shopping cart functionality, and checkout flow. The project demonstrates frontend development, interactive UI building, and structured code organization.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>JavaScript</li>
                <li>CSS</li>
                <li>HTML</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>


        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/Ssaurabhs/Online_Food_Delivery" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Food Delivery Application</h3>
              <p>Built a responsive food-ordering platform using PHP & Hack, JavaScript, and CSS; implemented menu/catalog management, shopping cart, user auth, order processing, and an admin dashboard; backend exposes REST endpoints and uses a relational DB.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>PHP</li>
                <li>Hack</li>
                <li>CSS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Code</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/Ssaurabhs/Student_Management" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Student Management system</h3>
              <p>DA web-based application built using HTML, CSS, and JavaScript that allows users to manage student information efficiently. It includes features to add, update, delete, and view student records, providing a simple and user-friendly interface for organizing student data.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/Ssaurabhs/WeatherApp" target="\_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://chic-yeot-705d5c.netlify.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>WeatherApp</h3>
              <p>
                  A responsive web application built using HTML, CSS, and JavaScript that shows real-time weather details and a 5-day forecast for any city using a public weather API. It features dynamic updates, weather icons, and a clean, user-friendly design.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>JavaScript</li>
                <li>Css</li>
                <li>Vite</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}