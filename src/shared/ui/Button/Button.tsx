import { classNames } from "shared/lib/classNames/classNames";
import React, { ButtonHTMLAttributes, FC } from "react";
import cls from "./Button.module.scss";

export enum ButtonTheme {
    CLEAR = "clear",
    OUTLINE = "outline",
    BACKGROUND = "background",
    BACKGROUND_INVERTED = "backgroundInverted",
}

export enum ButtonSize {
    M = "size_m",
    L = "size_l",
    XL = "size_xl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ButtonTheme;
    isSquare?: boolean;
    size?: ButtonSize;
}

const Button:FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        isSquare,
        size,
        ...rest
    } = props;

    return (
        <button
            type="button"
            className={classNames(
                cls.Button,
                {
                    [cls.square]: isSquare,
                },
                [className, cls[theme], cls[size]],
            )}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;
