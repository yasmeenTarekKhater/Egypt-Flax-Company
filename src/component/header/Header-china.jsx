import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'
import {useTypewriter, Cursor} from 'react-simple-typewriter';

export default function HeaderChina() {
  const [text]= useTypewriter({
    words:[" 埃及的亞麻纖維"],
    loop:{},
    typeSpeed:120,
    deleteSpeed:50
  });
  return (
    <div className='header '>
      <div className='container d-flex justify-content-center align-items-center fs-1 flex-column'>
        <h1>最佳選擇
          <span >{text} </span>
          <span><Cursor/> </span>
        </h1>
        <Link className='btn btn1 mt-3' to='/products'>展示產品</Link>
      </div>
    </div>
  )
}
