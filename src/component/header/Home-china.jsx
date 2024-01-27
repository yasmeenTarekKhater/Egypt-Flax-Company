import { Link } from "react-router-dom";
import HeaderChina from "./Header-china";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
export default function HomeChina() {
  useEffect(()=>{
    AOS.init({
      duration:"1000"
    })
  })
  return (
    <div>
      <HeaderChina />
      <div className="container my-5">
        <div className="row justify-content-center my-5" data-aos="flip-left">
          <div className="col-md-8 welcomeContainer" >
            <div className="text-center  p-4">
              <p className="welcome col-10 ">
                歡迎來到埃及亞麻，亞麻行業的主要公司
                
              </p>
              <p className="welcome-p">
                
              我們在埃及引進各種高品質亞麻纖維「亞麻原料 - 水暖亞麻 - 亞麻線軸 - 亞麻條 - 亞麻廢料 - 棉籽亞麻 - 亞麻紗線和麻線」 如果您需要任何幫助，請隨時與我們聯繫
              </p>
              <Link className="btn contact" to="/contact">
              聯絡我們
              </Link>
            </div>
          </div>
        </div>
        
        <div className="row justify-content-center my-5 " data-aos="flip-right">
          <div className="col-lg-8 col-md-9  p-5 shadow">
            <div className="row">
              <div className="col-md-5 ">
                <div className="">
                  <img src="./images/product2-1.jpg" className="w-100" alt="aboutus" />
                </div>
              </div>
              <div className="col-md-7 align-self-center">
                <div className="">
                  <p className="about-p">
                  經過 23 年的經驗積累，我們繼續努力擴大業務、產能並生產更優質的產品，現已成為領先的亞麻生產商和製造商之一
                  </p>
                  <Link to="/about" className="btn about ">
                  關於我們
            </Link>
                </div>
              </div>

            </div>

            
          </div>
        </div>
        
      
      </div>
    </div>
  );
}
