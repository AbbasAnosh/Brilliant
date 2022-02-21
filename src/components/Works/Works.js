import React from "react";
import "./Works.css";
import images from "../constants/images";


const Works = () => {
  return (
    <div className="works__parent" id="works">
      <div className="works__first__section">
        <div className="works__first__section-partOne">
          <div className="works__first__section-partOne_para">
            <div />
            <h2 className="p__cormorant">Works.</h2>
          </div>
          <h5 className="p__opensans">THINGS WE'VE MADE</h5>
        </div>
        <div>
          <button className="custom__button_works main_div">VIEW ALL</button>
        </div>
      </div>

      <div className="works__images">
        <img src={images.worksImg1} alt="image1" />
        <img src={images.worksImg2} alt="image2" />
        <img src={images.worksImg3} alt="image3" />
        <img src={images.worksImg4} alt="image4" />
      </div>
    </div>
  );
};

export default Works;
