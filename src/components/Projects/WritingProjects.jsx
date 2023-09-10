import Project1 from "../../assets/Project1.jpg"
import Project2 from "../../assets/Project2.jpg"
import Project3 from "../../assets/Project 3.jpg"

let Writing = () =>{
    return(
        <>  <h1 className="title">Writing Portfolio</h1>
        <div className="Writing_Projects">
          
        <div class="Project_Item">
            <img src={Project1} alt="kitchen design"/>
            <a href="https://medium.com/p/59b465a6e002"  target ="_blank">
            <button><i class="fa-brands fa-medium"></i></button>
    </a>
        </div>

        <div class="Project_Item">
            <img src={Project2} alt="bathroom"/>
            <a href="https://medium.com/@zarfamasood/your-ultimate-guide-to-mastering-procrastination-98481bde70ed"target ="_blank">
    <button><i class="fa-brands fa-medium"></i></button>
    </a></div>

        <div class="Project_Item">
            <img src={Project3} alt="bathroom"/>
       <a href="https://medium.com/@zarfamasood/7-tips-to-unlock-your-inner-strength-493435c343be"  target ="_blank">
            <button><i class="fa-brands fa-medium"></i></button>
    </a></div>
        </div>
        </>
    )
}

export default Writing