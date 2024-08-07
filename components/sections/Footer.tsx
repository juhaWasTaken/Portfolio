import { BorderBeam } from "../magicui/border-beam";
import { StatusWork } from "../ui/StatusWork";

export function Footer() {
    const isAvailable = true
    return (
        <div className="relative flex flex-col sm:flex-row sm:justify-between items-center bg-cardBG border-cardBorder border-[2px] rounded-[14px] px-[42px] py-[45px] sm:px-[42px] sm:py-[45px] overflow-hidden min-w-fit w-full z-20 gap-5">
            <h2 className=" text-textGray italic text-[16px] sm:text-[22px] z-20 text-center">Portfolio 2024</h2>
            <StatusWork isAvailable={isAvailable} className="sm:order-last" />
            <div className="absolute inset-0 bg-card-gradient2 z-[-10]"></div>
        </div>
    )
}