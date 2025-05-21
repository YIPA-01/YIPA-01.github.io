import React from "react";
import { Link } from "react-router-dom";

const PricingArea = () => {
  return (
    <section className="pricing-area pb-90">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="section-title title-style-two text-center white-title mb-50">
              <h2 className="title">The Right Plan for Your Business</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing sed do
                eiusmod tempor incididunt labore
              </p>
            </div>
          </div>
        </div>

        <div className="pricing-item-wrap">

          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane show active"
              id="month"
              role="tabpanel"
              aria-labelledby="month-tab"
            >
              <div className="row g-0 align-items-center justify-content-center">
                <div className="col-lg-4 col-md-6">
                  <div className="pricing-item">
                    <div className="pricing-icon">
                      <img src="/img/icon/pricing_icon01.png" alt="" />
                    </div>
                    <div className="pricing-top">
                      <h2 className="title">Professional</h2>
                      <p>Your website is the first impression you make online.</p>
                    </div>
                    <div className="pricing-price">
                      <h2 className="price">
                        <span>$</span>270
                      </h2>
                    </div>
                    <div className="pricing-list">
                      <h4 className="title">Everything in Starter</h4>
                      <ul className="list-wrap">
                        <li>
                          <i className="far fa-check"></i>3 pages
                        </li>
                        <li>
                          <i className="far fa-check"></i>1 Year of Web Hosting
                        </li>
                        <li>
                          <i className="far fa-check"></i>Local Search Engine Optimization
                        </li>
                        <li>
                          <i className="far fa-check"></i>Domain Name
                        </li>
                        <li>
                          <i className="far fa-times text-danger"></i>Mobile-Friendly
                        </li>

                      </ul>
                    </div>
                    <div className="pricing-btn">
                      <Link to="/contact" className="btn">
                        Select This Plan
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="pricing-item active">
                    <div className="pricing-icon">
                      <img src="/img/icon/pricing_icon02.png" alt="" />
                    </div>
                    <div className="pricing-top">
                      <h2 className="title">Business</h2>
                      <p>Don't get left behind. Embrace software to innovate</p>
                    </div>
                    <div className="pricing-price">
                      <h2 className="price">
                        <span>$</span>540
                      </h2>
                    </div>
                    <div className="pricing-list">
                      <h4 className="title">Everything in Starter</h4>
                      <ul className="list-wrap">
                        <li>
                          <i className="far fa-check"></i>Up to 7 pages
                        </li>
                        <li>
                          <i className="far fa-check"></i>1 Year of Web Hosting
                        </li>
                        <li>
                          <i className="far fa-check"></i>Local Search Engine Optimization
                        </li>
                        <li>
                          <i className="far fa-check"></i>Domain Name
                        </li>
                        <li>
                          <i className="far fa-check"></i>Mobile-Friendly
                        </li>
                      </ul>
                    </div>
                    <div className="pricing-btn">
                      <Link to="/contact" className="btn">
                        Select This Plan
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="pricing-item">
                    <div className="pricing-icon">
                      <img src="/img/icon/pricing_icon03.png" alt="" />
                    </div>
                    <div className="pricing-top">
                      <h2 className="title">Enterprise</h2>
                      <p>It´s complicated ?</p>
                    </div>
                    <div className="pricing-price">
                      <h2 className="price">
                        Let's Talk
                      </h2>
                    </div>
                    <div className="pricing-list">

                      <ul className="list-wrap">
                        <li>

                        </li>
                        <li>

                        </li>


                      </ul>
                    </div>
                    <div className="pricing-btn">
                      <Link to="/contact" className="btn">
                        Select This Plan
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingArea;
