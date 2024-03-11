import { lazy } from "react";
import AboutMe from "../pages/AboutMe";


//const AboutMe = lazy(() => import('../pages/AboutMe'));
//const AboutMe = lazy(() => import('../pages/AboutMe'));

const Router = [
    {
        path: '/',
        element: <AboutMe />
    }
];

export default Router;