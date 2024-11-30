"use client";


import React from 'react';
import style from './Footer.module.css';
import { CgFacebook } from "react-icons/cg";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  // Function to open links in a new tab
  

  return (
    <div>
      <section className={style.footer}>
        <div className={style.footer1}>
          <h1>FLEXURE FIT.</h1>
          <p>Complete your style with awesome <br /> clothes from us</p>
            
            <div className={style.icon}>

            <div className={style.box}>
            <CgFacebook className={style.color}/>
            </div>
            <div className={style.box}>
            <FaSquareInstagram className={style.color}/>
            </div>
            <div className={style.box}>
            <FaTwitter  className={style.color}/>
            </div>
            <div className={style.box}>
            <FaLinkedin  className={style.color}/>
            </div>
            </div>
          </div>
        <div className={style.footer2}>
            <ul>
                <li>Company</li>
                <li>About</li>
                <li>Contact us</li>
                <li>Support</li>
                <li>Careers</li>

            </ul>
        </div>

        <div className={style.footer3}>
        <ul>
                <li>Quick Links</li>
                <li>Shareable Locations</li>
                <li>Orders Tracking</li>
                <li>Size Guide</li>
                <li>FAQs</li>

        </ul>


        </div>
        <div className={style.footer4}>
        <ul>
                <li>Legal</li>
                <li>Terms and Conditions</li>
                <li>Privacy Policy</li>
                

        </ul>

        </div>
      </section>
    </div>
  );
}

export default Footer;
