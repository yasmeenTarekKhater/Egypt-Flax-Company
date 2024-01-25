import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'
import {useTypewriter, Cursor} from 'react-simple-typewriter';

export default function Header() {
  const [text]= useTypewriter({
    words:[" of flax fiber in Egypt"],
    loop:{},
    typeSpeed:120,
    deleteSpeed:50
  });
  return (
    <div className='header '>
      <div className='container d-flex justify-content-center align-items-center fs-1 flex-column'>
        <h1>The best choice
          <span >{text} </span>
          <span><Cursor/> </span>
        </h1>
        <Link className='btn btn1 mt-3' to='/products'>show products</Link>
      </div>
    </div>
  )
}
