import React, { useState } from "react";
import ProjectAreaTwoItem from "./ProjectAreaTwoItem";
import cn from "classnames";
import { useNavigate } from "react-router-dom";

const ProjectAreaTwo = () => {
  const navigate = useNavigate();
  const project_items = [
    {
      url: "/project-details",
      src: "/img/project/DMC/Screenshot 2025-05-04 at 14.53.53.png",
      title: "Dentist Management System",
      desc: "This project is a dentist management system that allows dentists to manage their patients, appointments, and other data.",
      className: "cat-one",
    },
    {
      url: "/project-details",
      src: "/img/project/AOP/Screenshot 2025-01-28 at 19.26.25.png",
      title: "Academic Orientation platform",
      desc: "This project is a platform that allows students to get information about the university and the courses they offer.",
      className: "cat-two",
    },
    {
      url: "/project-details",
      src: "/img/project/ERP/Screenshot 2025-05-04 at 14.57.21.png",
      title: "Entreprise resource Planning",
      desc: "This project is a platform that allows companies to manage their resources and their employees.",
      className: "cat-two cat-one",
    },
    {
      url: "/project-details",
      src: "img/project/RMS/Screenshot 2025-01-28 at 19.36.36.png",
      title: "Restaurant Management System",
      desc: "This project is a platform that allows restaurants to manage their customers, orders, and other data.",
      className: "cat-three",
    },
 
  ];

  const filters = [
    {
      filter: "*",
      label: "View All",
    },
    {
      filter: "cat-one",
      label: "App",
    },
    {
      filter: "cat-two",
      label: "Website",
    },
    {
      filter: "cat-three",
      label: "Landing Page",
    }
  ];

  const [selectedFilter, setSelectedFilter] = useState("*");

  const [items, setItems] = useState(project_items);

  const handleFilterChange = (filter) => {
    const newItems = project_items.filter((el) =>
      el.className.split(" ").includes(filter)
    );
    setSelectedFilter(filter);
    setItems(filter === "*" ? project_items : newItems);
  };

  const handleProjectClick = (project) => {
    const projectSlug = project.title.toLowerCase().replace(/\s+/g, '-');
    navigate(`/project-details/${projectSlug}`, { state: { project } });
  };

  return (
    <section className="project-area-two pt-110 pb-90">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-9">
            <div className="section-title title-style-two white-title mb-60 text-center">
              <span className="sub-title">Portfolio</span>
              <h2 className="title">You Will Like These Projects Made by Me</h2>
              <p>
                Here are some of the projects I have worked on. I have worked on these projects using different technologies and frameworks.
              </p>
            </div>
          </div>
        </div>

        <div className="project-item-wrap">
          <div className="row">
            <div className="col-lg-12">
              <div className="project-menu-nav">
                {filters.map((x, index) => (
                  <button
                    key={index}
                    className={x.filter === selectedFilter ? "active" : ""}
                    data-filter={x.filter}
                    onClick={() => handleFilterChange(x.filter)}
                  >
                    {x.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="row project-active-two">
            {items.map((x, index) => (
              <div
                key={index}
                className={cn(
                  "col-lg-6 col-md-6 grid-item grid-sizer wow fadeInUp",
                  x.className
                )}
                onClick={() => handleProjectClick(x)}
                style={{ cursor: 'pointer' }}
              >
                <ProjectAreaTwoItem item={x} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="project-shape">
        <img src="/img/project/h2_project_shape.png" alt="" />
      </div>
    </section>
  );
};

export default ProjectAreaTwo;
