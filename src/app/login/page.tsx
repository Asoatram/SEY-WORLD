"use client";

import Image from "next/image";
import React from "react";

/*
  Tweak guide:
  - Change arcs array values (start, end, radius) below to nudge arc shape.
  - Change `ARC_Y_OFFSET` to move all arcs up/down relative to the circle.
  - Label positions are plain Tailwind absolute classes; adjust if label needs micro-shift.
*/

/* ---------- helpers ---------- */
function toRad(d) {
    return ((d - 90) * Math.PI) / 180;
}
function arcPath(cx, cy, r, startDeg, endDeg) {
    const x1 = cx + r * Math.cos(toRad(startDeg));
    const y1 = cy + r * Math.sin(toRad(startDeg));
    const x2 = cx + r * Math.cos(toRad(endDeg));
    const y2 = cy + r * Math.sin(toRad(endDeg));
    const large = Math.abs(endDeg - startDeg) > 180 ? 1 : 0;
    return `M ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2}`;
}

/* ---------- OrbitItem (label only) ---------- */
function OrbitItem({ label, pos, bg = "bg-black", text = "text-white" }) {
    return (
        <div className={`absolute ${pos} z-30`}>
            <div className={`relative ${bg} ${text} font-roboto text-[10px] sm:text-xs md:text-sm rounded-md w-[80px] h-[30px] flex items-center justify-center`}>
                {label}
                <div className={`absolute inset-0 ${bg} rounded-md rotate-[8deg] scale-105 -z-10`} />
                <div className={`absolute inset-0 ${bg} rounded-md rotate-[-8deg] scale-105 -z-20`} />
            </div>
        </div>
    );
}

/* ---------- Orbit (arcs + center + labels) ---------- */
function Orbit() {
    // tune these to adjust arc placement/length
    const arcs = [
        // digital top-left small arc
        { start: 305, end: 324, radius: 41, stroke: 2.2 },
        // ip right short arc
        { start: 78, end: 98, radius: 42.5, stroke: 2.4 },
        // real bottom arc
        { start: 198, end: 226, radius: 44, stroke: 3 },
    ];

    // nudge arcs up/down relative to circle (percent of container height)
    const ARC_Y_OFFSET = 2.5; // positive moves arcs down, negative moves up

    return (
        <div className="relative w-[70vw] max-w-[24rem] aspect-square sm:w-80 md:w-96 max-sm:w-[65vw] md:-translate-y-6 lg:translate-y-16">
            {/* arcs layer - z-10 so they sit under circle (z-20) and labels (z-30) */}
            <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-10"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid meet"
                style={{ transform: `translateY(${ARC_Y_OFFSET}%)` }}
            >
                {arcs.map((a, i) => (
                    <path
                        key={i}
                        d={arcPath(50, 50, a.radius, a.start, a.end)}
                        stroke="white"
                        strokeWidth={a.stroke}
                        strokeLinecap="round"
                        fill="none"
                    />
                ))}
            </svg>

            {/* center circle + star (z-20) */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] aspect-square rounded-full bg-white overflow-hidden z-20">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 opacity-40" style={{ transform: "rotate(30deg) scale(2.6)" }}>
                        <Image src="/sey-logo.svg" alt="shadow1" width={900} height={900} priority />
                    </div>
                    <div className="absolute inset-0 opacity-50" style={{ transform: "rotate(20deg) scale(2.6)" }}>
                        <Image src="/sey-logo.svg" alt="shadow2" width={900} height={900} priority />
                    </div>
                    <div className="absolute inset-0 opacity-60" style={{ transform: "rotate(10deg) scale(2.6)" }}>
                        <Image src="/sey-logo.svg" alt="shadow3" width={900} height={900} priority />
                    </div>

                    <div className="absolute inset-0 z-20" style={{ transform: "scale(2.6)" }}>
                        <Image src="/sey-logo.svg" alt="SEY COOP logo" width={900} height={900} priority />
                    </div>

                    <div className="absolute inset-0 mt-[4%] flex items-center justify-center z-30">
                        <Image src="/sey-text.png" alt="SEY WORLD text overlay" width={900} height={900} className="w-[70%] h-auto object-contain" priority />
                    </div>
                </div>
            </div>

            {/* labels - z-30 so they sit above arcs and circle */}
            <OrbitItem label="LIFE" pos="top-[10%] left-1/2 -translate-x-1/2" bg="bg-black" text="text-white" />
            <OrbitItem label="DIGITAL" pos="top-[60%] left-[-18%]" bg="bg-black" text="text-white" />
            <OrbitItem label="IP" pos="top-[60%] right-[-20%]" bg="bg-white" text="text-black" />
            <OrbitItem label="REAL" pos="bottom-[-5%] left-1/2 -translate-x-1/2" bg="bg-white" text="text-black" />
        </div>
    );
}

/* ---------- page ---------- */
export default function LoginPage() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden text-white">
            <div className="absolute inset-0 bg-white clip-diagonal" />

            <div className="relative z-10 flex flex-col items-center text-center translate-y-20 md:translate-y-10 scale-[1.1] sm:scale-[1.1] md:scale-[1.15] max-sm:translate-y-14 max-sm:scale-[0.85] w-full">
                <Orbit />

                <div className="h-full md:mt-4 w-full flex justify-center">
                    <div className="mt-12 w-[75vw] max-w-[20rem]">
                        <label className="text-sm font-roboto text-white">Access</label>
                        <input type="email" placeholder="Email address" className="font-roboto w-full p-2.5 rounded-md mt-2 text-black bg-white outline-none placeholder-gray-600" />
                        <input type="password" placeholder="Password" className="font-roboto w-full p-2.5 rounded-md mt-2 text-black bg-white outline-none placeholder-gray-600" />
                        <button className="w-[80%] font-roboto bg-purple-800 py-2.5 mt-2 rounded-md text-white font-semibold hover:bg-purple-900 transition">Enter</button>
                        <div className="text-center text-xs mt-2 text-white cursor-pointer hover:underline">Forgot password?</div>
                        <div className="text-[12px] text-white mt-6 max-sm:text-[9px] text-center">
                            <p>Contact: team@sey.world</p>
                            <p>© 2025 SEY.WORLD. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    );
}
