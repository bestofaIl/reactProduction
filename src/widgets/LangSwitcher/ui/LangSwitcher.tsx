import cls from "./LangSwitcher.module.scss"
import {classNames} from "shared/lib/classNames/classNames";
import React from "react";
import {useTranslation} from "react-i18next";
import Button, {ThemeButton} from "shared/ui/Button/Button";

interface LangSwitcherProps {
    className?: string
}

const LangSwitcher = ({className}: LangSwitcherProps) => {
    const {t, i18n} = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru")
    }
    return (
        <Button
            className={classNames(cls.LangSwitcher, {}, [className])}
            onClick={toggle}
            theme={ThemeButton.CLEAR}
        >
            {t("Язык")}
        </Button>
    );


};

export default LangSwitcher;