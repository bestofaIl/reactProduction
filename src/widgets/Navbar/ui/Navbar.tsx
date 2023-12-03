import React from "react";
import { classNames } from "shared/lib/classNames/classNames";
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import cls from "./Navbar.module.scss";

interface NavbarProps {
    className?: string
}

const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={classNames(cls.links)}>
            <AppLink to="/" theme={AppLinkTheme.SECONDARY} className={cls.mainLink}>Main</AppLink>
            <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>About</AppLink>
        </div>
    </div>
);

export default Navbar;
