import React from 'react'
import "./Footer.css"
import {BsTelephone} from "react-icons/bs"
import {MdOutlineMail} from "react-icons/md"
import {FaRegCalendarAlt} from "react-icons/fa"
import {ImLocation} from "react-icons/im"

const Footer = () => {
  return (
    <div className="footer__section section__padding" id="footer">
        <div className="footer__section__part1">
            <h3>BRILLIANT</h3>
            <p className="p__opensans">We are more than a digital agency</p>
            <div/>
        </div>
        <div className="footer__section__part2">
            <h3>CONTACT US</h3>
            <div className="p__opensans"><BsTelephone />  +93 799 749 108</div>
            <div className="p__opensans"><MdOutlineMail/>  abbasalianosh@gmail.com</div>
            <div className="p__opensans"><ImLocation/>  Kabul, Afghanistan</div>
            <div className="p__opensans"><FaRegCalendarAlt/>  Sunday to Friday</div>
        </div>
        <div className="footer__section__part3">
            <h3>OUR SERVICES</h3>
            <p className="p__opensans">Single Project</p>
            <p className="p__opensans">Service 1</p>
            <p className="p__opensans">Service 2</p>
            <p className="p__opensans">Service 3</p>
            <p className="p__opensans">Works</p>
        </div>
        <div className="footer__section__part4">
            <h3>About Us</h3>
            <p className="p__opensans">About</p>
            <p className="p__opensans">Blog</p>
            <p className="p__opensans">Contact Us 1</p>
            <p className="p__opensans">Contact Us 2</p>
        </div>

       
    </div>
  )
}

export default Footer