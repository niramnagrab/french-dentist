import React, { useState, useEffect } from "react";
import "./styles/style.css";
import { useTranslation } from "react-i18next";
import LanguageSelect from "./languageSelect";
import { Routes, Route, Link } from "react-router-dom";
import About from "./components/about.js";
import Team from "./components/team";
import Care from "./components/care";
import Blog from "./components/blog";
import Contactus from "./components/contactus";
import Home from "./components/home";
import { Container, Navbar, Nav } from "react-bootstrap";
// import { useHistory } from 'react-router-dom'

import DentalCheckUp from "./components/services/dental-checkup";
import TeethWhitening from "./components/services/teeth-whitening";
import TeethCleanings from "./components/services/teeth-cleaning";
import Veneers from "./components/services/veneers";
import Invisalign from "./components/services/invisalign";
import EmergenciesAndMore from "./components/services/emergencies-and-more";
import BlogDetails from "./components/blog-details";

export default function App() {
  const { t } = useTranslation();
  // const history = useHistory()

  const pathnameis = window.location.pathname;
  console.log(pathnameis);
  const handleLink = () => {};

  window.onscroll = function (e) {
    var scrollY = window.pageYOffset || document.documentElement.scrollTop;
    var header = document.querySelector("header");
    var lowerfooter = document.getElementById("lowerfooter");

    // scrollY >= 3500
    // ? lowerfooter.style.visibility = 'visible'
    // : lowerfooter.style.visibility = 'hidden';

    scrollY <= this.lastScroll
      ? (header.style.visibility = "visible")
      : (header.style.visibility = "hidden");

    this.lastScroll = scrollY;
  };
  return (
    <>
      <header className="upperheader">
        <div className="miniheadertxt">
          <img className="firstimg" src="./homepics/Icon.png" alt="" />
          <div className="miniHeaderContactUs">
            <div>{t("part1")}</div> &nbsp;<div>{t("part1.2")}</div>
          </div>
        </div>
        <div className="socialicons">

        <a href="https://www.instagram.com/frenchdentist/" target="_blank" rel="noreferrer">
        <img className="icon" src="./homepics/Instagram.png" alt="" />
        </a>

        <a href="https://www.linkedin.com/company/french-dentist/" target="_blank" rel="noreferrer">
        <img className="icon" src="./homepics/linkedin.png" alt="" />
        </a>

        <a href="https://www.instagram.com/frenchdentist/" target="_blank" rel="noreferrer">
        <img className="icon" src="./homepics/wechat.png" alt="" />
        </a>

        </div>
      </header>

      <div className="bg-white">
        <Navbar collapseOnSelect expand="lg">
          <Container className="navbarrr">
            <Navbar.Brand className="mainfrlink" href="/">
            <img className="logo" src="./homepics/logo.svg" alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto navbarrrr">
                <Nav.Link
                  className={`navelem ${
                    pathnameis === "/about" ? "current" : ""
                  }`}
                  href="/about"
                >
                  {t("part3")}
                </Nav.Link>
                <Nav.Link
                  className={`navelem ${
                    pathnameis === "/team" ? "current" : ""
                  }`}
                  href="/team"
                >
                  {t("part4")}
                </Nav.Link>
                <div className="dropdown">
                  <Nav.Link
                    className={`navelem dropbtn ${
                      pathnameis === "/care" ? "current" : ""
                    }`}
                    href="/care"
                  >
                    {t("part5")}
                  </Nav.Link>
                  <div className="dropdown-content">
                    <a href="/comprehensive-care">{t("part911")}</a>
                    <a href="/teeth-whitening">{t("part912")}</a>
                    <a href="/orthodontics">{t("part913")}</a>
                    <a href="/dental-implants">{t("part914")}</a>
                    <a href="/porcelain-veneers">{t("part915")}</a>
                    <a href="/emergencies-and-more">{t("part916")}</a>
                  </div>
                </div>
                <Nav.Link
                  className={`navelem  ${
                    pathnameis === "/blog" ? "current" : ""
                  }`}
                  href="/blog"
                >
                  {t("part6")}
                </Nav.Link>
                <Nav.Link
                  className={`navelem  ${
                    pathnameis === "/contactus" ? "current" : ""
                  }`}
                  href="/contactus"
                >
                  {t("part7")}
                </Nav.Link>
                <Nav.Link>
                  <div className="language-select">
                    <LanguageSelect />
                  </div>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/team" element={<Team />}></Route>
          <Route exact path="/care" element={<Care />}></Route>
          <Route
            exact
            path="/comprehensive-care"
            element={<DentalCheckUp />}
          ></Route>
          <Route
            exact
            path="/orthodontics"
            element={<TeethWhitening />}
          ></Route>
          <Route
            exact
            path="/teeth-whitening"
            element={<TeethCleanings />}
          ></Route>
          <Route exact path="/dental-implants" element={<Veneers />}></Route>
          <Route
            exact
            path="/porcelain-veneers"
            element={<Invisalign />}
          ></Route>
          <Route
            exact
            path="/emergencies-and-more"
            element={<EmergenciesAndMore />}
          ></Route>
          <Route exact path="/blog" element={<Blog />}></Route>
          <Route exact path="/contactus" element={<Contactus />}></Route>
          <Route
            exact
            path="/blog-detail/:slug"
            element={<BlogDetails />}
          ></Route>
        </Routes>
      </div>
      <div className="footer">
        <div className="upperfooter">
          <div className="text-center pt-5 mt-5">
            <div className="fontsizefooter font-weight-450">{t("part8")}</div>
            <div className="fontsizefooter1">{t("part9")}</div>
          </div>
          <span className="hrfooterr"></span>
          <div className="footeradd row">
            <div className="col-lg-3">
              <div className="text-justify address-padding">
                <h4>{t("part10")}</h4>
                {t("part1111")}
                <br />
                {t("part1112")}
                <br />
                {t("part1113")}
                <br />
                {t("part1114")}
                <br />
                {t("part1115")}
                <br />
                {t("part1116")}
                <br />
              </div>
            </div>
            <div className="text-justify col-lg-3 address-padding">
              <h4>{t("part12")}</h4>
              {t("monday")}
              <br />
              {t("tuesday")}
              <br />
              {t("wednesday")}
              <br />
              {t("thursday")}
              <br />
              {t("friday")}
              <br />
              {t("saturday")}
            </div>
            <div className="text-justify col-lg-3 address-padding">
              <h4>{t("part14")}</h4>
              {t("part1411")}
              <br />
              {t("part1412")}
              <br />
              {t("part1413")}
              <br />
              {t("part1414")}
              <br />
              {t("part1415")}
              <br />
            </div>
          </div>
        </div>
        <div id="lowerfooter" className="lowerfooter">
          <div>
            <ul className="footernav">
              <Nav.Link className="clr mr-3 mt-md-5 mt-3" href="/team">
                {t("part16")}
              </Nav.Link>
              <Nav.Link className="clr mr-3 mt-md-5 mt-3" href="/contactus">
                {t("part17")}
              </Nav.Link>
              <Nav.Link className="clr mr-3 mt-md-5 mt-3" href="/blog">
                {t("part18")}
              </Nav.Link>
              <Nav.Link className="clr mr-3 mt-md-5 mt-3" href="/care">
                {t("part19")}
              </Nav.Link>
              <Nav.Link className="clr mr-3 mt-md-5 mt-3" href="/">
                {t("part20")}
              </Nav.Link>
              <Nav.Link className="clr mr-3 mt-md-5 mt-3" href="/about">
                {t("part21")}
              </Nav.Link>
              <Nav.Link className="clr mr-3 mt-md-5 mt-3" href="/contactus">
                {t("part22")}
              </Nav.Link>
            </ul>
          </div>
          <hr className="hrfooter1" />
          <div className="text-center pb-2 pb-md-5">{t("part23")}</div>{" "}
        </div>
      </div>
    </>
  );
}
