import React, { Suspense, useEffect, useState } from "react";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "app/providers/router";
import Navbar from "widgets/Navbar/ui/Navbar";
import { Sidebar } from "widgets/Sidebar";
import Loader from "shared/ui/Loader/Loader";

function App() {
    const { theme } = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <Suspense fallback={<Loader />}>
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
