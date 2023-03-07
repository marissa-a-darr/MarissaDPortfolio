import react from "react"
import "./resume.css";

const Resume = () => {
return (
  <section id="resume">
    <h2>Software Development Languages</h2>
    <div className="container resume_container">
      <div className="languages-list">
        <h3>Languages</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>Bootstrap</li>
          <li>React</li>
          <li>TypeScript</li>
          <li>mySQL</li>
          <li>MongoDB</li>
          <li>NODE JS</li>
          <li>Express</li>
          <li>PWAs</li>
          <li>OOR</li>
          <li></li>
        </ul>
        <div className="software-skills">
          <h3>Software Developer Skills</h3>
          <ul>
            <li> Agile Software Development Environment
            </li>
            <li>Unit Testing</li>
            <li>Code Review</li>
            <li>Software Sustainment</li>
            <li>RESTful APIs</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
)
}
export default Resume