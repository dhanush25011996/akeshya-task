"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { CountUp } from "countup.js";
import "./Count.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import countImage from "../../assets/img/counts-img.svg";

const Count = () => {
  const countRef = useRef(null);
  const counts = [
    {
      end: 3835039,
      label: "Organic Reach (Global)",
      icon: "bi bi-emoji-smile",
    },
    { end: 85, label: "Campaigns", icon: "bi bi-journal-richtext" },
    { end: 14081, label: "Watch Hours (Asia)", icon: "bi bi-clock" },
    { end: 17, label: "Excellent CTR % (Asia)", icon: "bi bi-globe" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            counts.forEach((count, index) => {
              const element = document.getElementById(`count-${index}`);
              if (element) {
                const countUp = new CountUp(element, count.end);
                if (!countUp.error) {
                  countUp.start();
                } else {
                  console.error(countUp.error);
                }
              }
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (observer && countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [counts]);

  return (
    <section id="counts" className="counts" ref={countRef}>
      <div className="container">
        <div className="row">
          <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start">
            <Image src={countImage} alt="count-img" className="img-fluid" />
          </div>

          <div className="col-xl-7 d-flex align-items-stretch pt-4 pt-xl-0">
            <div className="content d-flex flex-column justify-content-center">
              <div className="row">
                {counts.map((count, index) => (
                  <div
                    key={index}
                    className="col-md-6 d-md-flex align-items-md-stretch"
                  >
                    <div className="count-box">
                      <i className={count.icon}></i>
                      <span id={`count-${index}`} className="purecounter">
                        0
                      </span>
                      <p>
                        <strong>{count.label}</strong>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Count;
