"use client";

import Image from "next/image";
import React from "react";
import Orbit from "@/app/login/components/Orbit";

export default function LoginPage() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState(false);

    const handleLogin = (e) => {
        e.preventDefault();

        setError(true);
        console.log("Logging in with:", { email, password });
    };

    return (
        <main className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden text-white pb-10">
            <div className="absolute inset-0 bg-white clip-diagonal" />

            <div className="relative z-10 flex flex-col items-center text-center translate-y-10 md:translate-y-4 scale-[1.1] sm:scale-[1.1] md:scale-[1.15] max-sm:translate-y-10 max-sm:scale-[0.85] w-full">
                <Orbit error={error} />

                <div className="h-full -mt-10 md:mt-0 lg:mb-12 w-full flex justify-center">
                    <form
                        onSubmit={handleLogin}
                        className="w-[75vw] max-w-[20rem] flex flex-col items-center"
                    >
                        <label className="text-sm font-roboto text-white self-center">
                            Access
                        </label>

                        <input
                            type="text"
                            placeholder="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`font-roboto w-full p-2 rounded-md mt-2 text-black outline-none placeholder-gray-600 transition ${
                                error
                                    ? "bg-red-800 border placeholder-red-300"
                                    : "bg-white border border-transparent"
                            }`}
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={`font-roboto w-full p-2 rounded-md mt-2 text-black outline-none placeholder-gray-600 transition ${
                                error
                                    ? "bg-red-800 border placeholder-red-300"
                                    : "bg-white border border-transparent"
                            }`}
                        />

                        <button
                            type="submit"
                            className="w-[80%] font-roboto duration-300 hover:cursor-pointer border-white border-[0.5px] bg-purple-800 py-2 mt-1.5 rounded-md text-white font-semibold hover:bg-purple-950 transition"
                        >
                            Sign In
                        </button>

                        <div className="font-roboto text-center text-xs mt-2 text-white cursor-pointer hover:underline">
                            Forgot password?
                        </div>

                        <div className="font-roboto text-[12px] text-white mt-3 mb-3 text-center">
                            <p>Contact: access@sey.world</p>
                            <p>© 2025 SEY.WORLD. All rights reserved.</p>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}
