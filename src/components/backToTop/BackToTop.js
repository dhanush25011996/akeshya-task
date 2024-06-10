"use client";
import React, { useEffect } from "react";
import "./BackToTop.css";

const BackToTop = () => {
  const handleScroll = () => {
    const backToTopButton = document.querySelector(".back-to-top");
    if (window.scrollY > 100) {
      backToTopButton.classList.add("active");
    } else {
      backToTopButton.classList.remove("active");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a
      href="#"
      className="back-to-top d-flex align-items-center justify-content-center"
      onClick={(e) => {
        e.preventDefault();
        scrollToTop();
      }}
    >
      <i className="bi bi-arrow-up-short"></i>
    </a>
  );
};

export default BackToTop;
