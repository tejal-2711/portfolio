import "./index.scss";
import { Link } from "react-router-dom";
import LogoS from "../../assets/images/T.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";

const SECTIONS = ["home", "work-experience", "projects"];

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // pick the entry closest to the top of the viewport that's visible
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      // account for the 70px fixed bar; trigger when section is in the upper area
      { rootMargin: "-90px 0px -55% 0px", threshold: 0 }
    );

    const elements = SECTIONS.map((id) => document.getElementById(id)).filter(
      Boolean
    );
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoS} alt="logo" />
    </Link>

    <nav>
      <button
        type="button"
        className={activeSection === "home" ? "active" : ""}
        onClick={() => scrollToSection("home")}
      >
        Home
      </button>

      <button
        type="button"
        className={activeSection === "work-experience" ? "active" : ""}
        onClick={() => scrollToSection("work-experience")}
      >
        Work Experience
      </button>

      <button
        type="button"
        className={activeSection === "projects" ? "active" : ""}
        onClick={() => scrollToSection("projects")}
      >
        Projects
      </button>
    </nav>
    <ul>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/tejal-tripathi/"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>
      </li>

      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/tejal-2711"
        >
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
      </li>
    </ul>
  </div>
  );
};

export default Sidebar;
