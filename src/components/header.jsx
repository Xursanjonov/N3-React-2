import React from 'react'
import logo from '../assets/logo.svg'
import '../main.scss'

export const Header = () => {
  try {
    return (
      <>
        <div className="div-img"> <img src={logo} alt="" /> </div>
        <div className="category flex justify-center items-center gap-[1.4rem] text-lg">
          <a href="">Pricing</a>
          <a href="">Product</a>
          <a href="">About Us</a>
          <a href="">Careers</a>
          <a href="">Community</a>
        </div>
      </>
    )
  } catch (e) { console.log(e); }
}
