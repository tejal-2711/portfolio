import LogoTitle from "../../assets/images/Tejal_picture.png";
import LogoASU from "../../assets/images/asu.png";
import LogoACIMS from "../../assets/images/acims.png";
import LogoFulton from "../../assets/images/fulton.png";
import { Link } from "react-router-dom";
import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import { useState } from "react";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = [
    " ",
    "T",
    "e",
    "j",
    "a",
    "l",
    " ",
    "T",
    "r",
    "i",
    "p",
    "a",
    "t",
    "h",
    "i",
  ];
  const studentArray = [
    "A",
    " ",
    "M",
    "a",
    "s",
    "t",
    "e",
    "r",
    "'",
    "s",
    " ",
    "s",
    "t",
    "u",
    "d",
    "e",
    "n",
    "t",
    ",",
  ];

  const jobArray = [
    "S",
    "o",
    "f",
    "t",
    "w",
    "a",
    "r",
    "e",
    " ",
    "D",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
    ",",
  ];

  const jobArray_2 = [
    "a",
    "n",
    "d",
    " ",
    "R",
    "e",
    "s",
    "e",
    "a",
    "r",
    "c",
    "h",
    "e",
    "r",
  ];

  return (
    <div className="home-page">
      <div className="home-content-wrapper">
        <div className="text-zone">
          <hr className="styled-hr" />

          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m </span>

            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <img src={LogoTitle} alt="developer" />
            <br />

            <AnimatedLetters
              letterClass={letterClass}
              strArray={studentArray}
              idx={21}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={21}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray_2}
              idx={22}
            />
          </h1>
          <hr className="styled-hr" />

          <h2>Frontend Developer / Software Developer</h2>
        </div>

        <div className="about-box">
          <h2>About Me</h2>
          <p>
            Hi, I’m a student at Arizona State University, currently pursuing my
            Master's in Computer Science. Alongside my education, I work as a
            Teaching Assistant and perform research in Software Visualization.
          </p>

          <p>
            My interests lie in Web Development, Frontend Development, Software
            Visualization, and creating innovative applications. I am also
            interested in learning more about Data analytics, Data
            Visualization, and Machine Learning. I am proficient in a range of
            technologies including Java, JavaFX, React, SQL, Python, JavaScript,
            and more!
          </p>

          <p>
            I am actively looking for fulltime roles and opportunities that
            align with my experience and goals!
          </p>
          <div className="about-images">
            <img src={LogoASU} alt="developer" />
            <img
              src={LogoFulton}
              alt="developer"
              style={{ height: "120px", marginTop: "30px" }}
            />
            <img src={LogoACIMS} alt="developer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
