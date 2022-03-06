import React from 'react'
import '../styles/style.css'
import { useTranslation } from "react-i18next";
import { Container, Navbar, Nav } from "react-bootstrap";

function Care() {
    const { t } = useTranslation();
    return (
        <div className="carepage">
            <div>
                <img className="carehero w-100" src="./homepics/carecover.png" alt="" />
            </div>

            <div className="careupper">
                <div className="caresect mr-3">
                    <img className="m-5 sectimg" src="./homepics/careimg.png" alt="" />
                    <h6 className="cardheading">{t("part85")}</h6>
                    <p>Lorem Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been </p>
                </div>
                <div className="caresect mr-3">
                    <img className="m-5 sectimg" src="./homepics/careimg4.png" alt="" />
                    <h6 className="cardheading">{t("part86")}</h6>
                    <p>Lorem Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been </p>
                </div>
                <div className="caresect mr-3">
                    <img className="m-5 sectimg" src="./homepics/careimg2.png" alt="" />
                    <h6 className="cardheading">{t("part87")}</h6>
                    <p>Lorem Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been </p>
                </div>
                <div className="caresect mr-3">
                    <img className="m-5 sectimg" src="./homepics/careimg3.png" alt="" />
                    <h6 className="cardheading">{t("part88")}</h6>
                    <p>Lorem Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been </p>
                </div>
            </div>

            <div>
                <h2 className="caretext text-center font-weight-bold mt-5 ">
                {t("part89")} <br /> {t("part90")}
                </h2>
                <div>
                    <div className="carecard mt-5 mb-3">
                        <div className="caresect2 p-5 mr-3 ">
                            <img className="m-0 carecardimg" src="./homepics/careimg1.png" alt="" />
                            <h3 className="cardheading">{t("part91")}</h3>
                            <div className='hrr'><span class='line'></span></div>
                            <p className="careparagh">{t("part92")}
                            </p>
                            <div className="centerbt">
                            <Nav.Link className="webbtn " href="/blog">{t("part93")}</Nav.Link>
                            </div>
                        </div>
                        <div className="caresect2 p-5 mr-3">
                            <img className="m-0 carecardimg" src="./homepics/card.png" alt="" />
                            <h3 className="cardheading">{t("part91")}</h3>
                            <div className='hrr'><span class='line'></span></div>
                            <p>{t("part92")}
                            </p>
                            <div className="centerbt">
                            <Nav.Link className="webbtn " href="/blog">{t("part93")}</Nav.Link>
                            </div>
                        </div>
                        <div className="caresect2 p-5 mr-3">
                            <img className="m-0 carecardimg" src="./homepics/card1.png" alt="" />
                            <h3 className="cardheading">{t("part91")}</h3>
                            <div className='hrr'><span class='line'></span></div>
                            <p>{t("part92")}
                            </p>
                            <div className="centerbt">
                            <Nav.Link className="webbtn " href="/blog">{t("part93")}</Nav.Link>
                            </div>
                        </div>
                    </div>
                    <div className="carecard">
                        <div className="caresect2 p-5 mr-3">
                            <img className="m-0 carecardimg" src="./homepics/card2.png" alt="" />
                            <h3 className="cardheading">{t("part91")}</h3>
                            <div className='hrr'><span class='line'></span></div>
                            <p>{t("part92")}
                            </p>
                            <div className="centerbt">
                            <Nav.Link className="webbtn " href="/blog">{t("part93")}</Nav.Link>
                            </div>
                        </div>
                        <div className="caresect2 p-5 mr-3">
                            <img className="m-0 carecardimg" src="./homepics/card3.png" alt="" />
                            <h3 className="cardheading">{t("part91")}</h3>
                            <div className='hrr'><span class='line'></span></div>
                            <p>{t("part92")}
                            </p>
                            <div className="centerbt">
                            <Nav.Link className="webbtn " href="/blog">{t("part93")}</Nav.Link>
                            </div>
                        </div>
                        <div className="caresect2 p-5 mr-3">
                            <img className="m-0 carecardimg" src="./homepics/card4.png" alt="" />
                            <h3 className="cardheading">{t("part91")}</h3>
                            <div className='hrr'><span class='line'></span></div>
                            <p>{t("part92")}
                            </p>
                            <div className="centerbt">
                            <Nav.Link className="webbtn " href="/blog">{t("part93")}</Nav.Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Care