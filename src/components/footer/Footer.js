import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div class="container">
        <div class="d-flex justify-content-between">
          <div class="Copyright">
            © Copyright <strong>Akeshya</strong>. All Rights Reserved
          </div>
          <div>
            <ul class=" d-flex list-unstyled">
              <li class="px-3">
                <a
                  href="https://akeshya.com/Terms%20and%20conditions.pdf"
                  target="__blank"
                >
                  Terms and conditions
                </a>
              </li>
              <li class="px-3">
                <a
                  href="https://akeshya.com/Refund%20policy.pdf"
                  target="__blank"
                >
                  Refund policy
                </a>
              </li>
              <li class="px-3">
                <a
                  href="https://akeshya.com/Privacy%20policy.pdf"
                  target="__blank"
                >
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
