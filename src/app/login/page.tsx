"use client";

import Image from "next/image";
import React from "react";

/* ---------- OrbitItem (label only) ---------- */
function OrbitItem({ label, pos, bg = "bg-black", text = "text-white" }) {
    return (
        <div className={`absolute ${pos} z-30`}>
            <div
                className={`relative ${bg} ${text} font-roboto text-[10px] sm:text-xs md:text-sm rounded-md w-[80px] h-[30px] flex items-center justify-center`}
            >
                {label}
                <div
                    className={`absolute inset-0 ${bg} rounded-md rotate-[8deg] scale-105 -z-10`}
                />
                <div
                    className={`absolute inset-0 ${bg} rounded-md rotate-[-8deg] scale-105 -z-20`}
                />
            </div>
        </div>
    );
}

/* ---------- Orbit (center + labels) ---------- */
function Orbit({ error }) {
    return (
        <div className="relative w-[70vw] max-w-[24rem] aspect-square sm:w-80 md:w-96 max-sm:w-[65vw] md:-translate-y-6 lg:translate-y-16">
            {/* center circle + star */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] aspect-square rounded-full bg-white overflow-hidden z-20">
                <div className="absolute inset-0">
                    {[30, 20, 10].map((deg, i) => (
                        <div
                            key={i}
                            className="absolute inset-0 opacity-50"
                            style={{ transform: `rotate(${deg}deg) scale(2.6)` }}
                        >
                            <Image
                                src="/sey-logo.svg"
                                alt="shadow"
                                width={900}
                                height={900}
                                priority
                            />
                        </div>
                    ))}

                    <div
                        className="absolute inset-0 z-20"
                        style={{ transform: "scale(2.6)" }}
                    >
                        <Image
                            src="/sey-logo.svg"
                            alt="SEY COOP logo"
                            width={900}
                            height={900}
                            priority
                        />
                    </div>

                    <div className="absolute inset-0 mt-[4%] flex items-center justify-center z-30">
                        <Image
                            src="/sey-text.png"
                            alt="SEY WORLD text overlay"
                            width={900}
                            height={900}
                            className="w-[70%] h-auto object-contain"
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* labels */}
            <OrbitItem
                label={error ? "NO ACCESS" : "LIFE"}
                pos="top-[10%] left-1/2 -translate-x-1/2"
                bg={error ? "bg-red-800" : "bg-black"}
                text="text-white"
            />
            <OrbitItem
                label="DIGITAL"
                pos="top-[50%] left-[-12%]"
                bg="bg-black"
                text="text-white"
            />
            <OrbitItem
                label="IP"
                pos="top-[50%] right-[-20%]"
                bg="bg-white"
                text="text-black"
            />
            <OrbitItem
                label="REAL"
                pos="bottom-[-5%] md:bottom-[5%] left-1/2 -translate-x-1/2"
                bg="bg-white"
                text="text-black"
            />
        </div>
    );
}
/* ---------- Main page ---------- */
export default function LoginPage() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState(false);

    const handleLogin = (e) => {
        e.preventDefault();

        setError(true)

        console.log("Logging in with:", { email, password });
    };

    return (
        <main className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden text-white">
            <div className="absolute inset-0 bg-white clip-diagonal" />

            <div className="relative z-10 flex flex-col items-center text-center translate-y-20 md:translate-y-10 scale-[1.1] sm:scale-[1.1] md:scale-[1.15] max-sm:translate-y-14 max-sm:scale-[0.85] w-full">
                <Orbit error={error} />

                <div className="h-full md:mt-4 w-full flex justify-center">
                    <form
                        onSubmit={handleLogin}
                        className="mt-12 w-[75vw] max-w-[20rem] flex flex-col items-center"
                    >
                        <label className="text-sm font-roboto text-white self-center">
                            Access
                        </label>

                        <input
                            type="text"
                            placeholder="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`font-roboto w-full p-2.5 rounded-md mt-2 text-black outline-none placeholder-gray-600 transition ${
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
                            className={`font-roboto w-full p-2.5 rounded-md mt-2 text-black outline-none placeholder-gray-600 transition ${
                                error
                                    ? "bg-red-800 border  placeholder-red-300"
                                    : "bg-white border border-transparent"
                            }`}
                        />

                        <button
                            type="submit"
                            className="w-[80%] font-roboto duration-300 hover:cursor-pointer bg-purple-800 py-2.5 mt-2 rounded-md text-white font-semibold hover:bg-purple-900 transition"
                        >
                            Enter
                        </button>

                        <div className="font-roboto text-center text-xs mt-2 text-white cursor-pointer hover:underline">
                            Forgot password?
                        </div>

                        <div className="font-roboto text-[12px] text-white mt-6 text-center">
                            <p>Contact: team@sey.world</p>
                            <p>© 2025 SEY.WORLD. All rights reserved.</p>
                        </div>
                    </form>
                </div>
            </div>

        </main>
    );
}
