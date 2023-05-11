import "./skills.css"
import Frontend from "./Frontend"

let Skills = () =>{

    return(<div>
         <section className="skills section" id="skills">
         <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My Technical Level</span>
        <div className="skills__container container grid">
            <Frontend/>
        </div>
         </section>

    </div>)

}

export default Skills