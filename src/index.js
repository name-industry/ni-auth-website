/*

    ███╗   ██╗██╗ █████╗ ███╗   ███╗
    ████╗  ██║██║██╔══██╗████╗ ████║
    ██╔██╗ ██║██║███████║██╔████╔██║
    ██║╚██╗██║██║██╔══██║██║╚██╔╝██║
    ██║ ╚████║██║██║  ██║██║ ╚═╝ ██║
    ╚═╝  ╚═══╝╚═╝╚═╝  ╚═╝╚═╝     ╚═╝
                                
    Name-Industry.Authentication.Module.
    ------------------------------------

    Website / Public API documentation
    Https://ni-auth.ca

    Author: Alexander Davis
    Last Edit. September.2022

*/

import React, { Suspense } from "react";
import { createRoot } from 'react-dom/client';
import { Provider } from "jotai";

// @fontsource default support is 300, 400, 500, 600, 700, 800 ( w/Italics )
// Include only required.
// ------------------------------------------

import "@fontsource/open-sans";

// 100 is faux thin - TailwindCSS font-black
// import "@fontsource/open-sans/300.css"; // TailwindCSS font-light
// import "@fontsource/open-sans/400.css"; // TailwindCSS font-normal
// import "@fontsource/open-sans/500.css"; // TailwindCSS font-medium 
// import "@fontsource/open-sans/600.css"; // TailwindCSS font-semibold
// import "@fontsource/open-sans/700.css"; // TailwindCSS font-bold
// import "@fontsource/open-sans/800.css"; // TailwindCSS font-extrabold
// 900 is faux black - TailwindCSS font-black

import "./index.css";

// Split for Jotai to allow async state calls
// or simple preloading
const ApplicationShell = React.lazy(() => import("./shell"));
const MasterPreloadComponent = () => <div></div>;

const container = document.getElementById('react-root');
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <Provider> {/* initial suspense here for Jotai - makes Provider ready for Async */}
            <Suspense fallback={<MasterPreloadComponent />}>
                <ApplicationShell />
            </Suspense>
        </Provider>
    </React.StrictMode>
);