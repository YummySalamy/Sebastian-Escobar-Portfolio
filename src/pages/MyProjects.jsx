import React, {useState, useEffect} from 'react';
import Grid from '../components/Grid';
import Table from '../components/Table';
import Card from '../components/cards/Card';
import Inspected from '../components/inspector/Inspected';
import { Link } from 'react-router-dom';
import projects from './projects-extra/ProjectsList';

const MyProjects = () => {
    const isMobile = window.innerWidth < 768;
    const [projectsList] = useState(projects);
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <div>
            <h1>Featured Projects</h1>
            <Grid columns={isMobile ? 1 : 3}>
                { projectsList.map((project, index) => (
                    <Card
                        key={index}
                        title={project.title}
                        description={project.description}
                        path={project.path}
                        button={project.path ? true : false}
                        buttonAction={() => setSelectedProject(project)}
                        techs={project.techs}
                    />
                ))}
            </Grid>
            { selectedProject && 
                <Inspected project={selectedProject} setSelectedProject={setSelectedProject} />
            }
        </div>
    );
};

export default MyProjects;
