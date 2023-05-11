import Project_Preview from "../../assets/react_news_app.png"
import "./project.css"

let Projects = () => {
    return(
        <section className="Project section" id="portfolio">
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">I have worked on</span>
        <div className="section__content">
          <div className="project__details">
            <h3 className="project__title">Daily News</h3>
            <p className="project__description">
              News app for daily news updates in different categories
              <br />
              Built with: React, Bootstrap
            </p>
            <a href="https://github.com/Zarfaa/React_News_App" className="button" target="_blank" rel="noreferrer">
              View Code
            </a>
          </div>
          <div className="project__image">
            <img className="image" src={Project_Preview} alt="Project Preview" />
          </div>
        </div>
      </section>
      
    )
}

export default Projects