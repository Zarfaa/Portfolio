
import Web from "./FrontendProjects"
import Writing from "./WritingProjects"
import "./project.css"

let Projects = () => {
  return (
    <section className="Project section" id="portfolio">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">I have worked on</span>
     <Web/>
    <Writing/>
      </section >
      
    )
}

export default Projects