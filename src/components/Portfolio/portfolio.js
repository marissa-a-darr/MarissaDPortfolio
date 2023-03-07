import React from "react";
import "./portfolio.css"

import Proj1 from "../../assets/project1.jpg";
import Proj2 from "../../assets/project2.jpg"; 
import Proj3 from "../../assets/project3.jpg";
import Proj4 from "../../assets/project4.jpg";
import Proj5 from "../../assets/project5.jpg";
import Proj6 from "../../assets/project6.jpg"

const data = [
  {
    id:1,
    screenshot:Proj1,
    title:"Out of This World Jokes",
    githublink:"https://github.com/marissa-a-darr/outofthisworldjokes",
    demo: "https://marissa-a-darr.github.io/outofthisworldjokes/",
  },
  {
    id:2,
    screenshot: Proj2,
    title:"Unity Team Generator",
    githublink:"https://github.com/marissa-a-darr/unity-team-generator",
    demo: "https://drive.google.com/file/d/1jRVCFv1d1pVWdvktn9jardikS3un9S-C/view",
  },
  {
    id:3,
    screenshot:Proj3,
    title:"Bright Sunshine Weather",
    githublink:"https://github.com/marissa-a-darr/bright-sunshine-weather",
    demo: "https://marissa-a-darr.github.io/bright-sunshine-weather/",
  },
  {
    id:4,
    screenshot:Proj4,
    title:"Better Have My Money",
    githublink:"https://github.com/marissa-a-darr/project2-collab",
    demo: "",
  },
  {
    id:5,
    screenshot:Proj5,
    title:"Jotting NoteTaker",
    githublink:"https://github.com/marissa-a-darr/jotting-notetaker",
    demo: ""
  },
  {
    id:6,
    screenshot:Proj6,
    title:"README Generator",
    githublink:"https://github.com/marissa-a-darr/README_Generator",
    demo: "https://watch.screencastify.com/v/LwRDeOQFTVMMHnq3WQdP"
  },
];

const Portfolio = () => {
  return (
    <section id="Portfolio">
    <h2>Portfolio</h2>
    <div className="container portfolio_container">
    {data.map(({id, screenshot, title, githublink, demo}) => {
      return (
        <article key={id} className="app_listing">
        <div className="app-title">
        {title}
        </div>
        <div className="app-screenshot">
        <img src={screenshot} alt="Screenshot of {title}">
        </img> 
        <div className="app-links">
        <a href={demo}
        className="btn btn-primary"
        target="_blank"
        rel= "noreferrer">
        Visit the Live Site!
        </a>
        <a href={githublink} className="btn" target="_blank" rel="noreferrer">
        Visit this GitHub!</a>
        </div>
        </div>
        </article>
      )
    })}
    </div>
    </section>
  )
}