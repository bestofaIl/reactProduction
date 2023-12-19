import React from "react";
import { useTranslation } from "react-i18next";

const MainPage = () => {
    const { t } = useTranslation();
    const handleInput = (e: any) => {
        const file = e.target.files[0];

        const reader = new FileReader();

        reader.readAsText(file);

        reader.onload = function () {
        };

        reader.onerror = function () {
            console.log(reader.error);
        };
    };
    return (
        <div>
            <input type="file" onInput={(e) => handleInput(e)} />
            {t("Главная страница")}
        </div>
    );
};

export default MainPage;
