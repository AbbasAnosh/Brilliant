import React from 'react'
import "./NewsLetter.css"
import { BsFacebook } from "react-icons/bs"
import { AiFillTwitterCircle, AiFillInstagram, AiFillYoutube } from "react-icons/ai"


const NewsLetter = () => {
  return (
    <div className="newsletter__section newsletter__bg" id="newsletter">
        <div className="newsletter__section__icons">
            <BsFacebook/>
            <AiFillTwitterCircle/>
            <AiFillInstagram/>
            <AiFillYoutube/>
        </div>
        
        <div className="newsletter__section__question">
            <h2>Have any project in mind?</h2>
            <button className="custom__button main_div">MAKE INQUIRY</button>
        </div>
    </div>
  )
}

export default NewsLetter