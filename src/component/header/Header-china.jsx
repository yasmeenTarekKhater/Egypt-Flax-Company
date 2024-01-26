import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './home.css'
import {useTypewriter, Cursor} from 'react-simple-typewriter';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function HeaderChina() {
  const [text]= useTypewriter({
    words:[" 埃及的亞麻纖維"],
    loop:{},
    typeSpeed:120,
    deleteSpeed:50
  });
  useEffect(()=>{
    AOS.init({
      duration:"1000"
    })
  })
  return (
    <div className='header '>
      <div className='container d-flex justify-content-center align-items-center fs-1 flex-column'>
        <h1 data-aos="fade-down">最佳選擇
          <span >{text} </span>
          <span><Cursor/> </span>
        </h1>
        <Link className='btn btn1 mt-3' to='/products' data-aos="fade-down">展示產品</Link>
      </div>
    </div>
  )
}
