/**
 * shell.js
 * 
 * Main entry for app.
 * Routes and page subsection display
 * 
 * 
 */

import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
    Outlet
} from "react-router-dom";

// Navigation ( temp )
import TempNavigation from "./Components/Navigation/TempNavigation";

// Pages
import Landing from "./Pages/Landing";
import GetStarted from "./Pages/GetStarted";
import Register from "./Pages/Register";
import Docs from "./Pages/Docs";
import NotFound from "./Pages/NotFound";
import Maintenance from "./Pages/Maintenance";
import ComingSoon from "./Pages/ComingSoon";
import Footer from "./Pages/Footer";

const showPlaceholderPages = process.env.REACT_APP_SHOW_PLACEHOLDER === "true" && process.env.NODE_ENV === "production";

const placeholderRoutes = [
    {
        path: "/",
        element: <ComingSoon />,
        errorElement: <NotFound />
    }
]

const activeRoutes = [
    {
        path: "/",
        element: <Landing />,
        errorElement: <NotFound />
    },
    {
        path: "/get-started",
        element: <GetStarted />,
        errorElement: <NotFound />
    },
    {
        path: "/register",
        element: <Register />,
        errorElement: <NotFound />
    },
    {
        path: "/docs",
        element: <Docs />,
        errorElement: <NotFound />
    },
    {
        path: "/maintenance",
        element: <Maintenance />,
        errorElement: <NotFound />
    }
];

// Parent route container
// all routes to be children from this
const ContainerSection = () => {
    if (showPlaceholderPages) {
        return (
            <div className="flex flex-grow flex-col bg-slate-100">
                <div className="flex flex-grow flex-col bg-slate-500">
                    <div className="flex flex-grow justify-center items-center bg-slate-100 p-2">
                        <Outlet />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
    return (
        <div className="flex flex-grow flex-col bg-slate-100">
            <div className="flex flex-grow flex-col">
                <TempNavigation />
                <span className="flex flex-col flex-grow p-2 text-sm">
                    <Outlet />
                </span>
            </div>
            <Footer />
        </div>
    )
}

// TODO: move these to Object
const router = createBrowserRouter([
    {
        path: "/",
        element: <ContainerSection />,
        errorElement: <NotFound />,
        children: (showPlaceholderPages) ? placeholderRoutes : activeRoutes,
    }],
    {
        basename: "/"
    });

const ApplicationShell = () => {
    return (
        <RouterProvider router={router} />
    )
};

export default ApplicationShell;