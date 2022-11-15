import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Navbar from "../../Shared/Navbar/Navbar";

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
                path: '/navbar',
                element: <Navbar></Navbar>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            }
        ]
    }
])

export default router;