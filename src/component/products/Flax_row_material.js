import { useContext } from "react";
import { LangContext } from "../context/language";

const FlaxRowMaterial = (props) => {
  const { data } = props;
  const TypeOne = data[0];
  const TypeTwo = data[1];
  const { language } = useContext(LangContext);
  return (
    <div className="firstCatergoryContainer mt-4">
      <div className="firstCatergoryTitle mb-4">
        <h3>{TypeOne.header}</h3>
        <span> {TypeOne.types}</span>
        <div></div>
      </div>

      <div className="firstCatergoryContent mt-4 row justify-content-center gap-4 mx-auto">
        <div className=" col-11 col-lg-5">
          <div className="row categoryTypeTitleContainer">
            <div className="col-1 categoryTypeTitleNumber h-75">
              {TypeOne.id}
            </div>
            <div className="col-10 categoryTypeTitle">
              <h5>{TypeOne.title}</h5>
              <span> {TypeOne.comming}</span>
            </div>
          </div>
          <h6 style={{ color: "white" }} className="mt-2">
            n
          </h6>

          <div className="row mt-4 categoryTypeContent">
            <div className="col-12 col-md-9 categoryTypeContentImg">
              <img src={TypeOne.image} alt="flaxProduct" className="rounded" />
            </div>
            <div className="col-10 col-md-2 mt-2 mt-md-0 categoryTypeContentUses">
              <h5>{language === "en" ? "Uses" : "用途"}</h5>

              <ul>
                {TypeOne.use.map((u, i) => (
                  <li key={i}>{u}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-11 col-lg-5">
          <div className="row categoryTypeTitleContainer">
            <div className="col-1 categoryTypeTitleNumber h-75">
              {TypeTwo.id}
            </div>
            <div className="col-10 categoryTypeTitle">
              <h5>{TypeTwo.title}</h5>
              <span>{TypeTwo.comming}</span>
            </div>
          </div>
          {TypeTwo.types.map((product) => (
            <div div key={product.id} className="mt-2">
              <h6 className="categoryTypeTitleTwo">{product.title}</h6>
              <div className="row mt-4 categoryTypeContent">
                <div className="col-12 col-md-9 categoryTypeContentImg">
                  <img
                    src={product.image}
                    alt="flaxProduct"
                    className="rounded"
                  />
                </div>
                <div className="col-10 col-md-3 mt-2 categoryTypeContentUses">
                  <h5>{language === "en" ? "Uses" : "用途"}</h5>
                  <ul>
                    {product.use.map((u, i) => (
                      <li key={i}>{u}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlaxRowMaterial;
