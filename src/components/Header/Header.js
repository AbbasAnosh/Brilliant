import React from "react";
import "./Header.css";
import images from "../../components/constants/images";
import { FiSend } from "react-icons/fi";
import { BiBrain } from "react-icons/bi";
import { HiOutlineLightBulb } from "react-icons/hi";

const Header = () => {
  return (
    <div className="header__parent" id="header">
      <div className="app__header app__wrapper section__padding" id="home">
        <div className="app__wrapper_info">
          <h6 className="p__opensans">CREATIVE MIND, CREATEIVE WORKS.</h6>
          <h1 className="app__header-h1">
            We are digital <br /> agency
          </h1>
          <button type="button" className="custom__button main_div">
            GETTING STARTED
          </button>
        </div>
      </div>
      <div>
        <div className="app__header-content">
          <div className="app__header-content_first">
            <FiSend className="app__header-content_icon" />
            <h2>Future Concept.</h2>
            <div />
            <p className="p__opensans">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          <div className="app__header-content_first">
            <BiBrain className="app__header-content_icon" />
            <h2>The Big Ideas.</h2>
            <div />
            <p className="p__opensans">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          <div className="app__header-content_first">
            <HiOutlineLightBulb className="app__header-content_icon" />
            <h2>Creative Solutions.</h2>
            <div />
            <p className="p__opensans">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
