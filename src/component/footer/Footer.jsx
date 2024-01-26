import React, { useEffect } from "react";
import "./footer.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Footer() {
  useEffect(()=>{
    AOS.init({
      duration:"1000"
    })
  })
  return (
    <>
      <div className="w-100 mx-auto mt-5">
        <footer class="footer-background text-center text-white">
          <img
            src="./images/FlaxEgyptFinal_-removebg-preview.png"
            width={"150px"}
            alt="logo"
            data-aos="zoom-in"
          />
          <hr className="w-75 mx-auto"></hr>
          <div class="text-center p-3 font-b" style={{color:'var(--blue3)'}}>
           <span>© 2024 Copyright:</span><span> </span>
            <a class="text-white" href="/">
              Egypt Flax.com
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
