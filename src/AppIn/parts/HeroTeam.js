/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { FiArrowDownCircle } from "react-icons/fi";
import Team from "../assets/images/team.png";
import { Link } from "react-router-dom";

export default function HeroTeam() {
  return (
    <section className="flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2">
      <div className="w-full sm:w-1/2 flex flex-col px-5 mb-5 sm:mb-0 sm:px-12 sm:mt-6 lg:mt-6 xl:mt-20">
        <h1 className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase">
          BRING YOUR BUSINESS ONLINE
        </h1>
        <p className="font-light text-xl text-gray-400 leading-relaxed dark:text-primary-light ">
          We Make Creativity Work For Your Brand !.... Ours Is A Team Of
          Creatives That Is Brainstorming On Great Ideas, All. The. Time.With
          Our Skills Put Together, You Get An Ensemble Capable Of Doing Anything
          And Everything Your Brand Needs.
        </p>
        <Link
          download="Stoman-Resume.pdf"
          to="/contact"
          className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
          aria-label="Download Resume"
        >
          <FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
          <span className="text-sm sm:text-lg font-general-medium duration-100">
            Contact Us
          </span>
        </Link>
      </div>
      <div className="w-full sm:w-1/2 sm:pr-12">
        <img src={Team} alt="Hero" />
      </div>
    </section>
  );
}
