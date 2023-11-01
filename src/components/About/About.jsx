import "./About.css"
import CV from "../../assets/ZarfaMasood_CV.pdf"
import Img from "../../assets/hero_img.jpg"
import HTML from "../../assets/icons8-html-48.png"
import CSS from "../../assets/icons8-css-48.png"
import Bootstrap from "../../assets/icons8-bootstrap-48.png"
import React from "../../assets/icons8-react-native-48.png"
import Javascript from "../../assets/icons8-javascript-48.png"
import Git from "../../assets/icons8-git-48.png"
import Devops from "../../assets/icons8-azure-48.png"
let About = () => {
  return (
    <>
      <section id="about">

        <div className="About_Flex">
          <div className="about_img" ><img src={Img} alt="hero left" className="about_img" /></div>
          <div className="about__container">
            <div>
              <h1 className="title animation2">About Me</h1>
              <p className=" about__description animation2">Hi! I'm Zarfa, an <span className="underline">experienced writer and frontend web developer.</span>
                I specialize in crafting stunning, user-friendly web solutions that deliver tangible results. Additionally, I offer content creation services tailored to your website's needs. Your satisfaction is my utmost priority.</p></div>
            <div>
              <a download="" href={CV} className="CV_button" >Download CV<i class='bx bx-note'></i></a> </div>
          </div>
        </div>
      </section>
      <section>
        <span className="section__subtitle">My Technical Skills</span>
        <div className="skills">
          <div className="border">
            <h3 className="skills__name">HTML5</h3>
            <img src={HTML} alt="HTML"/></div>

          <div className="border">
            <h3 className="skills__name">CSS3</h3>
            <img src={CSS} alt="CSS"/></div>

          <div className="border">
            <h3 className="skills__name">JavaScript</h3>
            <img src={Javascript} alt="Javascript"/></div>

          <div className="border">
            <h3 className="skills__name">Bootstrap</h3>
            <img src={Bootstrap} alt="Bootstrap"/></div>

          <div className="border">
            <h3 className="skills__name">React</h3>
            <img src={React} alt="React"/></div>

          <div className="border">
            <h3 className="skills__name">Git</h3>
            <img src={Git} alt="Git"/></div>

          <div className="border">
            <h3 className="skills__name">Azure DevOps</h3>
            <img src={Devops} alt="Devops"/></div>
        </div>
      </section>
    </>
  )
}

export default About