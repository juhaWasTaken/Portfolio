"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface AnimatedSubscribeButtonProps {
  buttonColor: string;
  buttonTextColor?: string;
  subscribeStatus: boolean;
  initialText: React.ReactElement | string;
  changeText: React.ReactElement | string;
}

export const AnimatedSubscribeButton: React.FC<
  AnimatedSubscribeButtonProps
> = ({
  buttonColor,
  subscribeStatus,
  buttonTextColor,
  changeText,
  initialText,
}) => {
    const [isSubscribed, setIsSubscribed] = useState<boolean>(subscribeStatus);

    const handleButtonClick = () => {
      navigator.clipboard.writeText("carlos.gallagav@gmail.com").then(() => {
        setIsSubscribed(true);
      });
    };

    return (
      <AnimatePresence mode="wait">
        {isSubscribed ? (
          <motion.button
            className="relative flex w-fit min-w-fit items-center justify-center overflow-hidden rounded-md bg-[#1f1f1f] py-2 px-4 border-[1.5px] border-[#323232]"
            onClick={() => setIsSubscribed(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.span
              key="action"
              className="relative block h-full w-full font-semibold"
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              style={{ color: buttonColor }}
            >
              {changeText}
            </motion.span>
          </motion.button>
        ) : (
          <motion.button
            className="relative flex w-fit min-w-fit cursor-pointer items-center justify-center rounded-md border-[1.5px] border-cardBorder py-2 px-4"
            style={{ backgroundColor: buttonColor, color: buttonTextColor }}
            onClick={handleButtonClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.span
              key="reaction"
              className="relative block font-semibold"
              initial={{ x: 0 }}
              exit={{ x: 50, transition: { duration: 0.1 } }}
            >
              {initialText}
            </motion.span>
          </motion.button>
        )}
      </AnimatePresence>
    );
  };
