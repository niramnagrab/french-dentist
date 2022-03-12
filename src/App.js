import React, { useState, useEffect } from "react"
import './styles/style.css';
import { useTranslation } from "react-i18next";
import LanguageSelect from "./languageSelect";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './components/about.js';
import Team from './components/team';
import Care from './components/care';
import Blog from './components/blog';
import Contactus from './components/contactus';
import Home from './components/home';
import { Container, Navbar, Nav } from "react-bootstrap";
// import { useHistory } from 'react-router-dom'


import DentalCheckUp from "./components/services/dental-checkup";
import TeethWhitening from "./components/services/teeth-whitening";
import TeethCleanings from "./components/services/teeth-whitening";
import Veneers from "./components/services/veneers";
import Invisalign from "./components/services/invisalign";
import EmergenciesAndMore from "./components/services/invisalign";

export default function App() {
  const { t } = useTranslation();
  // const history = useHistory()

 
 const pathnameis=window.location.pathname
console.log(pathnameis)
  const handleLink = () => {
  }

  window.onscroll = function(e) { 
    var scrollY = window.pageYOffset || document.documentElement.scrollTop;
    var header = document.querySelector('header');
    var lowerfooter = document.getElementById('lowerfooter');

    // scrollY >= 3500 
    // ? lowerfooter.style.visibility = 'visible'
    // : lowerfooter.style.visibility = 'hidden'; 

    scrollY <= this.lastScroll 
      ? header.style.visibility = 'visible'
      : header.style.visibility = 'hidden'; 

    this.lastScroll = scrollY ;
  }
  return (
    <>
        <header className="upperheader">
          <div className="miniheadertxt">
            <img className="firstimg" src="./homepics/Icon.png" alt="" />
            {t("part1")}
          </div>
          <div className="socialicons">
            <img className="icon" src="./homepics/Instagram.png" alt="" />
            <img className="icon" src="./homepics/Twitter.png" alt="" />
            <img className="icon" src="./homepics/youtube.png" alt="" />
          </div>
        </header>

        <div className="bg-white" >
          <Navbar collapseOnSelect expand="lg" >
              <Container className="navbarrr">
                <Navbar.Brand className="mainfrlink" href="/">{t("part2")}</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto navbarrrr">
                    <Nav.Link className={`navelem ${pathnameis === '/about' ? 'current' : ''}`}  href="/about">{t("part3")}</Nav.Link>
                    <Nav.Link className={`navelem ${pathnameis === '/team' ? 'current' : ''}`} href="/team">{t("part4")}</Nav.Link>
                    <div className="dropdown">
                      <Nav.Link className={`navelem dropbtn ${pathnameis === '/care' ? 'current' : ''}`}  href="/care">
                        {t("part5")} 
                      </Nav.Link>
                      <div className="dropdown-content">
                        <a  href="/dental-checkup">{t("dental_checkup")}</a>
                        <a href="/teeth-cleaning">{t("teeth_cleanings")}</a>
                        <a href="/veneers">{t("part22")}</a>
                        <a href="/teeth-whitening">{t("whitening")}</a>
                        <a href="/invisalign">{t("part104")}</a>
                        <a href="/emergencies-and-more">{t("emergencies_and_more")}</a>
                      </div>
                    </div> 
                    <Nav.Link className={`navelem  ${pathnameis === '/blog' ? 'current' : ''}`} href="/blog">{t("part6")}</Nav.Link>
                    <Nav.Link className={`navelem  ${pathnameis === '/contactus' ? 'current' : ''}`} href="/contactus">{t("part7")}</Nav.Link>
                    <Nav.Link>  
                      <div className="language-select">
                        <LanguageSelect />
                      </div>
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>



          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Routes>
            <Route exact path="/" element={<Home />}>
            </Route>
            <Route exact path="/about" element={<About />}>
            </Route>
            <Route exact path="/team" element={<Team />}>
            </Route>
            <Route exact path="/care" element={<Care />}>
            </Route>
            <Route exact path="/dental-checkup" element={<DentalCheckUp />}>
            </Route>
            <Route exact path="/teeth-whitening" element={<TeethWhitening />}>
            </Route>
            <Route exact path="/teeth-cleaning" element={<TeethCleanings />}>
            </Route>
            <Route exact path="/veneers" element={<Veneers />}>
            </Route>
            <Route exact path="/invisalign" element={<Invisalign />}>
            </Route>
            <Route exact path="/emergencies-and-more" element={<EmergenciesAndMore />}>
            </Route>
            <Route exact path="/blog" element={<Blog />}>
            </Route>
            <Route exact path="/contactus" element={<Contactus />}>
            </Route>
          </Routes>
        </div>
        <div className="footer">
          <footer className="upperfooter">
            <div className="text-center pt-5">
              <div className="fontsizefooter font-weight-450">{t("part8")}</div>
              <div className="fontsizefooter1">{t("part9")}</div>
            </div>
            <span className="hrfooterr"></span>
            <div className="footeradd row">
              <div className="col-lg-3">
                <div className="text-justify address-padding">
                  <h4>{t("part10")}</h4>
                  {t("part11")}</div>
              </div>
              <div className="text-justify col-lg-3 address-padding">
                <h4>{t("part12")}</h4>
                {t("part13")}
              </div>
              <div className="text-justify col-lg-3 address-padding">
                <h4>{t("part14")}</h4>
                {t("part15")}
              </div>
            </div>
          </footer>
          <div id="lowerfooter" className="lowerfooter">
            <div>
              <ul className="footernav">
                  <Nav.Link className="clr mr-3 mt-5" href="/team">{t("part16")}</Nav.Link>
                  <Nav.Link className="clr mr-3 mt-5" href="/contactus">{t("part17")}</Nav.Link>
                  <Nav.Link className="clr mr-3 mt-5" href="/blog">{t("part18")}</Nav.Link>
                  <Nav.Link className="clr mr-3 mt-5" href="/care">{t("part19")}</Nav.Link>
                  <Nav.Link className="clr mr-3 mt-5" href="/">{t("part20")}</Nav.Link>
                  <Nav.Link className="clr mr-3 mt-5" href="/about">{t("part21")}</Nav.Link>
                  <Nav.Link className="clr mr-3 mt-5" href="/contactus">{t("part22")}</Nav.Link>
              </ul>
            </div>
            <hr className="hrfooter1" />
            <div className="text-center pb-5">{t("part23")}</div> </div>
        </div>


    </>
  );
}
