import { useEffect, useRef, useState } from "react";
import "./Home.css";

import htmlIcon from "../assets/images/html-5-svgrepo-com.svg";
import cssIcon from "../assets/images/css-3-svgrepo-com.svg";
import jsIcon from "../assets/images/js-svgrepo-com.svg";
import jqueryIcon from "../assets/images/jquery-svgrepo-com.svg";
import nodeIcon from "../assets/images/node-js-svgrepo-com.svg";
import reactIcon from "../assets/images/react-svgrepo-com.svg";
import githubIcon from "../assets/images/github-svgrepo-com.svg";
import figmaIcon from "../assets/images/figma-svgrepo-com.svg";
import illustratorIcon from "../assets/images/adobe-illustrator-svgrepo-com.svg";
import photoshopIcon from "../assets/images/adobe-photoshop-svgrepo-com.svg";
import instagramIcon from "../assets/images/instagram.svg";
import ssgLanders from "../assets/images/ssgLanders.png";
import oozyCoffee from "../assets/images/ozzyCoffee.png";
import lotteWorld from "../assets/images/lotteWorld.png";
import zeroWaste from "../assets/images/zeroWaste.png";

import ofMe1 from "../assets/images/ofMe1.jpg";
import ofMe2 from "../assets/images/ofMe2.jpg";
import ofMe3 from "../assets/images/ofMe3.jpg";
import ofMe4 from "../assets/images/ofMe4.jpg";
function Home() {
  const beeRef = useRef(null);
  const thumbRefs = useRef([]);
  const [activeProject, setActiveProject] = useState(0);

const projects = [
  {
    title: "SSG LANDERS",
    img: ssgLanders,
    link: "#",
  },
  {
    title: "OOZY",
    img: oozyCoffee,
    link: "#",
  },
  {
    title: "LOTTE",
    img: lotteWorld,
    link: "#",
  },
  {
    title: "RE:ZERO",
    img: zeroWaste,
    link: "#",
  },
];
const prevProject = () => {
  setActiveProject((prev) =>
    prev === 0 ? projects.length - 1 : prev - 1
  );
};

const nextProject = () => {
  setActiveProject((prev) =>
    prev === projects.length - 1 ? 0 : prev + 1
  );
};
  useEffect(() => {
    const beeOutline = beeRef.current.querySelectorAll(".bee-outline");
    const beeDetails = beeRef.current.querySelectorAll(".bee-detail");
    const swirlLine = beeRef.current.querySelectorAll(".swirl-line");
    const secondLine = beeRef.current.querySelectorAll(".second-line");

    const paths = [
      ...beeOutline,
      ...beeDetails,
      ...swirlLine,
      ...secondLine,
    ];

    paths.forEach((path) => {
      const length = path.getTotalLength();
      const isReverse = path.classList.contains("second-line");
      const startOffset = isReverse ? -length : length;

      path.dataset.length = length;
      path.dataset.startOffset = startOffset;

      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = startOffset;
    });

    const getDuration = (path) => {
      if (path.classList.contains("bee-outline")) return 2400;
      if (path.classList.contains("bee-detail")) return 700;
      if (path.classList.contains("swirl-line")) return 3200;
      if (path.classList.contains("second-line")) return 3200;
      return 1200;
    };

    const drawOne = (path) => {
      const duration = getDuration(path);
      const startOffset = Number(path.dataset.startOffset);

      const animation = path.animate(
        [
          { strokeDashoffset: startOffset },
          { strokeDashoffset: 0 },
        ],
        {
          duration,
          easing: "linear",
          fill: "forwards",
        }
      );

      return animation.finished.catch((error) => {
        if (error.name !== "AbortError") {
          throw error;
        }
      });
    };

    const resetAll = () => {
      paths.forEach((path) => {
        path.getAnimations().forEach((animation) => animation.cancel());

        path.style.strokeDashoffset = Number(path.dataset.startOffset);
      });
    };

    let isCancelled = false;

    const playLoop = async () => {
      while (!isCancelled) {
        resetAll();

        for (const path of paths) {
          await drawOne(path);

          if (isCancelled) return;
        }

        await new Promise((resolve) => setTimeout(resolve, 500));
      }
    };

    playLoop();

    return () => {
      isCancelled = true;
      paths.forEach((path) => {
        path.getAnimations().forEach((animation) => animation.cancel());
      });
    };
  }, []);
  useEffect(() => {
  thumbRefs.current[activeProject]?.scrollIntoView({
    behavior: "smooth",
    inline: "center",
    block: "nearest",
  });
}, [activeProject]);
  
  //home  


  // about

  return (
    <>
      <section id="home">
        <div id="beeImg" ref={beeRef}>
          <div className="beeImg">
            <svg className="beeSvg" viewBox="0 0 661.07 652.8">
              <path
                className="cls-1 bee-outline"
                d="M187.5,519.25C272.12,391.39,448.16,273.47,600.67,369c19,11.9,46.28,35,50.92,57.8,24.73,121.71-266.2,277.9-407.31,194.6-10.24-6.06-63-72.65-68.53-71.29-17.61,4.33-69.29,23.86-82.24,36.6-1.23,1.21,52.08-17.34,99.87-17.34"
              />

              <path
                className="cls-2 bee-detail"
                d="M408.25,380.76c31.94,67.66,26.53,143.75,10.71,213.56"
              />

              <path
                className="cls-2 bee-detail"
                d="M322.25,415.76c31.94,67.66,26.53,143.75,10.71,213.56"
              />

              <path
                className="cls-2 bee-detail"
                d="M564.41,467.08c.33,2-1,4-1.49,6"
              />

              <path
                className="cls-1 swirl-line"
                d="M373,300.35C380.85,243.45,231.41-23.19,162.59,11c-57.94,28.8,110.21,219,131.74,240.45,18.1,18,70.43,71.64,59,48.88-16.79-33.41-90.69-66.66-121.9-80.15C-44.61,100.87-76.06,351.29,200,310.13c42.23-6.3,84.39-16.6,125.83-23.47"
              />
            </svg>
          </div>

          <div className="beeImg">
            <svg className="beeSvg" viewBox="0 0 642.12 509.03">
              <path
                className="cls-1 second-line"
                d="M507.27,501c103-72.72,192-265.27,62.05-335.84-180.67-98.12-420,245.17-277.61,289.74C416.83,494.06,604.11,151.4,454.78,62,230.87-72,72.74,289.17,139,262.08,322.22,41,191.73-77.37,8,80.12"
              />
            </svg>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="forMe">
          <div className="sparkleBox">
            <div className="sparkle sparkle1"></div>
            <div className="sparkle sparkle2"></div>
            <div className="sparkle sparkle3"></div>
            <div className="sparkle sparkle4"></div>
            <div className="sparkle sparkle5"></div>
          </div>
          <h2>안녕하세요.
            <br />작은 움직임과 디테일을 연결하며
            <br />
            경험을 만들어가는 신입 웹 개발자  <br />Bee Choi 라고 합니다.
          </h2>

        </div>


        <div className="aboutBee">
          <svg className="aboutBeeSvg" viewBox="0 0 180 120">

            <path
              className="beeLine"
              d="M35 65 C45 35, 95 30, 125 65 C100 100, 55 95, 35 65"
            />

            <path
              className="beeLine"
              d="M70 58 C65 75, 66 88, 76 99"
            />

            <path
              className="beeLine"
              d="M92 58 C88 76, 90 88, 100 98"
            />

            <path
              className="beeLine"
              d="M112 62 C130 66, 145 72, 156 82"
            />

            <path
              className="beeLine"
              d="M88 38 C92 8, 132 3, 126 38 C110 50, 98 47, 88 38"
            />

            <path
              className="beeLine"
              d="M105 42 C125 18, 168 30, 150 58 C130 65, 115 56, 105 42"
            />

            <circle className="beeDot" cx="52" cy="64" r="3" />

          </svg>
        </div>


        <div className="ofMe">

          <div className="cards">
            <div className="hexCard hex1">
              <img src={ofMe1} alt="" />
            </div>

            <div className="hexCard hex2">
              <img src={ofMe2} alt="" />
            </div>

            <div className="hexCard hex3">
              <img src={ofMe3} alt="" />
            </div>

            <div className="hexCard hex4">
              <img src={ofMe4} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section id="skill">
        <div className="skillTitle">
          <h2>Skill</h2>
        </div>

        <div className="skillCards">
          <div className="skillCard">
            <img src={htmlIcon} alt="HTML" />
            <span>HTML</span>
          </div>

          <div className="skillCard">
           <img src={cssIcon} alt="CSS" />
            <span>CSS</span>
          </div>

          <div className="skillCard">
           <img src={jsIcon} alt="JavaScript" />
            <span>JavaScript</span>
          </div>
          <div className="skillCard">
            <img src={jqueryIcon} alt="jquery" />
            <span>Jquery</span>
          </div>
          <div className="skillCard">
            <img src={nodeIcon} alt="Node.js" />
            <span>Node.js</span>
          </div>
          <div className="skillCard">
            <img src={reactIcon} alt="React" />
            <span>React</span>
          </div>

          <div className="skillCard">
            <img src={githubIcon} alt="GitHub" />
            <span>GitHub</span>
          </div>

          <div className="skillCard">
            <img src={figmaIcon} alt="Figma" />
            <span>Figma</span>
          </div>
          <div className="skillCard">
            <img src={illustratorIcon} alt="Illustrator" />
            <span>Illustrator</span>
          </div>
          <div className="skillCard">
            <img src={photoshopIcon} alt="Photoshop" />
            <span>Photoshop</span>
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="projectInner">
    <div className="projectLeft">
      <h2>Projects</h2>

      <div className="projectInfo">
        <strong>{String(activeProject + 1).padStart(2, "0")}</strong>

        <div className="projectLine"></div>

        <div>
          <h3>{projects[activeProject].title}</h3>

          <a href={projects[activeProject].link}>
            View Project <span>↗</span>
          </a>
        </div>
      </div>
    </div>

    <div className="projectRight">
      <div className="bigHex">
        {projects[activeProject].img ? (
          <img
            src={projects[activeProject].img}
            alt={projects[activeProject].title}
          />
        ) : (
          <span>LOGO</span>
        )}
      </div>

      <div className="hexNumber">
        {String(activeProject + 1).padStart(2, "0")}
      </div>
    </div>
  </div>

  <div className="projectBottom">
    <button type="button" onClick={prevProject} className="slideBtn">
      ‹
    </button>

    <div className="thumbList">
      {projects.map((project, index) => (
        <button
  type="button"
  key={index}
  ref={(el) => (thumbRefs.current[index] = el)}
  className={`thumbItem ${activeProject === index ? "active" : ""}`}
  onClick={() => setActiveProject(index)}
>
          <div className="thumbHex">
            {project.img ? (
              <img src={project.img} alt={project.title} />
            ) : (
              <span>LOGO</span>
            )}
          </div>

          <p>
            {String(index + 1).padStart(2, "0")} {project.title}
          </p>
        </button>
      ))}
    </div>

    <button type="button" onClick={nextProject} className="slideBtn">
      ›
    </button>
  </div>
      </section>

      <section id="contect">
         <div className="contactContent">
    <h2>CONTACT</h2>

    <p>
      새로운 경험을 함께 만들고 싶어요.
      <br />
      연락 기다릴게요!
    </p>

    <span className="contactHeart">♡</span>

    <div className="contactList">
      <a href="mailto:bee.choi.dev@gmail.com" className="contactItem">
        <div className="contactIcon">
          ✉
        </div>

        <strong>EMAIL</strong>

        <span>x823429331158@gmail.com</span>
      </a>

      <a href="https://github.com/" className="contactItem">
        <div className="contactIcon">
         <img src={githubIcon} alt="" />
        </div>

        <strong>GITHUB</strong>

        <span>https://github.com/BEE0701</span>
      </a>

      <a href="https://instagram.com/" className="contactItem">
        <div className="contactIcon">
          <img src={instagramIcon} alt="" />
        </div>

        <strong>INSTAGRAM</strong>

        <span>https://www.instagram.com/cu_he_hi_joy/</span>
      </a>
    </div>
  </div>

  <footer className="contactFooter">
    © 2026 Bee Choi Portfolio. All rights reserved.
  </footer>
      </section>
    </>
  );
}

export default Home;