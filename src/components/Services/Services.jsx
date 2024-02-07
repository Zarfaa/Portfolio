import "./services.css"
import Frontend from "../../assets/icons8-react-48.png"
import Node from "../../assets/icons8-nodejs-48.png"
import MERN from "../../assets/icons8-code-48.png"
import Fiverr from "../../assets/icons8-fiverr-48.png"
import Github from "../../assets/icons8-github-48.png"
let Services = () => {

    return (
        <section id="services">
            <h2 className="section__title animate">Services</h2>
            <span className="section__subtitle animate">What i offer</span>
            <div className="services__container">

                <div className="services__content">
                    <img className= "service_icon " src={Frontend} alt="web icon" />
                    <h3 className="services__title">Frontend Development</h3>
                    <ul className="bullets">
                        <li>Responsive Web Design</li>
                        <li>Single Page Applications</li>
                        <li>Animation and Interaction</li>
                        <li>ReactJS Websites</li>
                    </ul>
                    <a href="https://github.com/Zarfaa" className="home__social-icon" target="_blank" rel="noreferrer">
                    <img src={Github} alt="github" id="icon" />
                    </a>
                    <a href="https://www.fiverr.com/zarfamasood/" className="home__social-icon" target="_blank">
                        <img src={Fiverr} alt="fiverr" id="icon" />
                    </a>
                </div>

                <div className="services__content">
                    <img className= "service_icon " src={Node} alt="Node" />
                    <h3 className="services__title">Backend Development</h3>
                    <ul className="bullets">
                        <li>Real-time Applications</li>
                        <li>Payment Gateways</li>
                        <li>API Integeration</li>
                        <li>NodeJS Websites</li>
                    </ul>
                    <a href="https://github.com/Zarfaa" className="home__social-icon" target="_blank" rel="noreferrer">
                    <img src={Github} alt="github" id="icon" />
                    </a>
                    <a href="https://www.fiverr.com/zarfamasood/" className="home__social-icon" target="_blank">
                        <img src={Fiverr} alt="fiverr" id="icon" />
                    </a>
                </div>

                <div className="services__content">
                    <img className= "service_icon " src={MERN} alt="mern" />
                    <h3 className="services__title">FullStack Development</h3>
                    <ul className="bullets">
                        <li>Ecommerce Solutions</li>
                        <li>Portfolio Websites</li>
                        <li>Custom Web Solutions</li>
                        <li>MERN Solutions</li>
                    </ul>
                    <a href="https://github.com/Zarfaa" className="home__social-icon" target="_blank" rel="noreferrer">
                    <img src={Github} alt="github" id="icon" />
                    </a>
                    <a href="https://www.fiverr.com/zarfamasood/" className="home__social-icon" target="_blank">
                        <img src={Fiverr} alt="fiverr" id="icon" />
                    </a>
                </div>
            </div>
        </section>

    )
}

export default Services