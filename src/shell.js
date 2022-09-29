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

// Parent route container
// all routes to be children from this
const ContainerSection = () => {
    return (
        <div className="flex flex-grow flex-col bg-slate-100">
            <div className="flex flex-grow flex-col">
                <TempNavigation />
                <span className="p-2 text-sm">
                    <Outlet />
                </span>
            </div>
        </div>
    )
}

// TODO: move these to Object
const router = createBrowserRouter([
    {
        path: "/",
        element: <ContainerSection />,
        errorElement: <NotFound />,
        children: [
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
            },
            {
                path: "/coming-soon",
                element: <ComingSoon />,
                errorElement: <NotFound />
            }
        ]
    }
], {
    basename: "/"
});

const ApplicationShell = () => {
    return (
        <RouterProvider router={router} />
    )
};

export default ApplicationShell;