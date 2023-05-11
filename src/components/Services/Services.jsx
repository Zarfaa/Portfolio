import "./services.css"


let Services = () =>{
 
    return(
        <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
       <span className="section__subtitle">What i offer</span>
       <div className="services__container container grid">
       <div>
        <div className="services__content">
           <h3 className="services__title">Frontend developement</h3>
           <div className="services__box">
           <div className="services__group">

           <div className="services__data">
               <i className='bx bx-badge-check'></i>
               <div>
                   <h3>Responsive Web Design</h3>
                   <p>Get visually appealing and user-friendly websites</p>
               </div>
               </div>
               
               <div className="services__data">
               <i className='bx bx-badge-check'></i>
               <div>
                   <h3>JavaScript Development</h3>
                   <p>Get interactive and dynamic web functionality using JavaScript</p>
               </div>
               </div>


               <div className="services__data">
               <i className='bx bx-badge-check'></i>
               <div>
                 <h3>User Interface Design</h3>
                 <p>Get Intuitive and engaging user interfaces</p>
                </div>
               </div>

               </div>            
        </div>
      </div>
      </div>
   </div>
        </section>

)
}

export default Services