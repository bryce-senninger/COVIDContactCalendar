import React from "react";
import "./style.css";

function Header() {
  return (
    <div
      className="jumboWrap"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <div className="jumbotron landingJumbo">
        <h1 className="display-4 landingHead">COVID Contact Calendar</h1>
        <p className="lead">
          A tool to help track social isolation and risk of contracting and
          spreading COVID-19 within your close personal network.
        </p>
        <p className="lead">
          By tracking exposure, isolation time, and risk factors associated with
          the virus- this tool can help you make informed isolation decisions.
        </p>
      </div>
    </div>
  );
}

export default Header;
