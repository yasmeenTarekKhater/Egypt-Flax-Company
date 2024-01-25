import { Link } from "react-router-dom";
import Header from "./Header";

export default function Home() {
 
  return (
    <div>
      <Header />
      <div className="container my-5">
        <div className="row justify-content-center my-5">
          <div className="col-md-6 shadow">
            <div className="text-center  p-4">
              <p className="welcome col-10 ">
                
                Welcome to Egypt flax, The major company in the flax industry
              </p>
              <p className="welcome-p">
                We introduce a variety of heigh quality flax fiber in Egypt<br/>
                “Flax raw material – Plumbing flax – Flax spools – Flax sliver –
                flax waste – Cottonseed flax – Flax yarn & twines “<br/> Please,
                don’t hesitate to contact us if you need any assistant
              </p>
              <Link className="btn contact" to="/contact">
                Contact us
              </Link>
            </div>
          </div>
        </div>
        <div className="row justify-content-center home-about-translat">
          <div className="col-md-6 text-center home-about shadow">
            <div className="translate-middle-y my-0 py-0">
              <img
                src={"./images/group.png"}
                alt=""
                className="rounded-circle col-2 shadow p-2 bg-white"
              />
            </div>
            <div className="mt-0 pt-0 px-4">
              <p className="about-p">
                We continued after 23 years of experience with our hard work and
                efforts to enlarge our business, capacity and producing better
                quality products to be -now- one of the leading producers and
                manufacturers of flax
              </p>
              <Link to="/about" className="btn about mb-3">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
