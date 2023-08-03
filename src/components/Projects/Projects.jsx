import Project_Preview from "../../assets/react_news_app.png"
import Project2 from "../../assets/react_ecommerce.png"
import "./project.css"

let Projects = () => {
  return (
    <section className="Project section" id="portfolio">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">I have worked on</span>

      <div className="projects-container">

  <div className="project">
    <div className="project__description">
    <h3>Daily News</h3>
    <p>
      News app for daily news updates in different categories
      <br />
      Built with: React, Bootstrap
    </p>
    <a href="https://github.com/Zarfaa/React_News_App" className="button" target="_blank" rel="noreferrer">
      View Code
    </a>
    </div>
    <div className="project__img">
    <img className="image" src={Project_Preview} alt="Project Preview" />
    </div>
  </div>

  <div className="project">
  <div className="project__img">
    <img className="image" src={Project2} alt="Project Preview" />
    </div>
    <div className="project__description">
    <h3>Ecommerce Website</h3>
    <p>
      Fashion is a ReactJS Ecommerce Website
      <br />
      Built with: React Redux, Bootstrap, CSS
    </p>
    <a href="https://zarfaa.github.io/React_Ecommerce/" className="button" target="_blank" rel="noreferrer">
      Preview
    </a>
    </div>
  </div>
</div>

      </section >
      
    )
}

export default Projects