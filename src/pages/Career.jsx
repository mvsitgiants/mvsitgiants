import React from "react";
import CareerForm from "../components/Careerform";

function Career() {
  return (
    <div>
      <img
        src="assets/images/bgcareer.jpg"
        alt=""
        style={{
          background: "linear-gradient(#eeaeca, #94bbe9)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "50vh",
        }}
      />
      <div>
        {" "}
        <CareerForm />
      </div>
    </div>
  );
}

export default Career;
