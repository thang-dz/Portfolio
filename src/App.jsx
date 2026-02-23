import { useState, useEffect, useRef } from "react";
import UserImg from "./assets/user.png";
import FacebookIcon from "./assets/facebook.svg";
import GithubIcon from "./assets/github.svg";
import LinkedinIcon from "./assets/linkedin.svg";
import tich from "./assets/vector.svg";
import reactIcon from "./assets/react.svg";
import nodejs from "./assets/nodejs.svg";
import htmlIcon from "./assets/html.svg";
import arrowleft from "./assets/a-l.svg";
import calender from "./assets/calen.svg";
import logo from "./assets/logo.png";
import company from "./assets/company.webp";

import "./App.css";

function App() {
  const text =
    "I am currently a Fullstack Intern, with my main responsibilities focused on basic Frontend development. Although my current tasks involve simple features, I see this as an important foundation for understanding how a web application works from the user interface to the overall user experience. Driven by a strong passion for technology, I aim to gradually expand my skills into Backend development and system design, with the goal of becoming a well-rounded Fullstack Developer in the future!";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    setDisplayText("");
    let i = 0;
    let timeoutId;
    const type = () => {
      const char = text[i];
      if (!char) return;
      if (char === ".") {
        setDisplayText((prev) => prev + ".\n\n");
        i++;
        timeoutId = setTimeout(type, 1000);
      } else {
        setDisplayText((prev) => prev + char);
        i++;
        timeoutId = setTimeout(type, 20);
      }
    };

    type();

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div className="app">
        <div className="layout">
          <aside className="profile">
            <div className="profile-infor">
              <div className="infor">
                <img className="avatar" src={UserImg} />
                <div className="name-role">
                  <div className="name">
                    <h1>Vũ Mạnh Thắng</h1>
                    <img src={tich} />
                  </div>
                  <div>
                    <h2>Intern Fullstack</h2>
                  </div>
                </div>
              </div>
              <p className="slogan">"My passion is sleeping soundly"</p>

              <a
                target="_blank"
                className="social-link"
                href="https://calendly.com/vumanhthang711/30min"
              >
                < button className="contact-btn">
                  <div>CONTACT ME</div>
                </button>
              </a>

              <div className="social-media">
                <a
                  target="_blank"
                  href="https://www.facebook.com/manh.thang.338636"
                  className="social-link"
                >
                  <div className="sm-tools">
                    <img src={FacebookIcon} />
                    <p>/VuManhThang</p>
                  </div>
                </a>
                <a target="_blank" href="https://github.com/thang-dz/" className="social-link">
                  <div className="sm-tools">
                    <img src={GithubIcon} />
                    <p>/VuManhThang</p>
                  </div>
                </a>
                <a
                  target="_blank"
                  className="social-link"
                  href="https://www.linkedin.com/in/thang-vu-321b23276/"
                >
                  <div className="sm-tools">
                    <img src={LinkedinIcon} />
                    <p>/VuManhThang</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="profile-skills">
              <div className="skill-head">
                <h3>Skills</h3>
              </div>
              <div className="skills-contain">
                <div className="skills">
                  <img src={reactIcon} />
                  <h4>Reactjs</h4>
                </div>
                <div className="skills">
                  <img src={htmlIcon} />
                  <h4>HTML/CSS</h4>
                </div>
                <div className="skills">
                  <img src={nodejs} />
                  <h4>Nodejs</h4>
                </div>
              </div>
            </div>
          </aside>
          <main className="profile-contain">
            <div className="about-me ">
              <div className="about-header">
                <h3>About me</h3>
              </div>
              <div className="about-contain">
                <div className="introduce">
                  {displayText}
                  <span className="caret">|</span>
                </div>
              </div>
            </div>
            <h3>Featured Projects</h3>
            <div className="projects">
              <div className="projects-detail profile-infor">
                <div className="detail-head">
                  <h4>Words To Images</h4>
                </div>
                <div className="detail-contain">
                  <p>
                    A simple tool to satisfy your passion for creating comics,
                    transforming written stories into comics
                  </p>
                </div>
                <div className="detail-foot">
                  <div className="df-left">
                    <div className="circle-blue"></div>
                    <p>React</p>
                  </div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                    href="https://github.com/thang-dz/wordToImage"
                  >
                    <div className="df-right">
                      <p>View projects</p>
                      <img src={arrowleft} />
                    </div>
                  </a>
                </div>
              </div>
              <div className="projects-detail profile-infor ">
                <div className="detail-head">
                  <h4></h4>
                </div>
                <div className="detail-contain">
                  <p></p>
                </div>
                <div className="detail-foot">
                  <div className="df-left">
                    <div className="circle-blue"></div>
                    <p>React</p>
                  </div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                    href="https://github.com/thang-dz/wordToImage"
                  >
                    <div className="df-right">
                      <p>View projects</p>
                      <img src={arrowleft} />
                    </div>
                  </a>
                </div>
              </div>
              <div className="projects-detail profile-infor">
                <div className="detail-head">
                  <h4>Words To Images</h4>
                </div>
                <div className="detail-contain">
                  <p>
                    A simple tool to satisfy your passion for creating comics,
                    transforming written stories into comics
                  </p>
                </div>
                <div className="detail-foot">
                  <div className="df-left">
                    <div className="circle-blue"></div>
                    <p>React</p>
                  </div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                    href="https://github.com/thang-dz/wordToImage"
                  >
                    <div className="df-right">
                      <p>View projects</p>
                      <img src={arrowleft} />
                    </div>
                  </a>
                </div>
              </div>
              <div className="projects-detail profile-infor">
                <div className="detail-head">
                  <h4>Words To Images</h4>
                </div>
                <div className="detail-contain">
                  <p>
                    A simple tool to satisfy your passion for creating comics,
                    transforming written stories into comics
                  </p>
                </div>
                <div className="detail-foot">
                  <div className="df-left">
                    <div className="circle-blue"></div>
                    <p>React</p>
                  </div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                    href="https://github.com/thang-dz/wordToImage"
                  >
                    <div className="df-right">
                      <p>View projects</p>
                      <img src={arrowleft} />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <h3>Work Experience</h3>
            <div className="work-exp profile-infor">
              <div className="work-head">
                <img src={logo} />
                <div className="work">
                  <h4>Intern</h4>
                  <h4 className="department">Fabbi Development</h4>
                </div>
              </div>
              <div className="work-time">
                <img src={calender} />
                <p>01/2026 - Present</p>
              </div>
              <div className="work-detail">
                <p>Excited and enthusiastic upon joining the company</p>
              </div>
              <div className="work-img">
                <img src={company} />
              </div>
            </div>
            <h3>Awards</h3>
            <div className="profile-infor">
              <p>Maybe in the beautiful day!</p>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
