import React from "react";
import "./Hero.css";

import HeroImage from "../../assets/img/hero-img.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="hero" class="d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1>Grow your business with Akeshya</h1>
            <h2>
              We are team of talented website designers, developers &amp;
              digital marketeers
            </h2>
            <div>
              <a href="#about" className="btn-get-started scrollto">
                Get Started
              </a>
            </div>
          </div>
          <div class="col-lg-6 order-1 order-lg-2 hero-img">
            <Image
              src={HeroImage}
              className="img-fluid animated"
              alt="HeroImage"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
