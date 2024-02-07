import "./About.css"
import Img from "../../assets/hero_img.jpg"
import HTML from "../../assets/html.png"
import CSS from "../../assets/css.png"
import Bootstrap from "../../assets/Bootstrap.png"
import React from "../../assets/react.png"
import Javascript from "../../assets/JS.png"
import NodeJS from "../../assets/node.png"
import NestJS from "../../assets/nestJs.png"
import MaterialUI from "../../assets/MaterialUI.png"
import Tailwind from "../../assets/tailwind.png"
import MongoDB from "../../assets/MongoDB.png"
import TypeScript from "../../assets/Typescript.png"
let About = () => {
  return (
    <>
      <section id="about">

        <div className="About_Flex">
          <div className="about_img" ><img src={Img} alt="hero left" className="about_img" /></div>
          <div className="about__container">
            <div>
              <h1 className="title animation2">About Me</h1>
              <p className=" about__description animation2">Hi! I'm Zarfa, an <span className="underline">experienced web developer.</span>
                I specialize in crafting stunning, user-friendly web solutions that deliver tangible results. Additionally, I offer content creation services tailored to your website's needs. Your satisfaction is my utmost priority.</p></div>
          </div>
        </div>
      </section>

      <section className="margin">
      <h1 className="title">Technologies</h1>
        <span className="section__subtitle">I work with</span>
        <div className="skills">
          <div className="border">
            <img src={HTML} alt="HTML"/>
            <h3 className="skills__name">HTML5</h3>
            </div>

          <div className="border">
            <img src={CSS} alt="CSS"/>
            <h3 className="skills__name">CSS3</h3>
            </div>

          <div className="border">
            <img src={Javascript} alt="JavaScript"/>
            <h3 className="skills__name">Javascript</h3>
            </div>

          <div className="border">
            <img src={Bootstrap} alt="Bootstrap"/>
            <h3 className="skills__name">Bootstrap</h3></div>

          <div className="border">
            <img src={React} alt="React"/>
            <h3 className="skills__name">React</h3>
            </div>

            <div className="border">
            <img src={Tailwind} alt="Tailwind"/>
            <h3 className="skills__name">Tailwind CSS</h3>
            </div>

            <div className="border">
            <img src={MaterialUI} alt="MaterialUI"/>
            <h3 className="skills__name">Material UI</h3>
            </div>

            <div className="border">
            <img src={TypeScript} alt="TypeScript"/>
            <h3 className="skills__name">TypeScript</h3>
            </div>

            
          <div className="border">
            <img src={NodeJS} alt="Node"/>
            <h3 className="skills__name">NodeJs</h3>
            </div>

            
          <div className="border">
            <img src={NestJS} alt="Nest"/>
            <h3 className="skills__name">NestJS</h3>
            </div>

                     
                     
            <div className="border">
            <img src={MongoDB} alt="MongoDB"/>
            <h3 className="skills__name">MongoDB</h3>
            </div>

        </div>
      </section>
    </>
  )
}

export default About