import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Page/Home/Home/Home";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import InstructorsPage from "../Page/InstructorsPage/InstructorsPage";
import ClassesPage from "../Page/ClassesPage/ClassesPage";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";
import Dashboard from "../Layout/Dashboard/Dashboard";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import ManageClasses from "../Layout/Dashboard/ManageClasses/ManageClasses";
import ManageUsers from "../Layout/Dashboard/ManageUsers/ManageUsers";
//import AddAClass from "../Layout/Dashboard/AddAClass/AddAClass";
import MyClasses from "../Layout/Dashboard/MyClasses/MyClasses";
import AddAClass from "../Layout/Dashboard/AddAClass/AddAClass";
import MySelectedClasses from "../Layout/Dashboard/MySelectedClasses/MySelectedClasses";
import MyEnrolledClasses from "../Layout/Dashboard/MyEnrolledClasses/MyEnrolledClasses";
import Feedback from "../Layout/Dashboard/ManageClasses/Feedback/Feedback";
import Payment from "../Layout/Dashboard/Payment/Payment";
import PaymentHistory from "../Layout/Dashboard/PaymentHistory/PaymentHistory";
import UpdateInfo from "../Layout/Dashboard/MyClasses/UpdateInfo/UpdateInfo";
import AdminRoutes from "./AdminRoutes/AdminRoutes";
import InstructorRoutes from "./InstructorRoutes/InstructorRoutes";
import StudentRoutes from "./StudentRoutes/StudentRoutes";
import Dashhome from "../Layout/Dashboard/Dashhome/Dashhome";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "instructors",
                element: <InstructorsPage></InstructorsPage>,
            },
            {
                path: "classes",
                element: <ClassesPage></ClassesPage>,
            },
            {
                path: "login",
                element: <Login></Login>,
            },
            {
                path: "register",
                element: <Register></Register>,
            },

        ],

    },
    {
        path: "dashboard",
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children: [
            {
                path: "/dashboard",
                element: <Dashhome></Dashhome>,
            },
            //Admin Routes
            {
                path: "manageClasses",
                element: <AdminRoutes><ManageClasses></ManageClasses></AdminRoutes>,
            },
            {
                path: "/dashboard/feedback/:id",
                element: <Feedback></Feedback>,
                loader: ({ params }) => fetch(`https://sports-club-server.vercel.app/feedback/${params.id}`)
            },
            {
                path: "manageUsers",
                element: <AdminRoutes><ManageUsers></ManageUsers></AdminRoutes>,
            },

            //Instructor Route
            {
                path: "addAClass",
                element: <InstructorRoutes><AddAClass></AddAClass></InstructorRoutes>,
            },
            {
                path: "myClasses",
                element: <InstructorRoutes><MyClasses></MyClasses></InstructorRoutes>,
            },
            {
                path: "/dashboard/updateinfo/:id",
                element: <UpdateInfo></UpdateInfo>,
                loader: ({ params }) => fetch(`https://sports-club-server.vercel.app/updateinfo/${params.id}`)
            },

            //Student routes
            {
                path: "mySelClasses",
                element: <StudentRoutes><MySelectedClasses></MySelectedClasses></StudentRoutes>,
            },

            {
                path: "/dashboard/payment/:id",
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://sports-club-server.vercel.app/payment/${params.id}`)
            },
            {
                path: "myEnrClasses",
                element: <StudentRoutes><MyEnrolledClasses></MyEnrolledClasses></StudentRoutes>,
            },
            {
                path: "paymentHistory",
                element: <StudentRoutes><PaymentHistory></PaymentHistory></StudentRoutes>,
            },
        ]
    },

]);
export default router;