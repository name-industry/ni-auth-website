import React from "react";
import { NavLink } from 'react-router-dom';

export default function TempNavigation() {

    let defaultLinkStyle = "text-xs text-slate-800 pl-2 pr-1"
    let activeClassName = "text-xs text-slate-800 pl-2 pr-1 border-b-2 border-b-cyan-400";

    return (
        <div className="flex flex-row justify-items-start items-center">
            <p className="text-sm text-slate-50 bg-slate-400 pl-2 pr-2 mr-2">N.I.A.M.</p>
            <NavLink
                to={"/"}
                className={({ isActive }) =>
                    isActive ? activeClassName : defaultLinkStyle
                } end>
                home
            </NavLink>
            <NavLink
                to={"about"}
                className={({ isActive }) =>
                    isActive ? activeClassName : defaultLinkStyle
                }>
                about</NavLink>
            <NavLink
                to={"docs"}
                className={({ isActive }) =>
                    isActive ? activeClassName : defaultLinkStyle
                }>
                docs</NavLink>
            <NavLink
                to={"contact"}
                className={({ isActive }) =>
                    isActive ? activeClassName : defaultLinkStyle
                }>
                contact</NavLink>
        </div>
    )
}