import React from "react";
import MyCv from "../assets/MyCV.pdf";

import { FaDownload } from "react-icons/fa6";

const Resume = () => {
    return (
        <div className="resume-container">
            <h1>Resume</h1>
            <div className="resume-buttons">
                <button onClick={() => window.open(MyCv)}>
                    View Resume / CV
                </button>
                <a href={MyCv} download="Sebastian Escobar Resume.pdf">
                    <button>
                        <FaDownload />
                    </button>
                </a>
            </div>
        </div>
    );
}

export default Resume;