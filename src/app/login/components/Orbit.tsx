import Image from "next/image";
import React from "react";

function OrbitItem({ label, pos, bg = "bg-black", text = "text-white" }) {
    return (
        <div className={`absolute ${pos} z-30`}>
            <div
                className={`relative ${bg} ${text} font-roboto
          text-[clamp(11px,1vw,15px)]
          rounded-md w-[22%] lg:w-[20%] h-[9%] lg:h-[5%]
          flex items-center justify-center
          min-w-[80px] min-h-[30px]
          transition-all duration-500 ease-in-out
          xl:scale-120
        `}
            >
                <span className="block text-center whitespace-nowrap transition-all duration-500 ease-in-out">
                    {label}
                </span>

                <div
                    className={`absolute inset-0 transition-all duration-300 ${bg} rounded-md rotate-[8deg] scale-100 -z-10`}
                />
                <div
                    className={`absolute inset-0 transition-all duration-300 ${bg} rounded-md rotate-[-8deg] scale-100 -z-20`}
                />
            </div>
        </div>
    );
}

export default function Orbit({ error }) {
    return (
        <div
            className="
        relative mx-auto aspect-square
        w-[80vw] sm:w-[65vw] md:w-[50vw] lg:w-[38vw] xl:w-[28vw]
        [--r:50%] sm:[--r:50%] md:[--r:40%] [--t:50%]
        translate-y-[-30%] md:translate-y-[-25%] lg:translate-y-[18%]
        lg:scale-[0.9] xl:scale-[0.75]   /* 👈 slightly smaller for desktop only */
        m-4 transition-transform duration-500
      "
        >
            {/* center circle */}
            <div className="absolute inset-0 flex items-center justify-center lg:my-10">
                <div className="relative w-[60%] aspect-square rounded-full bg-white overflow-hidden z-20 flex items-center justify-center">
                    <div className="absolute inset-0">
                        {[30, 20, 10].map((deg, i) => (
                            <div
                                key={i}
                                className="absolute inset-0 opacity-50"
                                style={{ transform: `rotate(${deg}deg) scale(2.4)` }}
                            >
                                <Image
                                    src="/sey-logo.svg"
                                    alt="shadow"
                                    width={800}
                                    height={800}
                                    priority
                                />
                            </div>
                        ))}
                        <div
                            className="absolute inset-0 z-20"
                            style={{ transform: "scale(2.4)" }}
                        >
                            <Image
                                src="/sey-logo.svg"
                                alt="SEY COOP logo"
                                width={800}
                                height={800}
                                priority
                            />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center z-30 translate-y-[5%]">
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
            </div>

            {/* orbit items */}
            <OrbitItem
                label={error ? "NO ACCESS" : "LIFE"}
                pos="top-[calc(50%-var(--r))] left-1/2 -translate-x-1/2 -translate-y-1/2"
                bg={error ? "bg-red-800" : "bg-black"}
                text="text-white"
            />
            <OrbitItem
                label="DIGITAL"
                pos="top-1/2 left-[calc(50%-var(--r))] -translate-x-1/2 -translate-y-1/2"
                bg="bg-black"
                text="text-white"
            />
            <OrbitItem
                label="IT"
                pos="top-1/2 left-[calc(50%+var(--r))] -translate-x-1/2 -translate-y-1/2"
                bg="bg-purple-200"
                text="text-black"
            />
            <OrbitItem
                label="REAL"
                pos="top-[calc(50%+var(--r))] left-1/2 -translate-x-1/2 -translate-y-1/2"
                bg="bg-purple-200"
                text="text-black"
            />
        </div>
    );
}
