"use client";

import Image from "next/image";

export default function LoginPage() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden text-white">
            {/* Diagonal background */}
            <div className="absolute inset-0 bg-white clip-diagonal" />

            {/* Center content */}
            <div className="relative z-10 flex flex-col items-center text-center translate-y-24 md:translate-y-10 scale-[1.15] sm:scale-[1.1] md:scale-[1.15]">

                {/* Orbit area */}
                <div className="relative flex items-center justify-center w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">

                    {/* White circle with stacked star */}
                    <div className="bg-white rounded-full mt-20 relative w-52 h-52 sm:w-60 sm:h-60 md:w-72 md:h-72 flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0">
                            {/* Shadow layers */}
                            <div className="absolute inset-0 rotate-[30deg] scale-[2.6] opacity-40">
                                <Image src="/sey-logo.svg" alt="SEY COOP logo" width={900} height={900} priority />
                            </div>
                            <div className="absolute inset-0 rotate-[20deg] scale-[2.6] opacity-60">
                                <Image src="/sey-logo.svg" alt="SEY COOP logo" width={900} height={900} priority />
                            </div>
                            <div className="absolute inset-0 rotate-[10deg] scale-[2.6] opacity-70">
                                <Image src="/sey-logo.svg" alt="SEY COOP logo" width={900} height={900} priority />
                            </div>
                            {/* Main star */}
                            <div className="absolute inset-0">
                                <Image
                                    className="scale-[2.6]"
                                    src="/sey-logo.svg"
                                    alt="SEY COOP logo"
                                    width={900}
                                    height={900}
                                    priority
                                />


                                {/* Overlay Image (replaces text) */}
                                <div className="absolute inset-0 mt-4 flex items-center justify-center z-20">
                                    <Image
                                        src="/sey-text.png"
                                        alt="SEY WORLD text overlay"
                                        width={900}
                                        height={900}
                                        className="w-[70%] sm:w-[70%] md:w-[70%] h-auto object-contain"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <span style={{ fontFamily: 'var(--font-roboto-flex), sans-serif' }} className="font-roboto absolute top-0 flex items-center justify-center w-[80px] h-[30px] bg-black text-white text-xs sm:text-sm rounded-md">
                      LIFE
                    </span>
                    <span className="font-roboto absolute -left-12 sm:-left-8 md:-left-10 lg:-left-12 flex items-center justify-center w-[80px] h-[30px] bg-black text-white text-xs sm:text-sm rounded-md">
                      DIGITAL
                    </span>
                    <span className="font-roboto absolute -right-12 sm:-right-8 md:-right-10 lg:-right-12 flex items-center justify-center w-[80px] h-[30px] bg-[#d8c6e0] text-black text-xs sm:text-sm rounded-md">
                      IP
                    </span>
                    <span className="font-roboto absolute bottom-0 flex items-center justify-center w-[80px] h-[30px] bg-[#d8c6e0] text-black text-xs sm:text-sm rounded-md">
                      REAL
                    </span>
                </div>

                {/* Form */}
                <div className="mt-12 w-64 sm:w-72 md:w-80">
                    <label className="text-sm font-roboto text-white">Access</label>
                    <input
                        type="email"
                        placeholder="Email address"
                        className="font-roboto w-full p-2.5 rounded-md mt-2 text-black bg-white outline-none placeholder-gray-600"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="font-roboto w-full p-2.5 rounded-md mt-2 text-black bg-white outline-none placeholder-gray-600"
                    />
                    <button className="w-[80%] font-roboto bg-purple-800 py-2.5 mt-2 rounded-md text-white font-semibold hover:bg-purple-900 transition">
                        Enter
                    </button>

                    <div className="text-center text-xs mt-2 text-white cursor-pointer hover:underline">
                        Forgot password?
                    </div>
                </div>

                {/* Footer */}
                <div className="text-[10px] text-white">
                    <p>Contact: team@sey.world</p>
                    <p>© 2025 SEY.WORLD. All rights reserved.</p>
                </div>
            </div>
        </main>
    );
}
