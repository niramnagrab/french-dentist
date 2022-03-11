import React from 'react'
import '../styles/style.css'
import { useTranslation } from "react-i18next";

function Team() {
    const { t } = useTranslation();
    return (
        <div>
            <div className="team-hero">
                <img className="teamcover" src="./homepics/teamhero.png" alt="" />
                <div className="teamhero iphone">
                    <h1 className="mb-5 maintxtteam ">{t("part61")} <br /> {t("part62")}</h1>
                    <p className="iphonetxt">{t("part63")}</p>
                </div>
            </div>

            <div className="teamsect text-justify">
                <img className="mr-5" src="./homepics/teamimg.png" alt="" />
                <div className="mt-5">
                    <h3>{t("part64")}</h3>
                    <h5>{t("part65")}</h5> <br />
                    <p>{t("part66")}<br /><br />

                    {t("part67")} <br /><br />

                    {t("part68")}<br /> <br />

                    {t("part69")}</p>
                </div>
            </div>

            <div className="teamsect text-justify">
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
                <img className="mr-5" src="./homepics/doc.png" alt="" />
            </div>

            <div className="teamsect text-justify">
                <img className="mr-5" src="./homepics/doc2.png" alt="" />
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

            <div className="teamsect text-justify">
                <div className="mttxt">
                    <h3>{t("part80")}</h3>
                    <h5>{t("part81")}</h5> <br />
                    <p>{t("part82")}
                        <br />
                        <br />
                        {t("part83")}
                        <br />
                        <br />
                        {t("part84")}</p>
                </div>
                <img className="mr-5" src="./homepics/doc3.png" alt="" />
            </div>

        </div>
    )
}

export default Team