import LogoTitle from "../../assets/images/Tejal_picture.png";
import LogoASU from "../../assets/images/asu.png";
import LogoACIMS from "../../assets/images/acims.png";
import LogoFulton from "../../assets/images/fulton.png";
import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import { useState, useRef, useEffect } from "react";

const Home = () => {
  const [letterClass] = useState("text-animate");
  const aboutImagesRef = useRef(null);

  useEffect(() => {
    const el = aboutImagesRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in-view"); // trigger the rotateIn animation
          observer.unobserve(el); // only play it once
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);
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
      <div id="home" className="home-content-wrapper">
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
        </div>
      </div>
      {/* Experiences section added below existing content */}
      <div id="work-experience" className="experiences-section">
        <hr className="styled-hr" />
        <h2> Work Experience</h2>

        <div className="experiences-grid">
          <article className="experience-card">
            <h3>Researcher</h3>
            <h4>
              Arizona Center of Integrative Modeling and Simulation (ACIMS),
              Arizona State University
            </h4>
            <p className="exp-meta">July 2024 – Present</p>
            <p>
              • Developing and enhancing an MVC architecture component modeling
              tool by integrating MongoDB-based persistent model storage,
              improving reliability, usability, and scalability for research
              teams.
              <br></br>• Testing, debugging, and expanding its capabilities;
              improved the user interface by enhancing visual design.
              <br></br>• Enhanced the JavaFX-based user interface, introducing
              intuitive visual design improvements to boost scalability.
            </p>
          </article>

          <article className="experience-card">
            <h3> Graduate Teaching Assistant</h3>
            <h4>
              Academic and Student Affairs, Fulton Schools of Engineering,
              Arizona State University
            </h4>
            <p className="exp-meta">August 2025 – December 2025</p>
            <p>
              • Facilitated weekly lab sessions for 100+ first-year engineering
              students, reinforcing engineering fundamentals.
              <br></br>• Mentored student teams on 5+ collaborative projects,
              promoting problem-solving, design thinking, and teamwork.
              <br></br>• Evaluated 20+ assignments per semester, delivering
              constructive feedback to improve student performance.
            </p>
          </article>

          <article className="experience-card">
            <h3>Graduate Service Assistant</h3>
            <h4>Arizona State University</h4>
            <p className="exp-meta">January 2025 – May 2025 · Tempe, Arizona</p>
            <p>
              • Leading lab sessions, tutoring students, and reinforcing
              students’ learning in Computer Science fundamentals.
              <br></br>• Providing hands-on debugging assistance and mentoring
              students for 100+ students in Object-oriented programming and Data
              Structures, resulting in a 25% improvement in student
              comprehension.
            </p>
          </article>

          <article className="experience-card">
            <h3>Software Engineer Intern</h3>
            <h4>Fairmont Scottsdale Hotels</h4>
            <p className="exp-meta">August 2023 – May 2024 · Scottsdale, Arizona</p>
            <p>
              • Designed, developed, and deployed a scalable inventory
              management system within an Agile team of 5, improving operational
              efficiency and supporting 3,000+ monthly inventory transactions.
              <br></br>• Automated workflows with Microsoft PowerApps, Power
              Automate, and Microsoft Lists, reducing data entry time by 50%,
              manual errors by 35%, and increasing inventory management
              efficiency by 40%.
            </p>
          </article>
        </div>

        <div className="about-images" ref={aboutImagesRef}>
          <img src={LogoASU} alt="Arizona State University" />
          <img
            src={LogoFulton}
            alt="Fulton Schools of Engineering"
            style={{ height: "120px", marginTop: "30px" }}
          />
          <img src={LogoACIMS} alt="ACIMS" />
        </div>
      </div>

      {/* Projects section */}
      <div id="projects" className="experiences-section projects-section">
        <hr className="styled-hr" />
        <h2>Projects</h2>

        <div className="experiences-grid projects-grid">
          <article className="experience-card">
            <h3>LogMyReads</h3>
            <h4>MongoDB, Express.js, React, Node.js, LLaMa</h4>
            <p className="exp-meta">July 2025 – August 2025</p>
            <p>
              • Developed a full-stack web application using the MERN stack
              enabling users to catalog and organize books they’ve read.
              <br></br>• Integrated the Google Books API to provide real-time
              recommendations across 100+ genres.
              <br></br>• Implemented LLM-powered summaries with LLaMA to generate
              concise overviews for 1000+ book titles.
              <br></br>• Designed and launched a responsive UI, improving
              usability and delivering a 30% faster browsing experience through
              optimized React components.
            </p>
          </article>

          <article className="experience-card">
            <h3>PhotoShare</h3>
            <h4>HTML, CSS, PHP, SQL, Bootstrap, MySQL, phpMyAdmin</h4>
            <p className="exp-meta">January 2023 – April 2023</p>
            <p>
              • Designed and launched a social media web application with 10+
              active users, enabling photo sharing and community interaction.
              <br></br>• Optimized MySQL data storage and retrieval, reducing
              query times by 20% and improving overall responsiveness.
              <br></br>• Implemented interactive features such as likes,
              comments, tagging, and a contribution leaderboard, boosting user
              engagement by 30%.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Home;
