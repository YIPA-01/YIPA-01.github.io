import React from "react";
import { Link } from "react-router-dom";

const FooterTwo = () => {
  return (
    <footer>
      <div className="footer-area-two">
        <div className="container">
          <div className="footer-top-two">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-8">
                <div className="footer-content-two text-center">
                  <div className="logo">
                    <Link to="/">
                      <img src="/img/logo/bend-high-resolution-logo-transparent.png" alt="" />
                    </Link>
                  </div>
                  <p>
                    I am designing and building
                    beautiful digital products, brands, and experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom-two">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="copyright-text">
                  <p>© 2025, Yahyani Reda.</p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="footer-social-two">
                  <ul className="list-wrap">

                    <li>
                      <a href="#">
                        <img src="/img/icon/footer_icon01.png" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/img/icon/footer_icon02.png" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/img/icon/footer_icon03.png" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/img/icon/footer_icon04.png" alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;
