import React from "react";
import Image from "next/image";
import "./Client.css";

//import images
import client1image from "../../assets/img/client-1.png";
import client2image from "../../assets/img/client-2.png";
import client3image from "../../assets/img/client-3.png";
import client4image from "../../assets/img/client-4.png";
import client5image from "../../assets/img/client-5.png";
import client6image from "../../assets/img/client-6.png";

const Client = () => {
  return (
    <section id="clients" className="clients">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-4 col-6">
            <Image src={client1image} className="img-fluid " />
          </div>

          <div className="col-lg-2 col-md-4 col-6">
            <Image src={client2image} className="img-fluid " />
          </div>

          <div className="col-lg-2 col-md-4 col-6">
            <Image src={client3image} className="img-fluid " />
          </div>

          <div className="col-lg-2 col-md-4 col-6">
            <Image src={client4image} className="img-fluid " />
          </div>

          <div className="col-lg-2 col-md-4 col-6">
            <Image src={client5image} className="img-fluid " />
          </div>

          <div className="col-lg-2 col-md-4 col-6">
            <Image src={client6image} className="img-fluid " />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client;
