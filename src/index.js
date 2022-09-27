import React, { Suspense } from "react";
import { createRoot } from 'react-dom/client';

// Fonts supported 300, 400, 500, 600, 700, 800
// Include only required.
import "@fontsource/open-sans"; // 400
// import "@fontsource/open-sans/600.css";
// import "@fontsource/open-sans/700.css";
// import "@fontsource/open-sans/800.css";

import "./index.css";

// Split for Jotai to allow async state calls
// or simple preloading
const ApplicationShell = React.lazy(() => import("./shell"));
const MasterPreloadComponent = () => <div></div>;

const container = document.getElementById('react-root');
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <Suspense fallback={<MasterPreloadComponent />}>
            <ApplicationShell />
        </Suspense>
    </React.StrictMode>
);