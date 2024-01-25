import React from 'react'
import logo from '../assets/logo.svg'

export const Footer = () => {
  try {
    return <>
        <div className="footer-logo flex flex-col justify-between">
            <a href=""> <img className='' src={logo} alt="" /> </a>
            <div className="footer-icons flex items-center justify-center gap-[1rem]">
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-youtube"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-solid fa-d"></i>
                <i class="fa-brands fa-instagram"></i>
            </div>
        </div>
        <ul className="footer-home">
            <li>Home</li>
            <li>Pricing</li>
            <li>Products</li>
            <li>About Us</li>
        </ul>
        <ul className="footer-Careers">
            <li>Careers</li>
            <li>Community</li>
            <li>Privacy Policy</li>
        </ul>
        <ul className="footer-form flex flex-col items-center justify-between">
            <form className="form-footer flex gap-2">
                <input id='input' type='text' className='form form-control px-[1rem] rounded-3xl' name="update" placeholder='Updates in your inbox…' />
                <button className="w-[4.4rem] h-[2.7rem] font-bold rounded-3xl btn bg-orange-500">Go</button>
            </form>
            <p className='text-end text-gray-500 text-md'>Copyright 2020. All Rights Reserved</p>
        </ul>
    </>
  } catch (e) {console.log(e);}
}
