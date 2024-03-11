import React from 'react';
import Grid from '../components/Grid';
import Table from '../components/Table';
import Card from '../components/cards/Card';
import { Link } from 'react-router-dom';

import { FaReact } from "react-icons/fa6";
import { FaNodeJs, FaWhatsapp, FaPython } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { SiArduino, SiFirebase, SiGooglecloud, SiJavascript, SiTensorflow, SiTailwindcss, SiCss3 } from "react-icons/si";

const projectsList = [
    {
        id: 1,
        title: 'Fresh Place',
        description: 'A web application for finding and sharing recipes.',
        path: <Link to="/projects/fresh-place">View Project</Link>,
        techs: [<FaReact />, <FaNodeJs />, <SiTailwindcss />],
    },
    {
        id: 2,
        title: 'SIRIUS',
        description: 'A muti-platform application for physics studies and simulations.',
        path: <Link to="/projects/sirius">View Project</Link>,
        techs: [<FaReact />, <FaNodeJs />, <SiJavascript />, <SiArduino />],
    },
    {
        id: 3,
        title: 'AI Image Classifier',
        description: 'A Python application that uses machine learning to classify images.',
        path: <Link to="/projects/twilight">View Project</Link>,
        techs: [<FaPython />, <SiTensorflow />],
    },
    {
        id: 4,
        title: 'Aurora',
        description: 'Coming soon.',
        techs: [<FaNodeJs />, <SiFirebase />, <SiGooglecloud />, <DiMysql />, <FaWhatsapp />],
    },
    {
        id: 5,
        title: 'Eclipse',
        description: 'Coming soon.',
        techs: [<FaReact />, <SiCss3 />, <SiJavascript />],
    },
    {
        id: 6,
        title: 'nubot.io',
        description: 'A web application that allows users to auto-manage their companies with AI.',
        path: <Link to="/projects/nubot">View Project</Link>,
        techs: [<FaReact />, <FaNodeJs/>,  <FaPython />, <SiFirebase />, <SiGooglecloud />, <SiTensorflow />, <SiTailwindcss />, <SiCss3 />],
    }
];

const MyProjects = () => {
    const isMobile = window.innerWidth < 768;

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
                        buttonAction={project.path}
                        techs={project.techs}
                    />
                ))}
            </Grid>
        </div>
    );
};

export default MyProjects;
