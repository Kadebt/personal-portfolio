import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./styling/presentation.css";

const Presentation = (props) => {
  console.log(props);

  // useEffect(() => {
  //     axios.get(`/api/presentation/${id}`).then((res) => {
  //         setPresentation(res.data)})
  //     })

  return (
    <>
      <div className="presentation-scrim" />
      <div className="presentation-div">
        <h2 className="presentation-title">{props.title}</h2>
        <div className="presentation-inner">
          <img className="presentation-gif" src={props.gif} />
          <div className="info-wrapper">
            <p className="presentation-description">{props.description}</p>
            <a className="presentation-link">{props.link}</a>
            <a className="presentation-src">{props.live}</a>
          </div>
          <button className="closebutton" onClick={() => props.setPopUp(false)}>
            X
          </button>
        </div>
      </div>
    </>
  );
};
export default Presentation;
