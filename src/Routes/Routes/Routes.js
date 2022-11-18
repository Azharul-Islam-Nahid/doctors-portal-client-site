import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import Navbar from "../../Shared/Navbar/Navbar";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashboardLayout from "../../Layouts/DashboardLayout";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import MyAppointment from "../../Pages/Dashboard/Dashboard/MyAppointment/MyAppointment";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "../PrivateRoute/AdminRoute/AdminRoute";

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
                path: '/signup',
                element: <SignUp></SignUp>
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
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>

            },
            {
                path: 'dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>

            }
        ]
    }
])

export default router;