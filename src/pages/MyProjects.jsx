import React, {useState, useEffect} from 'react';
import Grid from '../components/Grid';
import Table from '../components/Table';
import Card from '../components/cards/Card';
import Inspected from '../components/inspector/Inspected';
import { Link } from 'react-router-dom';

import { FaReact } from "react-icons/fa6";
import { FaNodeJs, FaWhatsapp, FaPython } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { SiArduino, SiFirebase, SiGooglecloud, SiJavascript, SiTensorflow, SiTailwindcss, SiCss3 } from "react-icons/si";

import FreshPlaceImage from '../assets/mockups/fresh-place.png';
import SiriusImage from '../assets/mockups/sirius-mockup.png';
import ClassifierImage from '../assets/mockups/image-classifier.png';
import NubotImage from '../assets/mockups/nubot-mockup.png';
import Aurora from '../assets/mockups/Aurora.png';
import EclipseImage from '../assets/mockups/eclipse-mockup.png';

const projectsList = [
    {
        id: 1,
        title: 'Fresh Place',
        description: 'A web application of a company distributing fresh groceries.',
        path: 'https://fresh-place.com',
        techs: [<FaReact />, <FaNodeJs />, <SiTailwindcss />],
        image: FreshPlaceImage,
    },
    {
        id: 2,
        title: 'SIRIUS',
        description: 'A muti-platform application for physics studies and simulations.',
        path: 'https://github.com/jesusckantillo/expofisica-front/tree/dev_yummy',
        techs: [<FaReact />, <FaNodeJs />, <SiJavascript />, <SiArduino />],
        image: SiriusImage,
    },
    {
        id: 3,
        title: 'AI Image Classifier',
        description: 'A Python application that uses machine learning to classify images.',
        path: 'https://github.com/YummySalamy/Image_classifier',
        techs: [<FaPython />, <SiTensorflow />],
        image: ClassifierImage,
    },
    {
        id: 4,
        title: 'Aurora',
        description: 'Coming soon.',
        techs: [<FaReact />, <SiCss3 />, <SiJavascript />],
        path: 'https://aurora-insight.vercel.app/',
        image: Aurora,
    },
    {
        id: 5,
        title: 'Eclipse',
        description: 'A web application that is designed to be a an all-in-one platform administrator.',
        techs: [<FaNodeJs />, <SiFirebase />, <SiGooglecloud />, <DiMysql />, <FaWhatsapp />],
        path: 'https://eclipse-theta.vercel.app/',
        image: EclipseImage,
    },
    {
        id: 6,
        title: 'nubot.io',
        description: 'A web application that allows users to auto-manage their companies with AI.',
        path: 'https://nubot.io',
        techs: [<FaReact />, <FaNodeJs/>,  <FaPython />, <SiFirebase />, <SiGooglecloud />, <SiTensorflow />, <SiTailwindcss />, <SiCss3 />],
        image: NubotImage,
    }
];

const MyProjects = () => {
    const isMobile = window.innerWidth < 768;
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
