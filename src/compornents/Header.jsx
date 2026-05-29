import { useEffect, useState } from "react";
import logoImg from "../assets/images/favicon.png";
import "./Header.css";

function Header() {
  const [hideHeader, setHideHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.querySelector("#home");

      if (!homeSection) return;

      const homeHeight = homeSection.offsetHeight;
      const scrollY = window.scrollY;

      setHideHeader(scrollY > homeHeight - 100);
    };  

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={hideHeader ? "hide" : ""}>
      <h1 id="logo">
        <a href="#home">
          <img src={logoImg} alt="logo" />
        </a>
      </h1>

      <ul>
        <li><a href="#home">HOME</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#skill">SKILL</a></li>
        <li><a href="#projects">PROJECT</a></li>
        <li><a href="#contect">CONTACT</a></li>
      </ul>
    </header>
  );
}

export default Header;