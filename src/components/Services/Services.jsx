import "./services.css"
import Web from "../../assets/icons8-website-50.png"
import Content from "../../assets/icons8-writing-50.png"
import Fiverr from "../../assets/fiverr-icon.png"
let Services = () => {

    return (
        <section id="services">
            <h2 className="section__title animate">Services</h2>
            <span className="section__subtitle animate">What i offer</span>
            <div className="services__container">

                <div className="services__content">
                    <img src={Web} alt="web icon" />
                    <h3 className="services__title">Frontend Development</h3>
                    <ul className="bullets">
                        <li>Ecommerce Solutions</li>
                        <li>Portfolio Websites</li>
                        <li>Restaurant Websites</li>
                        <li>ReactJS Websites</li>
                    </ul>
                    <a href="https://github.com/Zarfaa" className="home__social-icon" target="_blank" rel="noreferrer">
                        <i className="uil uil-github"></i>
                    </a>
                    <a href="https://www.fiverr.com/zarfamasood/" className="home__social-icon" target="_blank">
                        <img src={Fiverr} alt="fiverr" id="icon" />
                    </a>
                </div>

                <div className="services__content">
                    <img src={Content} alt="writing" />
                    <h3 className="services__title">Content Writing</h3>
                    <ul className="bullets">
                        <li>Website content writing</li>
                        <li>Blog Post Writing</li>
                        <li>Ghost Writing</li>
                        <li>SEO writing</li>
                    </ul>
                    <a href="https://medium.com/@zarfamasood" className="home__social-icon" target="_blank">
                        <i class="fa-brands fa-medium"></i>
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