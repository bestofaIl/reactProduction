import React, {Suspense} from 'react';
import {Link, Route, Routes } from 'react-router-dom';
import { MainPage } from "pages/MainPage";
import "./styles/index.scss"
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AboutPage} from "pages/AboutPage";

export enum Theme {
    LIGHT = "normal",
    DARK = "dark"
}

const App = () => {

    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <Link to={"/"}>Main</Link>
            <Link to={"/about"}>About</Link>
            <button onClick={toggleTheme} className={classNames("btn", {disabled: true})}>Toggle Theme</button>
            <Suspense fallback={"Loading..."}>
                <Routes>
                    <Route path={"/about"} element={<AboutPage />} />
                    <Route path={"/"} element={<MainPage />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
