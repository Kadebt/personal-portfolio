import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Presentation from "./presentation";
import "./styling/projects.css";

const Projects = (props) => {
  const [projects, setProjects] = useState([]);
  const [popUp, setPopUp] = useState(false);
  const [presentation, setPresentation] = useState([]);

  useEffect(() => {
    axios.get("/api/projects").then((res) => {
      setProjects(res.data);
    });
  }, []);

  const handlePopUpClick = (id) => {
    axios.get(`/api/presentation/${id}`).then((res) => {
      setPresentation(res.data);
    });
  };

  const mappedPresentation = presentation.map((e) => {
    return (
      <Presentation
        id={e.id}
        title={e.name}
        gif={e.gif}
        description={e.description}
        link={e.link}
        live={e.live}
        setPopUp={setPopUp}
      />
    );
  });

  const mappedProjects = projects.map((e) => {
    return (
      <div
        onClick={() => {
          handlePopUpClick(e.id);
          setPopUp(true);
        }}
        className="project-info"
      >
        <h2 className="projects-title">{e.name}</h2>
        <img className="projects-img" src={e.photo} />
        <a className="projects-description" href={!!e.live ? e.live : e.link}>
          {!!e.live ? "Live Version" : "Source Code"}
        </a>
      </div>
    );
  });
  console.log(presentation);

  return (
    <div className="projects-wrapper">
      {mappedProjects}
      {popUp === true ? mappedPresentation : null}
    </div>
  );
};

export default Projects;
