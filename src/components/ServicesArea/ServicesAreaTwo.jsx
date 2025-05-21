import React from "react";
import ServicesAreaTwoItem from "./ServicesAreaTwoItem";

const ServicesAreaTwo = () => {
  const services_two_items = [
    {
      src: "/img/icon/services_icon01.png",
      url: "",
      title: "UI Design",
      desc: "\"Design is not just how it looks and feels. Design is how it works.\" - Steve Jobs",
    },

    {
      src: "/img/icon/services_icon03.png",
      url: "",
      title: "Prototype",
      desc: "Let's build something real, together. One prototype at a time.",
    },
    {
      src: "/img/icon/services_icon04.png",
      url: "",
      title: "Code",
      desc: "First, solve the problem. Then, write the code.",
    },
  ];

  return (
    <section className="services-area-two">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title title-style-two white-title mb-65 text-center">
              <span className="sub-title">What I Do</span>
              <h2 className="title">What Service Do I Provide</h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {services_two_items.map((x, index) => (
            <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
              <ServicesAreaTwoItem item={x} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesAreaTwo;
