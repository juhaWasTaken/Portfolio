'use client'

import { CheckIcon, Copy } from "lucide-react";
import { AnimatedSubscribeButton } from "@/components/magicui/animated-subscribe-button";
import { useTranslation } from "react-i18next";

export function CopyButton() {
    const {t} = useTranslation();
    return (
        <AnimatedSubscribeButton
            buttonColor="#161616"
            buttonTextColor="#ffffff"
            subscribeStatus={false}
            initialText={
                <span className="group inline-flex items-center">
                    {t('header.buttons.copy')}{" "}
                    {/* <ChevronRightIcon className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /> */}
                    <Copy className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
            }
            changeText={
                <span className="group inline-flex items-center text-white">
                    {t('header.buttons.copied')}{" "}
                    <CheckIcon className="ml-2 h-4 w-4" />
                </span>
            }
        />
    )
}