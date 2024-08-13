function Footer() {
    return (
        <div className="footer">
            <p className="footer-text">Copyright © 2024 Yagnesh Jariwala</p>
            <p className="footer-text">Version 1.1.0 | Built with React.js 14.1.4</p>
            <button className="button footer-btn" onClick={() => window.open("https://github.com/yagnesh0312", "_blank")}>GitHub</button>
        </div>
    )

}

export default Footer