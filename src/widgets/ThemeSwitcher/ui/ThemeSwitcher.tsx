import { classNames } from "shared/lib/classNames/classNames";
import React from "react";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import LightIcon from "shared/assets/icons/light.svg";
import DarkIcon from "shared/assets/icons/dark.svg";
import Button, { ThemeButton } from "shared/ui/Button/Button";
import cls from "./ThemeSwitcher.module.scss";

interface ThemeSwitcherProps {
    className?: string
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={toggleTheme}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
};

export default ThemeSwitcher;
