import FlaxSliver from "./FlaxSliver";
import FlaxRowMaterial from "./Flax_row_material";
import OtherProducts from "./OtherProducts ";
import PlumbingFlax from "./PlumbingFlax ";
import {flax_row_material} from "../../data"
import {flax_row_material_chines} from "../../dataChina"
import {pluming_flax_chines} from "../../dataChina"
import {flax_sliver_chines} from "../../dataChina"
import {flax_waste_chines} from "../../dataChina"
import {cottonseed_flax_chines} from "../../dataChina"
import {yarn_flax_chines} from "../../dataChina"
import {pluming_flax} from "../../data"
import {flax_sliver} from '../../data';
import {flax_waste} from '../../data';
import {cottonseed_flax} from '../../data';
import {yarn_flax} from '../../data';
import "./Products.css";
import { useContext, useEffect } from "react";
import { LangContext } from "../context/language";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Products = () => {
    useEffect(()=>{
        AOS.init({
          duration:"1000"
        })
      })
    const {language}=useContext(LangContext);
    return ( 
    <div className="container">
    <div className="height"></div>
        <div className="products_title text-center mt-4" data-aos="fade-down" >
        <h1>{language==="en"?"Our Products":"我們的產品"}</h1>
        <div className="title_line"></div>
        </div>
        <FlaxRowMaterial data={language==="en"? flax_row_material: flax_row_material_chines} />
        <PlumbingFlax data={language==="en"? pluming_flax: pluming_flax_chines} />
        <FlaxSliver data={language==="en"? flax_sliver:flax_sliver_chines} />
        
        <OtherProducts data={language==="en"? flax_waste:flax_waste_chines} dirction='right'/>
        <OtherProducts data={language==="en"?cottonseed_flax :cottonseed_flax_chines} dirction='left'/>
        <OtherProducts data={language==="en"? yarn_flax:yarn_flax_chines} dirction='right'/>
        
        
    </div>
    );
}
 
export default Products;