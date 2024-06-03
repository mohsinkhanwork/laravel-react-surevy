import { createBrowserRouter } from "react-router-dom";
// import App from "./App";
import Dashboad from "./views/Dashboard";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Surveys from "./views/Surveys";
import GuestLayout from "./components/GuestLayout";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboad />,   //element is the component that will be rendered
    },
    {
        path: "/surveys",
        element: <Surveys />,
    },
    {
        path: "/guest",
        element: <GuestLayout />,
        children: [
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "signup",
                element: <Signup />,
            },
        ],
    },
    {
        path: "*",
        element: <h1>404 Not Found</h1>,
    }
    ]);

export default Router;