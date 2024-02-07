import Project3 from "../../assets/react_ecommerce.png"
import Project2 from "../../assets/project2.png"
import Project1 from  "../../assets/project1.png"
import Project4 from "../../assets/Project4.png"
import Project5 from "../../assets/project5.png"
let Web = () => {

    return(<>
     <div className="projects-container">
        

<div className="project">
<div className="project__img">
  <img className="image3" src={Project5} alt="Project Preview" />
  </div>
  <div className="project__description">
  <h3>PetVet</h3>
  <p>
    PetVet is a MERN based Web application
    <br />
    <span>React</span> <span>Redux</span> <span>Chakra UI</span> <span>NodeJS</span>
  </p>
  <a href="https://petvet.ai/login" className="button" target="_blank" rel="noreferrer">
    View Project <i class='bx bxs-right-arrow-alt'></i>
  </a>
  </div>
</div>


<div className="project">
  <div className="project__description">
  <h3>Portfolio</h3>
  <p>
    Portfolio Website Build for a Digital Designer
    <br />
    <span>React</span> <span>Bootstrap</span>
  </p>
  <a href="https://begottendesigns.com/" className="button" target="_blank" rel="noreferrer">
  View Project <i class='bx bxs-right-arrow-alt'></i>
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
  <h3>Fashion</h3>
  <p>
    ReactJS Ecommerce Website
    <br />
    <span>React</span> <span>Redux</span> <span>Bootstrap</span>
  </p>
  <a href="https://zarfaa.github.io/React_Ecommerce/" className="button" target="_blank" rel="noreferrer">
    View Project <i class='bx bxs-right-arrow-alt'></i>
  </a>
  </div>
</div>

<div className="project">
  <div className="project__description">
  <h3>Trek Buddy</h3>
  <p>
    Trip Planning Website Build With MERN
    <br />
    <span>React</span> <span>Redux</span> <span>NodeJS</span> <span>MongoDB</span> <span>Bootstrap</span>
  </p>
  <a href="https://trek-buddy.vercel.app/" className="button" target="_blank" rel="noreferrer">
  View Project <i class='bx bxs-right-arrow-alt'></i>
  </a>
  </div>
  <div className="project__img">
  <img className="image2" src={Project4} alt="Project Preview" />
  </div>
</div>

<div className="project">
<div className="project__img">
  <img className="image" src={Project1} alt="Project Preview" />
  </div>
  <div className="project__description">
  <h3>Foody</h3>
  <p>
    Foody is a ReactJS Resturant Website
    <br />
    <span>React</span> <span>Bootstrap</span>
  </p>
  <a href="https://resturant-website-3mgoesxj0-zarfa.vercel.app/" className="button" target="_blank" rel="noreferrer">
    View Project <i class='bx bxs-right-arrow-alt'></i>
  </a>
  </div>
</div>

</div>
    </>)
}

export default Web