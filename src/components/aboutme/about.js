import React from "react";
import "./About.css";
// import Profile from "";/*profile pic here*/
// import { FiUsers } from "react-icons/fi";
// import { FaAward } from "react-icons/fa";
// import { VscFolderLibrary } from "react-icons/vsc";

const Aboutme = () => {
  return (
    <section id="about">
      <h3>Who Am I?</h3>
      <div className="container aboutme_container">
        <div className="me">
          <div className="profilephoto"></div>
          <img src={ProfilePic} alt="Photo of Marissa"></img>
        </div>
       < div className="whoami">
        <div className="mystory">
          <p>Hello! My name is Marissa. I'm 27 years old and I am proud to call myself a Full Stack Software Developer! Up until the age of 25, I was determined to keep pursuing a passion of mine that had bloomed into a career that I lived and breathed. Due to health, I had to redirect the same amount of passion and drive into something else. Sticking with a personal trend, I followed my passion and love for software development! I earned a certificate in Full Stack Software Development through University of Central Florida. My strengths are being highly adaptable, a passion for learning, teamwork, and problem-solving.
          </p>
          <a href="contact me" className="btn btn-primary">
            Let's Talk!
          </a>
        </div>
       </div>
      </div>
    
    </section>
  )
}
export default Aboutme;