import { classNames } from "shared/lib/classNames/classNames";
import React from "react";
import { useTranslation } from "react-i18next";
import Button, { ButtonTheme } from "shared/ui/Button/Button";

interface LangSwitcherProps {
    className?: string;
    isShort?: boolean;
}

const LangSwitcher = ({ className, isShort }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    };
    return (
        <Button
            className={classNames("", {}, [className])}
            onClick={toggle}
            theme={ButtonTheme.CLEAR}
        >
            {t(isShort ? "Код языка" : "Язык")}
        </Button>
    );
};

export default LangSwitcher;
