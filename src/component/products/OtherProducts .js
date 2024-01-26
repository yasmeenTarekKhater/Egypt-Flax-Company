import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const OtherProducts = (props) => {
  const { data } = props;
  useEffect(()=>{
    AOS.init({
      duration:"1000"
    })
  })
  return (
    <div className="firstCatergoryContainer mt-4">
      <div className="firstCatergoryTitle mb-4" data-aos="fade-right">
        <h3>{data.title}</h3>
        <div></div>
      </div>
      <div className="col-1 categoryTypeTitleNumber h-75">{data.id}</div>
      <div className="firstCatergoryContent mt-4 mx-auto"data-aos={`fade-${props.dirction}`} >
        <div className="mt-4 categoryTypeContent">
          <div className="row mt-4 categoryTypeContent justify-content-center">
            <div className="col-10 col-lg-4 categoryTypeContentImg">
              {data.image.map((img) => (
                <img src={img} alt="flaxProduct" className="rounded" key={img} />
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
