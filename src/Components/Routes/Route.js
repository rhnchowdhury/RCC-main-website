import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Homes/Home";
import Contact from "../Pages/Contacts/Contact";
import About from "../Pages/Abouts/About";
import ServicesAll from "../Pages/Services/ServicesAll";
// import WorkAll from "../Pages/Works/WorkAll";
import Team from "../Pages/Teams/Team";
import Motion from "../Pages/Services/Content/Motion";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/service',
                element: <ServicesAll></ServicesAll>
            },
            {
                path: '/team',
                element: <Team></Team>
            },
            // {
            //     path: '/work',
            //     element: <WorkAll></WorkAll>
            // },
            {
                path: '/portfolio',
                element: <Motion></Motion>
            }
        ]
    }
]);
export default router
    ;