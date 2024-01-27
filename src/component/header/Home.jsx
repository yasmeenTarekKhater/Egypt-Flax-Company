import { Link } from "react-router-dom";
import Header from "./Header";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Home() {
  useEffect(()=>{
    AOS.init({
      duration:"1000"
    })
  })
  return (
    <div>
      <Header />
      <div className="container my-5">
        <div className="row justify-content-center my-5"  data-aos="flip-left">
          <div className="col-md-8 welcomeContainer"  >
            <div className="text-center  p-4">
              <p className="welcome col-10 ">
                
                Welcome to Egypt flax, The major company in the flax industry
              </p>
              <p className="welcome-p">
                We introduce a variety of high quality flax fiber in Egypt<span> </span>
                “Flax raw material , Plumbing flax , Flax spools , Flax sliver ,
                flax waste , Cottonised flax , Flax yarn & twines “<br/> Please,
                don’t hesitate to contact us if you need any assistance
              </p>
              <Link className="btn contact" to="/contact">
                Contact us
              </Link>
            </div>
          </div>
        </div>
        
        
        <div className="row justify-content-center my-5 " data-aos="flip-right">
          <div className="col-lg-8 col-md-9  p-5 shadow">
            <div className="row">
              <div className="col-md-5 ">
                <div className="">
                  <img src="./images/product2-1.jpg" className="w-100  rounded-3 shadow" alt="aboutus" />
                </div>
              </div>
              <div className="col-md-7 align-self-center">
                <div className="">
                  <p className="about-p">
                    We continued after 23 years of experience with our hard work
                    and efforts to enlarge our business, capacity and producing
                    better quality products to be -now- one of the leading
                    producers and manufacturers of flax
                  </p>
                  <Link to="/about" className="btn about ">
              About Us
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
