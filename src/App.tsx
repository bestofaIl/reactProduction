import React, {Suspense, useContext, useState} from 'react';
import {Link, Route, Routes } from 'react-router-dom';
import {AboutPageAsync} from "./components/AboutPage/AboutPage.async";
import MainPage from "./components/MainPage/MainPage";
import "./styles/index.scss"
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";

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
                    <Route path={"/about"} element={<AboutPageAsync />} />
                    <Route path={"/"} element={<MainPage />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
