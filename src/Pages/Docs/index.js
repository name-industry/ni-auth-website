import React from "react";

export default function Docs() {

    const docsViewerPath = process.env.PUBLIC_URL + "/docs-viewer/index.html";

    return (
        <div>
            <p>Docs location@{docsViewerPath}</p>

            <iframe id="inlineFrameExample"
                title="Inline Frame Example"
                width="300"
                height="200"
                src={docsViewerPath}>
            </iframe>

        </div>
    )
}