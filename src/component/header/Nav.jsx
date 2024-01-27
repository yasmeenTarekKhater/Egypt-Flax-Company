import React, { useContext ,useEffect} from "react";
import { Link, NavLink } from "react-router-dom";
import { LangContext } from "../context/language";
import "./home.css";
export default function Nav() {
  let {language,setLanguage}=useContext(LangContext);
  useEffect(() => {
  }, [language])
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
              <img src="./images/FlaxEgyptFinal.png"  className="logo " alt="logo" />
              <span className="companyName">Egypt Flax</span>
          </Link>
         
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                {language==='en'?'Egypt Flax':'埃及亞麻'}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav-link active mx-lg-2" : "nav-link mx-lg-2"
                    }
                    aria-current="page"
                    to="/"
                  >
                    {language==='en'?'Home':'家'}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav-link mx-lg-2 active" : "nav-link mx-lg-2"
                    }
                    to="./products"
                  >
                    {language==='en'?'Products':'產品'}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav-link mx-lg-2 active" : " mx-lg-2 nav-link"
                    }
                    to="/about"
                  >
                    {language==='en'?'About us':'關於我們'}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav-link mx-lg-2 active" : "mx-lg-2 nav-link"
                    }
                    to="/contact"
                  >
                    {language==='en'?'Contact us':'關於我們'}
                  </NavLink>
                </li>
                
              </ul>
              <li className="nav-item dropdown d-flex align-items-center me-5">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i className="fa-solid fa-globe"></i>
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li onClick={(e)=>setLanguage('en')}>
              <a className="dropdown-item" href="#/" >English</a>
            </li>
            <li onClick={(e)=>setLanguage('china')}>
            <a className="dropdown-item" href="#/" >Chinese</a>
            </li>
          </ul>
        </li>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
