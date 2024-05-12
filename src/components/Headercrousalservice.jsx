import React from "react";
import "./Headercrou.css";
import Contact from "./../pages/Contact";
import { Link } from "react-router-dom";

function Headercrousalservice() {
  return (
    <div>
      <header>
        <div className="overlay">
          <h1>BRING YOUR BUSINESS ONLINE</h1>
          <p>We Make Creativity Work For Your Brand !.... </p>
          <p>
            Ours Is A Team Of Creatives That Is Brainstorming On Great Ideas,
            All. The. Time.With Our Skills Put Together, You Get An Ensemble
            Capable Of Doing Anything And Everything Your Brand Needs.
          </p>
          <br />
          <Link
            className=" bg-primary-light rounded-[20px] p-3 text-black "
            to="/contact"
          >
            Contact Us
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Headercrousalservice;
