import React from "react";
import { ImStatsDots } from "react-icons/im";
import { RiPencilLine } from "react-icons/ri";
import { HiOutlineUserGroup } from "react-icons/hi";
import { TiSocialDribbble } from "react-icons/ti";
import { BsSave } from "react-icons/bs";
import { ImStatsBars } from "react-icons/im";
import "./Services.css";

const Services = () => {
  return (
    <div className="app__services  app__bg" id="services">
      <div className="app__services-first__line">
        <div className="app__services-important">
          <div />
          <h2>Services.</h2>
        </div>
        <p className="p__opensans">OUR SERVICES FOR CLIENTS</p>
      </div>

      <div className="app__services-container">
        <div className="app__services-content_first">
          <ImStatsDots className="app__header-content_icon" />
          <h2>Digital Strategy</h2>
          <div />
          <p className="p__opensans">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>

        <div className="app__services-content_first">
          <RiPencilLine className="app__header-content_icon" />
          <h2>UX Designs</h2>
          <div />
          <p className="p__opensans">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>

        <div className="app__services-content_first">
          <HiOutlineUserGroup className="app__header-content_icon" />
          <h2>UI Designs</h2>
          <div />
          <p className="p__opensans">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>

        <div className="app__services-content_first">
          <TiSocialDribbble className="app__header-content_icon" />
          <h2>Social Media</h2>
          <div />
          <p className="p__opensans">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>

        <div className="app__services-content_first">
          <BsSave className="app__header-content_icon" />
          <h2>Design Concept</h2>
          <div />
          <p className="p__opensans">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>

        <div className="app__services-content_first">
          <ImStatsBars className="app__header-content_icon" />
          <h2>Media Pairing</h2>
          <div />
          <p className="p__opensans">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>

     
    </div>
  );
};

export default Services;
