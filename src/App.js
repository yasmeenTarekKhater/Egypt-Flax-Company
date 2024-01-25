import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AboutUs from "./component/about/AboutUs";
import AboutUsChina from "./component/about/aboutUsChina";
import Contact from "./component/contact/Contact";
import ContactChina from "./component/contact/ContactChina";
import { LangContext } from "./component/context/language";
import Footer from "./component/footer/Footer";
import Home from "./component/header/Home";
import HomeChina from "./component/header/Home-china";
import Nav from "./component/header/Nav";
import NavChina from "./component/header/Nav-china";
import Products from "./component/products/Products";
function App() {
  const [language,setLanguage]=useState("en")
  return (
    <>
      <BrowserRouter>
        <LangContext.Provider value={{language,setLanguage}}>
          <div>
            {language==="en"?
            <>
            <Nav />
            <Routes>
              <Route path="" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<AboutUs />} />
            </Routes>
            </>
            :
            <>
            <NavChina/>
            <Routes>
              <Route path="" element={<HomeChina/>} />
              <Route path="/products" element={<Products />} />
              <Route path="/contact" element={<ContactChina />} />
              <Route path="/about" element={<AboutUsChina />} />
            </Routes>
            </>
            }
            
            <Footer />
          </div>
        </LangContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
