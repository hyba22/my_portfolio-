import '../css/about.css'
import hyba from "../assets/hyba.jpg"

const About=()=>{
    return(
        <div className="about" id="about">
            <div className="img-container">
            <img src={hyba} className="photo" alt="hyba-legend"></img>
            </div>
            <div className="about-description">
                <h2>About Me</h2>
            <p>
                I'm passionate about computer science universe and Big Data. I'm extremly curious and 
                motivated to constantly develop my skills and evolve professionally. At the same time, i'm a sociable 
                person who enjoys getting in touch with people. I'm always ready to learn new technologies and technics 
                to improve myself.

            </p>
            </div>
        </div>
    )
}

export default About;