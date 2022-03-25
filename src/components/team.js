import React from 'react'
import '../styles/style.css'
import { useTranslation } from "react-i18next";

function Team() {
    const { t } = useTranslation();
    return (
        <div>
            <div className="team-hero">
                <img className="teamcover" src="./homepics/teamhero.jpg" alt="" />
                <div className="teamhero iphone">
                    <h1 className="mb-5 maintxtteam h2-bold ">{t("part61")} <br /> {t("part62")}</h1>
                    <p className="iphonetxt p-text">{t("part63")}</p>
                </div>
            </div>

            <div className="teamsect text-justify p-text">
                <img className="costa-photo mr-5" src="./homepics/teamimg.png" alt="" />
                <div className="mt-5">
                    <h3>{t("part64")}</h3>
                    <h5>{t("part65")}</h5> <br />
                    <p>{t("part66")}<br /><br />

                    {t("part67")} <br /><br />

                    {t("part68")}<br /> <br />

                    {t("part69")}</p>
                </div>
            </div>

            <div className="teamsect text-justify p-text">
                <div className="mt-5">
                    <h3>{t("part70")}</h3>
                    <h5>{t("part71")}</h5> <br />
                    <p>{t("part72")}
                        <br />
                        <br />
                        {t("part73")}
                        <br />
                        <br />
                        {t("part74")}</p>
                </div>
                <img className="ml-5" src="./homepics/Zheng.jpg" alt="" />
            </div>

            <div className="teamsect text-justify p-text">
                <img className="mr-5" src="./homepics/chiou.jpg" alt="" />
                <div className="mt-5">
                    <h3>{t("part75")}</h3>
                    <h5>{t("part76")}</h5> <br />
                    <p>{t("part77")}
                        <br />
                        <br />
                        {t("part78")}
                        <br />
                        <br />
                        {t("part79")}
                    </p>
                </div>
            </div>

        

        </div>
    )
}

export default Team