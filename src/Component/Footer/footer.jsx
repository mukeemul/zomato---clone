import React from 'react';
import { BsInstagram, BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-section">
        <div className="top-footer">
          <ul className='footer-links'>
            <li className='clr'><a href="/">ABOUT ZOMATO</a></li>
            <li><a href="/">Who We Are</a></li>
            <li><a href="/">Blog</a></li>
            <li><a href="/">Work With Us</a></li>
            <li><a href="/">Investor Relations</a></li>
            <li><a href="/">Report Fraud</a></li>
            <li><a href="/">Contact Us</a></li>
          </ul>
        </div>
        <div className="top-footer">
          <ul className='footer-links'>
            <li className='clr'><a href="/">ZOMAVERSE</a></li>
            <li><a href="/">Zomato</a></li>
            <li><a href="/">Blinkit</a></li>
            <li><a href="/">Feeding India</a></li>
            <li><a href="/">Hyperpure</a></li>
            <li><a href="/">Zomaland</a></li>
          </ul>
        </div>
        <div className="top-footer">
          <ul className='footer-links'>
            <li className='clr'><a href="/">FOR RESTAURANTS</a></li>
            <li><a href="/">Partner With Us</a></li>
            <li><a href="/">Apps For You</a></li>
            <li><a href="/">For Enterprises</a></li>
            <li><a href="/">Zomato For Enterprise</a></li>
          </ul>
        </div>
        <div className="top-footer">
          <ul className='footer-links'>
            <li className='clr'><a href="/">LEARN MORE</a></li>
            <li><a href="/">Privacy</a></li>
            <li><a href="/">Security</a></li>
            <li><a href="/">Terms</a></li>
            <li><a href="/">Sitemap</a></li>
          </ul>
        </div>
        <div className="top-footer">
          <ul className='footer-links'>
            <li className='clr'><a href="/">SOCIAL LINKS</a></li>
            <div className="social-icon">
              <div className="insta">
                <a href="https://www.instagram.com/mukeemul_haque/"><BsInstagram /></a>
              </div>
              <div className="linkedin">
                <a href="https://www.linkedin.com/in/mukeemul-haque-55bb2525a/"></a> <BsLinkedin />
              </div>
              <div className="github">
                <a href="https://github.com/mukeemul"></a><BsGithub />
              </div>
              <div className="twitter">
                <a href="https://twitter.com/mukeemul"></a><BsTwitter />
              </div>
            </div>
            <img alt="" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv" />
            <img alt="" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl" />
          </ul>
        </div>
      </div>
      <div className="footer-title">
        <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2023-present © Mukeemul Haque Ltd. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer