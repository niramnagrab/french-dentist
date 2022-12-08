import React from "react"
import "../styles/style.css"
import { useTranslation } from "react-i18next"
import { Container, Navbar, Nav } from "react-bootstrap"

const CARD_DATA = [
  {
    img: "careimg1",
    heading: "part911",
    link: "/comprehensive-care",
    description: "part921",
  },
  {
    img: "card",
    heading: "part912",
    link: "/teeth-whitening",
    description: "part922",
  },
  {
    img: "card1",
    heading: "part913",
    link: "/orthodontics",
    description: "part923",
  },
  {
    img: "card2",
    heading: "part914",
    link: "/dental-implants",
    description: "part924",
  },
  {
    img: "card3",
    heading: "part915",
    link: "/porcelain-veneers",
    description: "part925",
  },
  {
    img: "card4",
    heading: "part916",
    link: "/emergencies-and-more",
    description: "part926",
  },
]

function Care() {
  const { t } = useTranslation()

  return (
    <div className="carepage">
      <div>
        <img className="carehero w-100" src="./homepics/treatment2.webp" alt="" />
      </div>

      <div className="careupper">
        <div className="caresect mr-3">
          <img className="m-4 sectimg" src="https://img.icons8.com/external-icongeek26-glyph-icongeek26/64/4a90e2/external-emergency-virus-icongeek26-glyph-icongeek26.png" height="75px" width="75px" alt="" />
          <h6 className="cardheading">{t("part85")}</h6>
          <p>
            Lorem Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been{" "}
          </p>
        </div>
        <div className="caresect mr-3">
          <img className="m-4 sectimg" src="https://img.icons8.com/external-icongeek26-outline-icongeek26/64/4a90e2/external-dentist-dental-icongeek26-outline-icongeek26-1.png" height="75px" width="75px" alt="" />
          <h6 className="cardheading">{t("part86")}</h6>
          <p>
            Lorem Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been{" "}
          </p>
        </div>
        <div className="caresect mr-3">
          <img className="m-4 sectimg" src="https://img.icons8.com/ios-filled/50/4a90e2/hand-holding-heart.png" height="75px" width="75px" alt="" />
          <h6 className="cardheading">{t("part87")}</h6>
          <p>
            Lorem Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been{" "}
          </p>
        </div>
        <div className="caresect">
          <img className="m-4 sectimg" src="https://img.icons8.com/external-wanicon-lineal-wanicon/64/4a90e2/external-facilities-business-administration-wanicon-lineal-wanicon.png" height="75px" width="75px" alt="" />
          <h6 className="cardheading">{t("part88")}</h6>
          <p>
            Lorem Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been{" "}
          </p>
        </div>
      </div>

      <div>
        <h2 className="caretext text-center font-weight-bold mt-5 ">
          {t("part89")}
        </h2>
        <div className="carecard mt-5 mb-3">
          {CARD_DATA.map((item, key) => (
            <div className="caresect2">
              <img
                className="m-0 carecardimg"
                src={`./homepics/${item.img}.png`}
                alt=""
              />
              <div className="cardheadingparagragh">
                <h3 className="cardheading">{t(item.heading)}</h3>
                <div className="hrr">
                  <span class="line"></span>
                </div>
                <p className="careparagh">{t(item.description)}</p>
                <div className="centerbt">
                  <Nav.Link className="webbtn " href={item.link}>
                    {t("part93")}
                  </Nav.Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Care
