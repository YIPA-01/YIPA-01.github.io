import React from "react";
import { useLocation, useParams } from "react-router-dom";
import CounterWrapFour from "../CounterArea/CounterWrapFour";

const ProjectDetailsArea = () => {
  const location = useLocation();
  const { projectSlug } = useParams();
  const project = location.state?.project;

  if (!project) {
    return (
      <section className="project-details-area pt-40 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="project-details-inner">
                <h2>Project not found</h2>
                <p>Unable to find project: {projectSlug}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="project-details-area pt-40 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="project-details-inner">
              <div className="project-details-img">
                <img src={project.src} alt={project.title} />
              </div>
              <div className="project-details-content">
                <h2 className="title">{project.title}</h2>
                <p>{project.desc}</p>
              </div>

              <div className="row align-items-center">
                <div className="col-lg-12">
                  {/* counter wrap four */}
                  {/* <CounterWrapFour /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="project-shape-wrap">
        <img src="/img/images/services_details_shape.png" alt="" />
      </div>
    </section>
  );
};

export default ProjectDetailsArea;
