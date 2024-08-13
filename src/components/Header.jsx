
import {
    useLocation,
    Link,
} from "react-router-dom";
import { useState } from "react";
import Switch from "react-switch";
function Header() {
    let location = useLocation();
    const [checked, setChecked] = useState(true);
    function handleToggle(checked) {
        if(!checked){
                     
            document.documentElement.style.setProperty("--white-color", "#000000");
            document.documentElement.style.setProperty("--dark-color", "#ffffff");
            document.documentElement.style.setProperty("--button-color", "#ebebeb");
            document.documentElement.style.setProperty("--white-light-color", "#000000bb");
            document.documentElement.style.setProperty("--mid-color", "#ffffff");
            // document.documentElement.style.setProperty("--dark-background-url", "url('./assets/ligh-background.png')");
            document.getElementsByClassName("main")[0].classList.add("light-bg");

            // document.getElementsByClassName("main")[0].style.backgroundImage = "./assets/ligh-backgournd.png";
        }
        else{


            document.documentElement.style.setProperty("--white-color", "#fff");
            document.documentElement.style.setProperty("--dark-color", "#000000");  
            document.documentElement.style.setProperty("--button-color", "#252525");
            document.documentElement.style.setProperty("--white-light-color", "#ffffffbb");
            document.documentElement.style.setProperty("--mid-color", "#04040471");
            // document.documentElement.style.setProperty("--dark-background-url", "url('./assets/background.png')");
            document.getElementsByClassName("main")[0].classList.remove("light-bg");
            // document.getElementsByClassName("main")[0].style.backgroundImage = "url('./assets/background.png')";
        }
    }
    return (
        <nav className="header">
            <h1 className="logo">Yagnesh Jariwala</h1>
            <ul className="menu">
                <li><Link className={`menu-item ${location.pathname === "/" ? "active" : ""}`} to="/">Home</Link></li>
                <li><Link className={`menu-item ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link></li>
                <li><Link className={`menu-item ${location.pathname === "/education" ? "active" : ""}`} to="/education">Education</Link></li>
                <li><Link className={`menu-item ${location.pathname === "/work" ? "active" : ""}`} to="/work">Work</Link></li>
                <li><Link className={`menu-item ${location.pathname === "/connect" ? "active" : ""}`} to="/connect">Connect</Link></li>
            </ul>
            <div style={{ display: "flex", justifyContent: "end", alignItems: "center", gap: "10px" }}>
                <p>Dark Mode</p>
                <Switch className="switch" uncheckedIcon={false} checkedIcon={false} offColor="#a1a1a1" onColor="#1f1f1f" checked={checked} onChange={(v) => { 
                    handleToggle(v);
                    setChecked(v)
                 }} />
                <a className="button dwdcv" href="https://drive.google.com/file/d/1kPw3BpQb6xFRbwwScfKskwcuuESXUbli/view?usp=drive_link">Download CV</a>
            </div>
        </nav>
    )

}

export default Header