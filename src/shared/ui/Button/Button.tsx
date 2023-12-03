import cls from "./Button.module.scss"
import {classNames} from "shared/lib/classNames/classNames";
import {ButtonHTMLAttributes, FC} from "react";

export enum ThemeButton {
    CLEAR = "clear",

}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeButton
}

const Button:FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        ...rest
    } = props

    return (
        <button
            className={classNames(cls.Button, {}, [className, cls[theme]])}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;