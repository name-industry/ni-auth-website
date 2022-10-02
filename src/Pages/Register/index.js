import React from "react";
import { useForm } from 'react-hook-form';

// User Object State
import { useAtom } from "jotai";
import { UserDataAtom } from "../../State/User";

// Temp css for form
import "./index.css";

const RegisterForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (formData) => {
        // Capture and vet formData
        console.log("onSubmit", formData, errors);
    };

    return (
        <form id="form-pre-register" className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="flex flex-col flex-grow p-1">
                <input id="emailAddress" type="text" placeholder="email address" {...register("emailAddress", { required: true, max: 0 })} />
                <label htmlFor="emailAddress">email address</label>
                <input id="password" type="password" placeholder="password" {...register("password", { required: true })} />
                <label htmlFor="password">password</label>
            </fieldset>
            <fieldset className="flex flex-row flex-grow pt-2 pl-2 pr-2 pb-3">
                <input id="register-agreement" type="checkbox" {...register("register-agreement", {})} />
                <label htmlFor="register-agreement">Register and get notified when this service launches</label>
            </fieldset>
            <div className="flex flex-grow justify-center p-3">
                <input className="bg-white hover:bg-gray-100 text-gray-800 py-1 px-2 border border-gray-200 rounded shadow-sm" type="submit" />
            </div>
        </form >
    );
}

export default function Register() {

    const [UserData] = useAtom(UserDataAtom);

    React.useEffect(() => {
        console.log("Register page", UserData);
    }, [UserData]);

    return (
        <div className="flex flex-col flex-grow justify-center items-center">

            {/* form container*/}
            <div className="w-96">
                <div className="p-2">
                    <p className="">Register</p>
                </div>
                <RegisterForm />
            </div>

        </div>
    )
}