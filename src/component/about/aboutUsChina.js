import AboutUsCard from "./AboutUsCard";
import "./AboutUs.css";
const AboutUsChina = () => {
  const aboutcontent = [
    "以對行業不斷增長的熱情努力工作，並開始發展我們的工廠和業務，在我們開始開發機器和產品多年後.",
    "經過 23 年的辛勤工作和努力，繼續擴大我們的業務、產能並生產更優質的產品，現已成為領先的亞麻生產商和製造商之一.",
    "擁有多年製造亞麻產品的豐富經驗，並且每天不斷擴展我們的實踐.",
  ];
  return (
    <div className="container mb-5">
      <div className="height"></div>
      <div className="products_title text-center mt-4 mb-5">
        <h1>關於我們</h1>
        <div className="title_line mb-3"></div>
        <p className="w-75 mx-auto mt-4 AboutUsTitleP fw-bold">
        我們是<span className="aboutUsCompanyName"> 埃及亞麻 </span>本公司自2001年起從事亞麻業務，在生產、進出口方面擁有豐富的經驗。 自 2001 年起，我們就開始涉足亞麻行業，當時我們以很少的機器開始了埃及亞麻業務.
        </p>
      </div>
      <div className="row AboutUsCard justify-content-center">
        <AboutUsCard data={aboutcontent[0]} imgsrc={"./images/struggle.png"} />
        <div className="mt-5 d-lg-none"></div>
        <AboutUsCard data={aboutcontent[1]} imgsrc={"./images/quality.png"} />
        <AboutUsCard data={aboutcontent[2]} imgsrc={"./images/linum (1).png"} />
      </div>
    </div>
  );
};

export default AboutUsChina;
