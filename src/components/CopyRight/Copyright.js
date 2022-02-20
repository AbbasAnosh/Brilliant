import React from 'react'
import "./Copyright.css"
import { BsFacebook } from "react-icons/bs"
import { AiFillTwitterCircle, AiFillInstagram, AiFillYoutube } from "react-icons/ai"


const Copyright = () => {
  return (
    <div className="copyright__section" id="copyright">
         <div className="line"/>
        <div className="footer__first__section">
            <p className="p__opensans" >Copyright 2022 BRILLIANT</p>
            <p className="p__opensans" style={{color: "#57dbd6"}}>PRIVACY POLICY</p>
            <p className="p__opensans" style={{color: "#57dbd6"}}>TERMS OF USE</p>
        </div>

        <div className="footer__second__section">
            <p className="p__opensans">Nullam at efficitur erat. Sed neque mauris, sodales eget nunc ac, lobortis aliquam lectus vestibulum ante.</p>
            <div className="social__media p__opensans">
                <BsFacebook/>
                <AiFillTwitterCircle/>
                <AiFillInstagram/>
                <AiFillYoutube/>
            </div>
        </div>
    </div>
  )
}

export default Copyright