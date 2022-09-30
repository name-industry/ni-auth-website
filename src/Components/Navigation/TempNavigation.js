import React from "react";
import { NavLink, Link } from 'react-router-dom';
import { MenuIcon, BxLockAltIcon } from "../Icons";

export default function TempNavigation() {

    let defaultLinkStyle = "flex flex-row items-center text-sm text-slate-800 pl-2 pr-2 bg-slate-50"
    let activeClassName = "flex flex-row items-center text-sm text-slate-50 pl-2 pr-2 bg-slate-600";

    return (
        <div className="flex flex-row bg-slate-50">
            <div className="flex flex-row justify-start flex-grow">
                <div
                    className="flex h-9 w-9 items-center justify-center p-2 bg-slate-50"
                    onClick={(e) => {
                        e.preventDefault();
                    }}
                >
                    <MenuIcon className="w-6" />
                </div>
                <Link
                    to={"/"}>
                    <div
                        className="flex h-9 items-center justify-center p-2 bg-cyan-400"
                    >
                        <p className="text-sm text-slate-50">N.I.A.M.</p>
                    </div>
                </Link>
            </div>
            <div className="flex flex-row bg-slate-50">
                <NavLink
                    to={"/get-started"}
                    className={({ isActive }) =>
                        isActive ? activeClassName : defaultLinkStyle
                    }>
                    get started
                </NavLink>
                <NavLink
                    to={"/docs"}
                    className={({ isActive }) =>
                        isActive ? activeClassName : defaultLinkStyle
                    }>
                    docs
                </NavLink>
                <NavLink
                    to={"/register"}
                    className={({ isActive }) =>
                        isActive ? activeClassName : defaultLinkStyle
                    }>
                    register
                </NavLink>
                <div
                    className="flex h-9 w-9 items-center justify-center p-2 cursor-pointer bg-slate-100"
                    onClick={(e) => {
                        e.preventDefault();
                    }}
                >
                    <BxLockAltIcon className="w-6" />
                </div>
            </div>
        </div>
    )
}