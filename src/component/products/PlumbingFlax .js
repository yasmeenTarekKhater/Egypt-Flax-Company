import { useState } from "react";
const PlumbingFlax = (props) => {
  const {data}=props;
  const TypeOne = data[0];
  const TypeTwo = data[1];
  const [mainImage, setMainImage] = useState(data[1].image[0]);
  const [smallImage, setSmallImage] = useState(data[1].image[1]);

  const handleSmallImageClick = (image) => {
    setMainImage(image);
    setSmallImage(mainImage);
  };
  return (
    <div className="firstCatergoryContainer mt-4">
      <div className="firstCatergoryTitle mb-4">
        <h3>Plumbing flax</h3>
        <span> we have two types </span>
        <div></div>
      </div>

      <div className="firstCatergoryContent mt-4 row justify-content-center gap-4 mx-auto">
        <div className=" col-11 col-lg-5">
          <div className="row categoryTypeTitleContainer">
            <div className="col-1 categoryTypeTitleNumber h-75">{TypeOne.id}</div>
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
              <h6>Uses</h6>
              <ul>
                <li>{TypeOne.use}</li>
              </ul>
            </div>
          </div>
          <p className="CategoryTwoDescribtion">{TypeOne.description}</p>

        </div>
        <div className=" col-11 col-lg-5">
          <div className="row categoryTypeTitleContainer">
            <div className="col-1 categoryTypeTitleNumber h-75">{TypeTwo.id}</div>
            <div className="col-10 categoryTypeTitle">
              <h5>{TypeTwo.title}</h5>
            </div>
          </div>

          <div className="row mt-4 categoryTypeContent">
            <div className="col-12 col-md-9 categoryTypeContentImg">
              <img src={mainImage} alt="flaxProduct" className="rounded" />
            </div>
            <div className="col-10 col-md-2 mt-2 categoryTypeContentUses">
              <h6>Uses</h6>
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
          <p className="CategoryTwoDescribtion">{TypeTwo.description}</p>
        </div>
      </div>
    </div>
  );
};

export default PlumbingFlax;
