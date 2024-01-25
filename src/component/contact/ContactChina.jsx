import React from "react";
import { Link } from "react-router-dom";
import "./contact.css";
export default function ContactChina() {
  return (
    <div className="container">
      <div className="height"></div>
      <div className="products_title text-center mt-4 mb-5">
        <h1>聯絡我們</h1>
        <div className="title_line mb-3"></div>
        <div className="row justify-content-center my-5 ">
          <div className="col-md-10 shadow p-4 rounded contact-us">
            <div className="row ">
              <div className="col-md-6 align-self-center text-center ">
                <div className="bg-white shadow p-2 rounded d-flex justify-content-center my-3">
                  <table className="">
                    <tr className="">
                      <td>電子郵件</td>
                      <td>:</td>
                      <td>
                        <a
                          className="text-decoration-none"
                          href="mailto:Info@Egyptflax.com"
                        >
                          {" "}
                          Info@Egyptflax.com
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>電話</td>
                      <td>:</td>
                      <td>
                        <a
                          className="text-decoration-none"
                          href="tel:01090842621"
                        >
                          {" "}
                          +2001090929212
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>網站</td>
                      <td>:</td>
                      <td>
                        <a
                          className="text-decoration-none"
                          href="https://www.google.com"
                        >
                          {" "}
                          google.com
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>傳真</td>
                      <td>:</td>
                      <td>
                        <Link className="text-decoration-none">
                          {" "}
                          google.com
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>總公司</td>
                      <td>:</td>
                      <td>
                        <span> New Cairo</span>
                      </td>
                    </tr>
                    <tr>
                      <td>工廠</td>
                      <td>:</td>
                      <td>
                        {" "}
                        <span> shobramils - El Gharbia </span>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
              <div className="col-md-6">
                <div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13701.65511553942!2d31.18539313813618!3d30.847088314849465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7bee96630f295%3A0x4b596cc7b2e7e9be!2sShubra%20Milis%2C%20Shubra%20Melas%2C%20Zefta%2C%20Gharbia%20Governorate!5e0!3m2!1sen!2seg!4v1705929441331!5m2!1sen!2seg"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
