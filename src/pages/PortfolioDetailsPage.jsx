import React from "react";
import { useLocation } from "react-router-dom";
import BreadcrumbArea from "../components/BreadcrumbArea/BreadcrumbArea";
import CompanyArea from "../components/CompanyArea/CompanyArea";
import NewsLetterArea from "../components/NewsLetter/NewsLetterArea";
import ProjectDetailsArea from "../components/Project/ProjectDetailsArea";
import InnerServiceAreaTwo from "../components/ServicesArea/InnerServiceAreaTwo";
import Layout from "../layouts/Layout";

const PortfolioDetailsPage = () => {
  const location = useLocation();
  const project = location.state?.project;

  return (
    <Layout header={1} footer={1} className="" mainClassName="">
      <BreadcrumbArea
        title={project?.title || "Portfolio Details"}
        subtitle={project?.title || "Portfolio Details"}
        className={"breadcrumb-area-two pt-175"}
        showShape={false}
      />
      <ProjectDetailsArea />
      {/* <CompanyArea />
      <InnerServiceAreaTwo />
      <NewsLetterArea /> */}
    </Layout>
  );
};

export default PortfolioDetailsPage;
