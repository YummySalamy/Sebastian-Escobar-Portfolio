import { FaReact } from "react-icons/fa6";
import { FaNodeJs, FaWhatsapp, FaPython } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { SiArduino, SiFirebase, SiGooglecloud, SiJavascript, SiTensorflow, SiTailwindcss, SiCss3 } from "react-icons/si";

import FreshPlaceImage from '../../assets/mockups/fresh-place.png';
import SiriusImage from '../../assets/mockups/sirius-mockup.png';
import ClassifierImage from '../../assets/mockups/image-classifier.png';
import NubotImage from '../../assets/mockups/nubot-mockup.png';
import Aurora from '../../assets/mockups/Aurora.png';
import EclipseImage from '../../assets/mockups/eclipse-mockup.png';
import RetroModernMaketPlaceImage from '../../assets/mockups/retromodern-marketplace-mockup.png';
import DataPathImage from '../../assets/mockups/datapath-e-learning-mockup1.png';
import JewerlyShopImage from '../../assets/mockups/jewerly-shop-mockup.jpg';

const projects = [
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
        title: 'nubot.io',
        description: 'A web application that allows users to auto-manage their companies with AI.',
        path: 'https://nubot.io',
        techs: [<FaReact />, <FaNodeJs/>,  <FaPython />, <SiFirebase />, <SiGooglecloud />, <SiTensorflow />, <SiTailwindcss />, <SiCss3 />],
        image: NubotImage,
    },
    {
        id: 5,
        title: 'RetroModern Marketplace',
        description: 'A web applicaction that allows users to buy and sell retro and modern items.',
        path: 'https://retromodern-market-place.vercel.app/',
        techs: [<FaReact />, <SiCss3 />, <SiJavascript />],
        image: RetroModernMaketPlaceImage,
    },
    {
        id: 6,
        title: 'Datapath e-learning',
        description: 'A web application that showcases various tech courses.',
        path: 'https://datapath-e-learning-tests.vercel.app/',
        techs: [<FaReact />, <SiCss3 />, <SiJavascript />, <SiFirebase />, <SiGooglecloud />, <DiMysql />],
        image: DataPathImage,
    },
    {
        id: 7,
        title: 'Jewerly Shop Landing Page',
        description: 'A minimalistic landing page for a jewerly shop.',
        path: 'https://jewerly-shop-landing.vercel.app/',
        techs: [<FaReact />, <SiCss3 />, <SiJavascript />],
        image: JewerlyShopImage,
    },
    {
        id: 8,
        title: 'Aurora',
        description: 'Coming soon.',
        techs: [<FaReact />, <SiCss3 />, <SiJavascript />],
        path: 'https://aurora-insight.vercel.app/',
        image: Aurora,
    },
    {
        id: 9,
        title: 'Eclipse',
        description: 'A web application that is designed to be a an all-in-one platform administrator.',
        techs: [<FaNodeJs />, <SiFirebase />, <SiGooglecloud />, <DiMysql />, <FaWhatsapp />],
        path: 'https://eclipse-theta.vercel.app/',
        image: EclipseImage,
    },
];

export default projects;