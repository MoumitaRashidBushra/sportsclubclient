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
]);
export default router;