import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from 'next/router'
const jwt = require("jsonwebtoken");

const forgot = () => {
    const [email, setEmail] = useState("")
    const Router = useRouter()

    const sendEmail = async (e) => {
        e.preventDefault();

        let data = { email, sendMail: true }

        let response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/forgot`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        let res = await response.json()
        console.log(res)

        // console.log(btoa(JSON.parse(atob(res.token.split(".")[1])).gmail))

        if(response.status==200){
            toast.success("Instuctions sent to your email.", {
            position: 'top-left',
            autoClose: 1500
        })
        }

        if(res.error){
            toast.error(res.error, {
                position: 'top-left',
                autoClose: 1500
            })
        }
    }


    return (
        <div className="flex min-h-screen items-center justify-center pb-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div>
                    <img
                        className="mx-auto h-12 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=pink&shade=600"
                        alt="Your Company" />
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                        Forgot your password ?
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Don't Worry! We will send you the instructions to reset your password on the email registered with your account.
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
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="group relative flex w-full justify-center rounded-md border border-transparent bg-pink-600 py-2 px-4 text-sm font-medium text-white hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2" onClick={sendEmail}>
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            </span>
                            Send reset link
                        </button>
                    </div>
                </form>
                <ToastContainer />
            </div>
        </div>

    )
}

export default forgot
