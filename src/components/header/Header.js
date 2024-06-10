"use client";
import React, { useState } from "react";
import "./Header.css";
import Image from "next/image";

import LogoImage from "../../assets/img/logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header id="header" className="fixed-top d-flex align-items-center">
      <div className="container d-flex align-items-center justify-content-between">
        <div className="logo">
          <h1>
            <a href="/">
              <Image src={LogoImage} alt="Logo" className="img-fluid logoimg" />
              AKESHYA
            </a>
          </h1>
        </div>

        <nav
          id="navbar"
          className={`navbar ${isMobileMenuOpen ? "navbar-mobile" : ""}`}
        >
          <ul>
            <li>
              <a className="nav-link scrollto active" href="#hero">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="getstarted scrollto" href="#contact">
                Contact us
              </a>
            </li>
          </ul>
          <i
            className="bi bi-list mobile-nav-toggle"
            onClick={toggleMobileMenu}
          ></i>
        </nav>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu">
            <button className="close-btn" onClick={toggleMobileMenu}>
              &times;
            </button>
            <ul>
              <li>
                <a
                  className="nav-link scrollto active"
                  href="#hero"
                  onClick={toggleMobileMenu}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="nav-link scrollto"
                  href="#about"
                  onClick={toggleMobileMenu}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="nav-link scrollto"
                  href="#services"
                  onClick={toggleMobileMenu}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  className="getstarted scrollto"
                  href="#contact"
                  onClick={toggleMobileMenu}
                >
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
