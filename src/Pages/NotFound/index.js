import React from "react";
import { useRouteError } from "react-router-dom";

export default function NotFound() {

    const error = useRouteError()

    return (
        <div>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}