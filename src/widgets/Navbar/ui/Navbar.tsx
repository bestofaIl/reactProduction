import React from 'react';
import cls from "./Navbar.module.scss"
import {classNames} from "shared/lib/classNames/classNames";
import AppLink, {AppLinkTheme} from "shared/ui/AppLink/AppLink";


interface NavbarProps {
    className?: string
}

const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={classNames(cls.links)}>
                <AppLink to={"/"} theme={AppLinkTheme.SECONDARY} className={cls.mainLink}>Main</AppLink>
                <AppLink to={"/about"} theme={AppLinkTheme.SECONDARY}>About</AppLink>
            </div>
        </div>
    );
};

export default Navbar;

