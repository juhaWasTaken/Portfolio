"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import CurrentTime from "./CurrentTime";

import Particles from "@/components/magicui/particles";

export const ParticlesDemo = () => {
    
    const [color] = useState("#ffffff");
    return (
        <div className="relative bg-cardBG border-cardBorder border-[2px] rounded-[14px] px-[40px] py-[60px] sm:px-[40px] sm:py-[60px] overflow-hidden h-fit">
            <CurrentTime timeZone="America/Matamoros" />
            <Particles
                className="absolute min-h-fit inset-0 "
                quantity={100}
                ease={80}
                color={color}
                refresh
            />
        </div>
    );
};

export default ParticlesDemo;
