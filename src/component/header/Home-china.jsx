import { Link } from "react-router-dom";
import HeaderChina from "./Header-china";

export default function HomeChina() {

  return (
    <div>
      <HeaderChina />
      <div className="container my-5">
        <div className="row justify-content-center my-5">
          <div className="col-md-6 shadow">
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
              經過 23 年的經驗積累，我們繼續努力擴大業務、產能並生產更優質的產品，現已成為領先的亞麻生產商和製造商之一
              </p>
              <Link to="/about" className="btn about mb-3">
              關於我們
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
