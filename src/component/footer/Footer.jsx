import React from "react";
import "./footer.css";
export default function Footer() {
  return (
    <>
      <div className="w-100 mx-auto mt-5">
        <footer class="footer-background text-center text-white">
          <img src="./images/FlaxEgyptFinal_-removebg-preview.png" width={"150px"} alt="logo"/>
          <div class="container  pb-0">
            <section class="mb-4">
              <a
                class="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: "#3b5998;" }}
                href="#!"
                role="button"
              >
                <i class="fab fa-facebook-f"></i>
              </a>

              <a
                class="btn btn-primary btn-floating m-1"
                style={{backgroundColor: "#55acee;"}}
                href="#!"
                role="button"
              >
                <i class="fab fa-twitter"></i>
              </a>

              <a
                class="btn btn-primary btn-floating m-1"
                style={{backgroundColor: "#dg4b39;"}}
                href="#!"
                role="button"
              >
                <i class="fab fa-google"></i>
              </a>

              <a
                class="btn btn-primary btn-floating m-1"
                style={{backgroundColor: "#ac2bac;"}}
                href="#!"
                role="button"
              >
                <i class="fab fa-instagram"></i>
              </a>
            </section>
          </div>
<hr className="w-75 mx-auto"></hr>
          <div
            class="text-center p-3"
            style={{backgrounColor:"rgba(0, 0, 0, 0.2)"}}
          >
            © 2024 Copyright:
            <a class="text-white" href="https://mdbootstrap.com/">
             Egypt Flax.com
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
