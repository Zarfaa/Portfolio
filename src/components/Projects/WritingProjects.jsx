import Project1 from "../../assets/article.png"
import Project2 from "../../assets/Project2.jpg"
import Project3 from "../../assets/Project 3.jpg"

let Writing = () =>{
    return(
        <>  <h1 className="title">Writing Portfolio</h1>
        <div className="Writing_Projects">
          
        <div class="Project_Item">
            <img src={Project1} alt="client work"/>
            <a href="https://innerstrengthmatters.com/10-tips-to-improve-your-mental-health/"  target ="_blank">
            <button>Published Work</button>
    </a>
        </div>

        <div class="Project_Item">
            <img src={Project2} alt="sample "/>
            <a href="https://medium.com/@zarfamasood/your-ultimate-guide-to-mastering-procrastination-98481bde70ed"target ="_blank">
    <button><i class="fa-brands fa-medium"></i> Read Sample</button>
    </a></div>

        <div class="Project_Item">
            <img src={Project3} alt="sample article"/>
       <a href="https://medium.com/@zarfamasood/7-tips-to-unlock-your-inner-strength-493435c343be"  target ="_blank">
            <button><i class="fa-brands fa-medium"></i>Read Sample</button>
    </a></div>
        </div>
        </>
    )
}

export default Writing