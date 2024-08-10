import React from "react";

const Inspected = ({ project, setSelectedProject }) => {
    return (
        <div className="inspected-container">
            <h1>{project.title}</h1>
            <div className="images-container">
                {project.image && <img src={project.image} alt={project.title} />}
                {project.second_image && <img className="second_image" src={project.second_image} alt={project.title} />}
            </div>
            <p>{project.description}</p>
            <div className="techs-container">
                Techs used:
                {project.techs.map((tech, index) => (
                    <span className="tech" key={index}>{tech}</span>
                ))}
            </div>
            <div className="buttons-container">
                <button onClick={() => window.open(project.path, '_blank')}>View Project</button>
                <button onClick={() => setSelectedProject(null)}>
                    Close
                </button>
            </div>
        </div>
    );
}

export default Inspected;