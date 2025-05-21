import React from "react";
import InnerContactForm from "./InnerContactForm";
import InnerContactInfo from "./InnerContactInfo";

const InnerContactArea = () => {
  return (
      <section className="inner-contact-area">
        <div className="container">
          <div className="inner-contact-wrap">
            <div className="row">
              <div className="col-xl-9 col-lg-10">
                <div className="section-title title-style-two mb-50">
                  <h2 className="title">
                    Have a <span>Cool Project?</span> Get in touch!
                  </h2>
                </div>

                <div className="inner-contact-form-wrap">
                  <InnerContactForm/>
                </div>

                <div id="contact-map">
                  <iframe
                      src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d12195.732488394015!2d-6.844663017808403!3d34.00975064645143!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sma!4v1746373005676!5m2!1sen!2sma"
                      allowFullScreen
                      loading="lazy"
                  />
                </div>

                <div className="inner-contact-info">
                  <InnerContactInfo/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};



export default InnerContactArea;
