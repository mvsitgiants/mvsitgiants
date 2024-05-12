import React, { useState } from "react";

import axios from "axios";
import { Navigate } from "react-router-dom";

const CareerForm = () => {
  const [user, setUser] = useState({});
  const datahandle = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };
  const submithandle = async () => {
    const { data } = await axios.post(
      "https://itgiants.onrender.com/api/v1/hireme",
      user
    );
    alert(data.message);
    <Navigate to="" />;
  };
  return (
    <div className="container">
      <div>
        <h1
          style={{
            textAlign: "center",
            fontSize: 35,
            fontWeight: "bold",
            marginTop: 50,
            color: "grey",
          }}
        >
          Career
        </h1>
        <p
          style={{
            marginBottom: 30,
            textAlign: "center",
            color: "grey",
            fontSize: 20,
          }}
        >
          Job Opening In IT Company. Apply Now!
        </p>
      </div>
      <form class="max-w-sm mx-auto">
        <div class="mb-5">
          <label
            for="name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <input
            onChange={datahandle}
            type="text"
            id="name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Name"
            required
          />
        </div>
        <div class="mb-5">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Email
          </label>
          <input
            onChange={datahandle}
            type="email"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="mvsitgiants@gmail.com"
            required
          />
        </div>
        <div class="mb-5">
          <label
            for="college"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            College/University
          </label>
          <input
            onChange={datahandle}
            type="text"
            id="college"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="example college"
            required
          />
        </div>
        <div class="mb-5">
          <label
            for="ug"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            UG/PG
          </label>
          <input
            onChange={datahandle}
            type="text"
            id="ug"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Bachelor of Technology"
            required
          />
        </div>
        <div class="mb-5">
          <label
            for="number"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Contact No.
          </label>
          <input
            onChange={datahandle}
            type="text"
            id="number"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="9111111111"
            required
          />
        </div>
        <label
          for="experience"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Experience
        </label>
        <select
          id="experience"
          onChange={datahandle}
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option>Select Experience</option>
          <option>Fresher</option>
          <option>1-2 Year</option>
          <option>2-5 Year</option>
          <option>More than 5</option>
        </select>
        <div class="mb-5">
          <label
            for="skill"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Skill
          </label>
          <textarea
            placeholder="Seprate skill (,)"
            onChange={datahandle}
            rows={3}
            type="text"
            id="skill"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div class="flex items-start mb-5">
          <div class="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
          </div>
          <label
            for="remember"
            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Remember me
          </label>
        </div>
        <button
          onClick={submithandle}
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
      <p
        style={{
          margin: 30,
          textAlign: "center",
          color: "grey",
          fontSize: 16,
        }}
      >
        MVS IT Giants is an Equal Opportunity Employer and considers applicants
        for all positions without regard to race, color, religion or belief,
        sex, age, national origin, citizenship status, marital status,
        military/veteran status, genetic information, sexual orientation, gender
        identity, physical or mental disability or any other characteristic
        protected by applicable laws. MVS IT Giants is committed to creating a
        dynamic work environment that values diversity and inclusion, respect
        and integrity, customer focus, and innovation. For more information,
        visit www.mvsitgiants.com. Follow us on Twitter, Facebook, Linkedin, and
        YouTube.
      </p>
    </div>
  );
};

export default CareerForm;
