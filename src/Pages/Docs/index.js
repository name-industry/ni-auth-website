import React from "react";

// User Object State
import { useAtom } from "jotai";
import { UserDataAtom } from "../../State/User";

const NotAuthenticated = () => {
    return (
        <div className="flex flex-col flex-grow items-center justify-center p-2">
            <p className="text-sm bg-slate-50 p-2">Please Authenticate</p>
        </div>
    )
}

const DocViewer = () => {
    const docsViewerPath = process.env.PUBLIC_URL + "/docs-viewer/index.html";
    return (
        <div className="flex flex-grow relative w-full h-full overflow-hidden">
            <div className="flex flex-grow relative">
                <iframe
                    className="absolute overflow-hidden w-full h-full border-0 top-0 left-0"
                    title="Public API for NI.A.M."
                    src={docsViewerPath}>
                </iframe>
            </div>

        </div>
    )
}

export default function Docs() {
    const [UserData] = useAtom(UserDataAtom);
    return UserData.isLoggedIn === false ? <NotAuthenticated /> : <DocViewer />
}