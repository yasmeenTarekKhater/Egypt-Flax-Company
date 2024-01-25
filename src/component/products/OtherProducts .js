const OtherProducts = (props) => {
  const { data } = props;
  return (
    <div className="firstCatergoryContainer mt-4">
      <div className="firstCatergoryTitle mb-4">
        <h3>{data.title}</h3>
        <div></div>
      </div>
      <div className="col-1 categoryTypeTitleNumber h-75">{data.id}</div>
      <div className="firstCatergoryContent mt-4 mx-auto">
        <div className="mt-4 categoryTypeContent">
          <div className="row mt-4 categoryTypeContent justify-content-center">
            <div className="col-10 col-lg-5 categoryTypeContentImg">
              {data.image.map((img) => (
                <img src={img} alt="flaxProduct" className="rounded" />
              ))}
            </div>
            <div className="col-10 col-lg-6 d-flex my-auto categoryTypeContentUses">
              <p className="w-75 w-lg-75 m-auto mt-3 mt-lg-0">{data.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherProducts;
