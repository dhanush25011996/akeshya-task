import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-title">
          <h2>Our Core Features</h2>
          <p>
            Akeshya is a forward-thinking and intelligent design firm that is
            technically and creatively capable of transforming your brand into
            its best digital self. Our approach to design and development
            results in compelling, engaging branding and immersive digital
            experiences that provide a value for money.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="icon-box">
              <i className="ri-window-line" style={{ color: "#ffbb2c" }}></i>
              <h3>
                <a href="">Web design</a>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
            <div className="icon-box">
              <i className="ri-code-box-line" style={{ color: "#5578ff" }}></i>
              <h3>
                <a href="">Development</a>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
            <div className="icon-box">
              <i
                className="ri-creative-commons-by-line"
                style={{ color: "#e80368" }}
              ></i>
              <h3>
                <a href="">Branding</a>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
            <div className="icon-box">
              <i
                className="ri-play-circle-line"
                style={{ color: "#e361ff" }}
              ></i>
              <h3>
                <a href="">Media buying</a>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i
                className="ri-search-eye-line"
                style={{ color: "#47aeff" }}
              ></i>
              <h3>
                <a href="">Search engine</a>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i className="ri-todo-line" style={{ color: "#ffa76e" }}></i>
              <h3>
                <a href="">Brand strategy</a>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i className="ri-map-pin-line" style={{ color: "#dbce11" }}></i>
              <h3>
                <a href="">Local search marketing</a>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i
                className="ri-bar-chart-grouped-line"
                style={{ color: "#4233ff" }}
              ></i>
              <h3>
                <a href="">Lead Tracking &amp; Management </a>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i
                className="ri-contacts-book-line"
                style={{ color: "#b2904f" }}
              ></i>
              <h3>
                <a href="">Contact management</a>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i className="ri-disc-line" style={{ color: "#b20969" }}></i>
              <h3>
                <a href="">Media management</a>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i
                className="ri-calendar-event-line"
                style={{ color: "#ff5828" }}
              ></i>
              <h3>
                <a href="">Social scheduling</a>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i
                className="ri-advertisement-fill"
                style={{ color: "#29cc61" }}
              ></i>
              <h3>
                <a href="">Ad retargeting</a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
