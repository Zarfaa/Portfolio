import Project3 from "../../assets/react_ecommerce.png"
import Project2 from "../../assets/portfolio_project.png"
import Project1 from  "../../assets/resturant.png"

let Web = () => {

    return(<>
     <div className="projects-container">
        
     <div className="project">
<div className="project__img">
  <img className="image" src={Project1} alt="Project Preview" />
  </div>
  <div className="project__description">
  <h3>Resturant Website</h3>
  <p>
    Foody is a ReactJS Resturant Website
    <br />
    Built with: React , Bootstrap, CSS
  </p>
  <a href="https://resturant-website-3mgoesxj0-zarfa.vercel.app/" className="button" target="_blank" rel="noreferrer">
    View Project
  </a>
  </div>
</div>

<div className="project">
  <div className="project__description">
  <h3>Daily News</h3>
  <p>
    Build Portfolio Website for a Digital Designer
    <br />
    Built with: React, Bootstrap
  </p>
  <a href="https://begottendesigns.com/" className="button" target="_blank" rel="noreferrer">
  View Project
  </a>
  </div>
  <div className="project__img">
  <img className="image2" src={Project2} alt="Project Preview" />
  </div>
</div>

<div className="project">
<div className="project__img">
  <img className="image3" src={Project3} alt="Project Preview" />
  </div>
  <div className="project__description">
  <h3>Ecommerce Website</h3>
  <p>
    Fashion is a ReactJS Ecommerce Website
    <br />
    Built with: React Redux, Bootstrap, CSS
  </p>
  <a href="https://zarfaa.github.io/React_Ecommerce/" className="button" target="_blank" rel="noreferrer">
    View Project
  </a>
  </div>
</div>


</div>
    </>)
}

export default Web