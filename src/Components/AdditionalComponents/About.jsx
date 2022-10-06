import React from "react";
import "./About.css";
import Gurtaran from "./images/gurtaran.jpg";
import Sahib from "./images/sahib.jpg";
import Yuvraj from "./images/yuvraj.jpeg";
// ABOUT PAGE
export const About = () => {
  return (
    <div>
      <div className="about-section">
        <h1>About Us Page</h1>
      </div>

      <h2 style={{ textAlign: "center" }}>Our Team</h2>
      <div className="row">
        
        <div className="column">
          <div className="Aboutcard">
            <img
              style={{ width: "100%" }}
              src={Sahib}
              alt="Sahib Singh"
            />
            <div className="Aboutcontainer">
              <h2>Sahib Singh</h2>
              <h3>NITJ</h3>
              <p className="AboutTitle">Team Member</p>
              <p>
                <span style={{ fontSize: "1.5rem", color: "green" }}>
                  Languages and Tools:
                </span>{" "}
                JavaScript, CSS
              </p>
              <p>xyz@gmail.com</p>
              <p>
                <button className="AboutButton">Contact</button>
              </p>
            </div>
          </div>
        </div>

       
        <div className="column">
          <div className="Aboutcard">
            <img
              style={{ width: "100%" }}
              src={Yuvraj}
              alt="Yuvraj Singh"
            />
            <div className="Aboutcontainer">
              <h2>Yuvraj Singh</h2>
              <h3>Chitkara University</h3>
              <p className="AboutTitle">Team Leader</p>
              <p>
                <span style={{ fontSize: "1.5rem", color: "green" }}>
                  Languages and Tools:
                </span>{" "}
                JavaScript, React JS, Firebase
              </p>
              <p>abc@gmail.com</p>
              <p>
                <button className="AboutButton">Contact</button>
              </p>
            </div>
          </div>
        </div>

       
        <div className="column">
          <div className="Aboutcard">
            <img
            style={{ width: "100%" }}
            src={Gurtaran}
            alt="Gurtaran Singh"
            />
            <div className="Aboutcontainer">
              <h2>Gurtaran Singh</h2>
              <h3>TIET</h3>
              <p className="AboutTitle">Team Member</p>
              <p>
                <span style={{ fontSize: "1.5rem", color: "green" }}>
                  Languages and Tools:
                </span>{" "}
                CSS, Design
              </p>
              <p>asd@yahoo.com</p>
              <p>
                <button className="AboutButton">Contact</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
