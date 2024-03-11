import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="hero-left-column">
                <h1>Full-Stack Developer & AI Researcher</h1>
                <p>Passionate and enthusiastic technologist with a deep love for both software and hardware. Highly skilled in coding and developing intelligent models.</p>
                <Link to="/contact">
                    <button>
                        Hire
                    </button>
                </Link>
            </div>
            <div className="hero-right-column">
                <img src="src/assets/my-picture.jpeg" alt="profile" />
            </div>
        </div>
    );
}

export default Hero;