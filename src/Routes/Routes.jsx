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
                path: "manageClasses",
                element: <ManageClasses></ManageClasses>,
            },
            {
                path: "/dashboard/feedback/:id",
                element: <Feedback></Feedback>,
                loader: ({ params }) => fetch(`http://localhost:5000/feedback/${params.id}`)
            },
            {
                path: "manageUsers",
                element: <ManageUsers></ManageUsers>,
            },
            {
                path: "addAClass",
                element: <AddAClass></AddAClass>,
            },
            {
                path: "myClasses",
                element: <MyClasses></MyClasses>,
            },
            {
                path: "mySelClasses",
                element: <MySelectedClasses></MySelectedClasses>,
            },
            {
                path: "/dashboard/updateinfo/:id",
                element: <UpdateInfo></UpdateInfo>,
                loader: ({ params }) => fetch(`http://localhost:5000/updateinfo/${params.id}`)
            },
            {
                path: "/dashboard/payment/:id",
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`http://localhost:5000/payment/${params.id}`)
            },
            {
                path: "myEnrClasses",
                element: <MyEnrolledClasses></MyEnrolledClasses>,
            },
            {
                path: "paymentHistory",
                element: <PaymentHistory></PaymentHistory>,
            },
        ]
    },

]);
export default router;