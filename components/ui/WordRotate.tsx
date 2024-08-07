'use client'

import WordRotate from "@/components/magicui/word-rotate";
import { useTranslation } from "react-i18next";

export async function WordRotateFunction() {
    const { t } = useTranslation();
    return (
        <WordRotate
            className="text-textGray text-[18px] sm:text-2xl"
            words={["Desarrollo web", "Diseño web", "Diseño UI/UX"]}
        />
    );
}
