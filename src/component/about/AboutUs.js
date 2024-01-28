import AboutUsCard from "./AboutUsCard";
import "./AboutUs.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const AboutUs = () => {
  const aboutcontent = [
    "Worked hard with a growing passion for the industry and started developing our factory and business, many years after starting we develop machines and our products.",
    "Continued after 23 years of experience with our hard work and efforts to enlarge our business, capacity and produce better quality products to be -now- one of the leading producers and manufacturers of flax.",
    "Have an immense amount of experience formed over years of manufacturing flax products and continue to expand our practices every day.",
  ];
  useEffect(()=>{
    AOS.init({
      duration:"1000"
    })
  })
  return (
    <div className="container mb-5">
      <div className="height"></div>
      <div className="products_title text-center mt-4 mb-5">
        <h1 data-aos="fade-down">About Us</h1>
        <div className="title_line mb-3"></div>
        <p className="w-75 mx-auto mt-4 AboutUsTitleP fw-bold" data-aos="fade-right">
          We are<span className="aboutUsCompanyName"> Egypt Flax </span>company  working in the business of flax since 2001
          with a wide experience in production, import and export. We have been
          a part of flax industry since 2001, when we started our business as
          Egypt Flax with few machines.
        </p>
      </div>
      <div className="row AboutUsCard justify-content-center">
        <AboutUsCard data={aboutcontent[0]} imgsrc={"./images/struggle.png"} />
        <div className="mt-5 d-lg-none"></div>
        <AboutUsCard data={aboutcontent[1]} imgsrc={"./images/quality.png"} />
        <AboutUsCard data={aboutcontent[2]} imgsrc={"./images/linum (1).png"} />
      </div>
    </div>
  );
};

export default AboutUs;
