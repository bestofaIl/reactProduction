import { classNames } from "shared/lib/classNames/classNames";
import React, {
    ReactNode, useCallback, useEffect, useRef, useState,
} from "react";
import Portal from "shared/ui/Portal/Portal";
import cls from "./Modal.module.scss";

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
    const [isClosing, setIsClosing] = useState(false);
    const timeRef = useRef<ReturnType<typeof setTimeout>>();

    const {
        className, children, isOpen, onClose,
    } = props;
    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    const handleClose = useCallback((e: React.MouseEvent | KeyboardEvent) => {
        if (e.target !== e.currentTarget) {
            // console.log(e);
            // console.log(e.target instanceof );
            if (!(e instanceof KeyboardEvent)) {
                e.stopPropagation();
                return;
            }
        }
        if (onClose) {
            setIsClosing(true);
            timeRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onKeyDown = useCallback((e:KeyboardEvent) => {
        if (e.key === "Escape") {
            handleClose(e);
        }
    }, [handleClose]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener("keydown", onKeyDown);
        }

        return () => {
            clearInterval(timeRef.current);
            window.removeEventListener("keydown", onKeyDown);
            console.log("remove keydown listener");
        };
    }, [isOpen, onKeyDown]);

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={handleClose}>
                    <div className={cls.content}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
