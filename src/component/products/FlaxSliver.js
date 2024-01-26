import { useContext, useEffect } from "react";
import { LangContext } from "../context/language";
import AOS from 'aos';
import 'aos/dist/aos.css';
const FlaxSliver = (props) => {
  const { data } = props;
  const { language } = useContext(LangContext);
  useEffect(()=>{
    AOS.init({
      duration:"1000"
    })
  })
  return (
    <div className="firstCatergoryContainer mt-4">
      <div className="firstCatergoryTitle mb-4" data-aos="fade-right">
        <h3>{data[0].header}</h3>
        <span>{data[0].types}</span>
        <div></div>
      </div>
      <div className="firstCatergoryContent mt-4 row justify-content-center gap-4  mx-auto">
        {data.map((product) => {
          return (
            <div className=" col-11 col-lg-5" key={product.id} data-aos="fade-right">
              <div className="row categoryTypeTitleContainer">
                <div className="col-1 categoryTypeTitleNumber h-75">
                  {product.id}
                </div>
                <div className="col-10 categoryTypeTitle">
                  <h5>{product.title}</h5>
                </div>
              </div>
              <div className="row mt-4 categoryTypeContent">
                <div className="col-12 col-md-9  categoryTypeContentImg">
                  <img
                    src={product.image}
                    alt="flaxProduct"
                    className="rounded"
                  />
                </div>
                <div className=" col-10 col-md-2 mt-2 mt-md-0 categoryTypeContentUses">
                  <h5>{language === "en" ? "Uses" : "用途"}</h5>
                  <ul>
                    <li>{product.use}</li>
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FlaxSliver;
