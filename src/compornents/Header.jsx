import './Header.css'

function Header(){
    return(
        <header>
            <div id="logo">
                <img src="./../src/assets/images/favicon.png " alt="logo" />
            </div>
            <ul>
                <li><a href="#home">HOME</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skill">Skill</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contect">Contect</a></li>
            </ul>
        </header>
    );
};

export default Header;