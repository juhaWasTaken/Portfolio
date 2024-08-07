import { BorderBeam } from "../magicui/border-beam";
import { GitHubIcon, XIcon } from "@/assets/icons/TechIcons";
import { Linkedin } from "lucide-react";
import Link from "next/link";

export function Socials({ className = "" }) {
    return (
        <div className={`relative flex  items-center justify-between bg-cardBG border-cardBorder border-[2px] rounded-[14px] px-[32px] sm:px-[40px] py-[30px] overflow-hidden min-w-fit w-full z-20 ${className}`}>
            <BorderBeam />
            <h2 className=" text-textGray font-medium text-[16px] sm:text-[22px] z-20 text-center">Links</h2>
            <div className="flex items-center gap-3">
                <Link target="_blank" className="hover:scale-125 transition-all" href="https://www.linkedin.com/in/carlos-gallaga/"><Linkedin width={24} height={24} /></Link>
                <Link target="_blank" className="hover:scale-125 transition-all" href="https://github.com/juhaWasTaken"><GitHubIcon  /></Link>
                <Link target="_blank" className="hover:scale-125 transition-all" href="https://twitter.com/juhawontmiss"><XIcon width={24} heigth={24} /></Link>
            </div>
            <div className="absolute inset-0 bg-card-gradient2 z-[-10]"></div>
        </div>
    )
}