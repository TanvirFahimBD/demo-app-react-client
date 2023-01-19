import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
import { useTitle } from "../../hooks/useTitle";

const About = ({ children }) => {
  useTitle("About");
  return (
    <div style={{ minHeight: "100vh" }}>
      <div className="hero min-h-screen bg-base-200">
        <div className="relative hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://placeimg.com/260/400/arch"
            className="max-w-sm rounded-lg shadow-2xl z-10"
            alt=""
          />
          <img
            src="https://placeimg.com/260/400/nature"
            className="max-w-sm rounded-lg shadow-2xl absolute left-3/4 top-1 h-1/2 z-0"
            alt=""
          />
          <img
            src="https://placeimg.com/260/400/nature"
            className="max-w-sm rounded-lg shadow-2xl absolute right-1 top-60 h-1/2 z-0"
            alt=""
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
