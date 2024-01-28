import { useState,useContext, useEffect } from "react";
import { LangContext } from "../context/language";
import AOS from 'aos';
import 'aos/dist/aos.css';
const PlumbingFlax = (props) => {
  const {data}=props;
  const TypeOne = data[0];
  const TypeTwo = data[1];
  const [mainImage, setMainImage] = useState(data[1].image[0]);
  const [smallImage, setSmallImage] = useState(data[1].image[1]);
  const { language } = useContext(LangContext);
  useEffect(()=>{
    AOS.init({
      duration:"1000"
    })
  })

  const handleSmallImageClick = (image) => {
    setMainImage(image);
    setSmallImage(mainImage);
  };
  return (
    <div className="firstCatergoryContainer mt-4">
      <div className="firstCatergoryTitle mb-4" data-aos="fade-right">
        <h3>{TypeOne.header}</h3>
        <span> {TypeOne.types} </span>
        <div></div>
      </div>

      <div className="firstCatergoryContent mt-4 row justify-content-center gap-4 mx-auto">
        <div className=" col-11 col-lg-5"data-aos="fade-top" >
          <div className="row categoryTypeTitleContainer">
            <div className="col-10 categoryTypeTitle">
              <h5>{TypeOne.title}</h5>
            </div>
          </div>

          <div className="row mt-4 categoryTypeContent">
            <div className="col-12 col-md-9 categoryTypeContentImg">
              <img
                src={TypeOne.image}
                alt="flaxProduct"
                className="rounded"
              />
            </div>
            <div className="col-10 col-md-2 mt-2 categoryTypeContentUses">
            <h5>{language === "en" ? "Usages" : "用法"}</h5>
              <ul>
                <li>{TypeOne.use}</li>
              </ul>
            </div>
          </div>
          <p className="CategoryTwoDescribtion w-75">{TypeOne.description}</p>

        </div>
        <div className=" col-11 col-lg-5" data-aos="fade-down">
          <div className="row categoryTypeTitleContainer">
            <div className="col-10 categoryTypeTitle">
              <h5>{TypeTwo.title}</h5>
            </div>
          </div>

          <div className="row mt-4 categoryTypeContent">
            <div className="col-12 col-md-9 categoryTypeContentImg">
              <img src={mainImage} alt="flaxProduct" className="rounded" />
            </div>
            <div className="col-10 col-md-2 mt-2 categoryTypeContentUses">
            <h5>{language === "en" ? "Usages" : "用法"}</h5>
              <ul>
                <li>{TypeTwo.use}</li>
              </ul>
              <div>
                <img
                  src={smallImage}
                  alt="flaxProduct"
                  className="rounded"
                  style={{ cursor: "pointer" }}
                  width={"60px"}
                  onClick={() => handleSmallImageClick(smallImage)}
                />
              </div>
            </div>
          </div>
          <p className="CategoryTwoDescribtion w-75">{TypeTwo.description}</p>
        </div>
      </div>
    </div>
  );
};

export default PlumbingFlax;
