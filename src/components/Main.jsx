// src/App.js

import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate,
    Outlet,
} from "react-router-dom";
import Home from "./Home.jsx";
import Education from "./Education.jsx";
import About from "./About.jsx";
import Work from "./Work.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Connect from "./Connect.jsx";
function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/about" element={<About />} />
                <Route path="/education" element={<Education />} />
                <Route path="/work" element={<Work />} />
                <Route path="/connect" element={<Connect />} />
            </Routes>
            <Footer />

        </Router>
    );
}

export default App;
