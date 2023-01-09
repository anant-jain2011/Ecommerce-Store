import React, { useState } from 'react'
import Link from 'next/link'
import User from '../models/User';
var jwt = require('jsonwebtoken');
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from 'next/router';

export default function Login() {

    const [email, setEmail] = useState("")
    const [password, setPass] = useState("")
    const Router = useRouter()

    const handleEvent = async (e) => {
        e.preventDefault();
        let formBody = { email, password }

        let response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/login`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formBody)
        })

        let res = await response.json()

        if (response.status == 200) {
            localStorage.setItem("token", res.token)

            setTimeout(() => {
                Router.push("/")
            }, 1500)

            toast.success("Successfully logged in!", {
                position: "top-left",
                autoClose: 1500
            })

            console.log(res)
        }

        if (response.status == 400) {
            toast.error("Invalid Credentials!", {
                position: "top-left",
                autoClose: 1500
            })
        }
    }

    const handleChange = (e) => {
        if (e.target.name == "email") {
            setEmail(e.target.value)
        }
        if (e.target.name == "password") {
            setPass(e.target.value)
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
                            Login to your account
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            Or{' '}
                            <Link href="/signup"><a className="font-medium text-pink-600 hover:text-pink-500">
                                Sign Up
                            </a></Link>
                        </p>
                    </div>
                    <form className="mt-8 space-y-6" method="POST">
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-pink-500 focus:outline-none focus:ring-pink-500 sm:text-sm"
                                    placeholder="Email address"
                                    onChange={handleChange} />
                            </div>
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
                                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-pink-500 focus:outline-none focus:ring-pink-500 sm:text-sm"
                                    placeholder="Password"
                                    onChange={handleChange} />
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-pink-600 focus:ring-pink-500" />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>
                            <div className="text-sm">
                                <Link href= {"/forgot"}><a className="font-medium text-pink-600 hover:text-pink-500">
                                    Forgot your password?
                                </a></Link>
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="group relative flex w-full justify-center rounded-md border border-transparent bg-pink-600 py-2 px-4 text-sm font-medium text-white hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2" onClick={handleEvent}>
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                </span>
                                Sign in
                            </button>
                        </div>
                    </form>
                    <ToastContainer />
                </div>
            </div>
        </>
    )
}