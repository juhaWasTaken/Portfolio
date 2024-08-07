import { Linkedin } from "lucide-react"
import { GitHubIcon, XIcon } from "@/assets/icons/TechIcons"
import Link from "next/link"

export function Socials() {
    return (
        <section className="flex flex-col w-full sm:flex-row flex-grow gap-5 items-center justify-center align-middle">

            <section className="flex flex-col flex-grow h-full w-full items-center justify-center gap-10 bg-cardBG border-cardBorder border-[2px] rounded-[14px] px-[25px] py-[20px] sm:px-[40px] sm:py-[20px] ">
                <Link className="hover:scale-125 transition-all" href="https://www.linkedin.com/in/carlos-gallaga/" target="_blank">
                    <Linkedin width={24} height={24} />
                </Link>
            </section>

            <section className="flex flex-col flex-grow h-full w-full items-center justify-center gap-10 bg-cardBG border-cardBorder border-[2px] rounded-[14px] px-[25px] py-[20px] sm:px-[40px] sm:py-[20px] ">
                <Link className="hover:scale-125 transition-all" href="https://github.com/juhaWasTaken" target="_blank">
                    <GitHubIcon />
                </Link>
            </section>

            <section className="flex flex-col flex-grow h-full w-full items-center justify-center gap-10 bg-cardBG border-cardBorder border-[2px] rounded-[14px] px-[25px] py-[20px] sm:px-[40px] sm:py-[20px] ">
                <Link className="hover:scale-125 transition-all" href="https://twitter.com/juhawontmiss" target="_blank">
                    <XIcon width={24} heigth={24} />
                </Link>
            </section>

        </section>
    )
}