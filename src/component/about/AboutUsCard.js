import { useContext } from "react";
import { LangContext } from "../context/language";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const AboutUsCard = (props) => {
  const {language}=useContext(LangContext);
  useEffect(()=>{
    AOS.init({
      duration:"1000"
    })
  })
  return (
    <div className="col-11 col-md-9 col-lg-4 mt-5 mt-lg-0 mb-5" data-aos="fade-right">
      <div className="mainAbouUs">
        <div className="serviceAbouUs">
          <div className="service-logoAbouUs">
            <img src={props.imgsrc} alt="logo" />
          </div>
          <h4>{language==="en"?"We":"我們"}</h4>
          <p>{props.data}</p>
        </div>
        <div className="shadow1AbouUs"></div>
        <div className="shadow2AbouUs"></div>
      </div>
    </div>
  );
};

export default AboutUsCard;
