import React, { useState, useEffect } from 'react'
import connectDb from '../middleware/mongoose';
import Link from 'next/link'
import User from '../models/User';
var jwt = require('jsonwebtoken');
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from 'next/router';


export default function activate() {

    const Router = useRouter()
    const [password, setPass] = useState("")
    const [cpass, setCpass] = useState("")
    
    const handleEvent = async (e) => {
        
        let data = await jwt.decode(Router.query.token, {
            "complete": true,
            "json": process.env.JWT_SECRET,
        });
        let email = data.payload.email;

        console.log(email)

        e.preventDefault();

        if (password == cpass) {
            let formBody = { email, password, sendMail: false }

            let response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/forgot`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formBody)
            })

            let res = await response.json()

            if (response.status == 200) {
                setTimeout(() => {
                    Router.push("/login")
                }, 1500)

                toast.success("Password Changed Successfully!", {
                    position: "top-left",
                    autoClose: 1500
                })
                console.log(res)
            }
        }

        else {
            toast.error("Passwords do not match!", {
                position: "top-left",
                autoClose: 1500
            })
        }
    }

    const handleChange = (e) => {
        if (e.target.name == "password") {
            setPass(e.target.value)
        }
        if (e.target.name == "cpass") {
            setCpass(e.target.value)
        }
    }

    return (
        <>
            <div className="flex min-h-screen items-center justify-center pb-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <img
                            className="mx-auto h-12 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=pink&shade=600"
                            alt="Your Company" />
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                            Reset Your Password
                        </h2>
                        {/* <p className="mt-2 text-center text-sm text-gray-600">
                            Your email is 
                        </p> */}
                    </div>
                    <form className="mt-8" method="POST">
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-pink-500 focus:outline-none focus:ring-pink-500 sm:text-sm"
                                    placeholder="Password"
                                    onChange={handleChange} />
                            </div>
                            <div>
                                <label htmlFor="cpass" className="sr-only">
                                    Confirm Password
                                </label>
                                <input
                                    id="cpass"
                                    name="cpass"
                                    type="password"
                                    autoComplete="password"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-pink-500 focus:outline-none focus:ring-pink-500 sm:text-sm"
                                    placeholder="Confirm Password"
                                    onChange={handleChange} />
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="group relative flex w-full justify-center rounded-md border border-transparent bg-pink-600 py-2 px-4 text-sm font-medium text-white hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 mt-4" onClick={handleEvent}>
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                </span>
                                Set Password
                            </button>
                        </div>
                    </form>
                    <ToastContainer />
                    {password !== "" && password === cpass &&
                        <div className="text-green-500 text-center mt-2">Passwords Match</div>
                    }
                    {password !== cpass &&
                        <div className="text-red-500 text-center mt-2">Passwords Not Match</div>
                    }
                </div>
            </div>
        </>
    )
}
