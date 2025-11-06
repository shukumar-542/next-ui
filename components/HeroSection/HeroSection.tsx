"use client"


import { EncryptedText } from "@/components/ui/encrypted-text";
import { Spotlight } from "@/components/ui/spotlight";
import { cn } from "@/lib/utils"
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

const HeroSection = () => {
     const words = [
                {
                    text: "Build",
    },
                {
                    text: "awesome",
    },
                {
                    text: "apps",
    },
                {
                    text: "with",
    },
                {
                    text: "Aceternity.",
                className: "text-blue-500 dark:text-blue-500",
    },
                ];
    return (
        <div className="relative flex h-160 w-full overflow-hidden  bg-black-100 antialiased md:items-center md:justify-center">
            <Spotlight className="-top-40 -left-10 md:-top-20 md:left-60 h-[70vh]" fill="white" />
            <Spotlight className="top-10 left-full h-[70vh] w-[50vw]" fill="pruple" />
            <Spotlight className="top-12 left-12 h-[80vh] w-[50vw]" fill="blue" />


            <div className="relative flex h-200 w-full items-center justify-center bg-white dark:bg-black-100">
                <div
                    className={cn(
                        "absolute inset-0",
                        "bg-size-[80px_80px]",
                        "bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                        "dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
                    )}
                />
                {/* <EncryptedText
                    text="Welcome to the Matrix, Neo."
                    encryptedClassName="text-neutral-500 "
                    revealedClassName="dark:text-white text-black"
                    revealDelayMs={50}
                    className="text-xl"
                /> */}

            
 
                <div className="flex flex-col items-center justify-center h-[40rem]  ">
                    <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
                        The road to freedom starts from here
                    </p>
                    <TypewriterEffectSmooth words={words} />
                   
                </div>


            </div>
        </div>
    )
}

export default HeroSection