import Project_Preview from "../../assets/react_news_app.png"
import Project2 from "../../assets/react_ecommerce.png"
import "./project.css"

let Projects = () => {
  return (
    <section className="Project section" id="portfolio">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">I have worked on</span>

      <div class="projects-container">
  <div class="project__description">
    <h3>Daily News</h3>
    <p>
      News app for daily news updates in different categories
      <br />
      Built with: React, Bootstrap
    </p>
    <img class="image" src={Project_Preview} alt="Project Preview" />
    <a href="https://github.com/Zarfaa/React_News_App" class="button" target="_blank" rel="noreferrer">
      View Code
    </a>
  </div>

  <div class="project__description">
    <h3>Ecommerce Website</h3>
    <p>
      Fashion is a ReactJS Ecommerce Website
      <br />
      Built with: React Redux, Bootstrap, CSS
    </p>
    <img class="image" src={Project2} alt="Project Preview" />
    <a href="https://zarfaa.github.io/React_Ecommerce/" class="button" target="_blank" rel="noreferrer">
      Preview
    </a>
  </div>
</div>

      </section >
      
    )
}

export default Projects