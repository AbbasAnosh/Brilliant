import React from "react";
import "./News.css"


const News = () => {
  return (
    <div className="news__section section__news" id="news">
      <div className="news__section-title">
        <h1>Latest News.</h1>
        <h5 className="p__opensans">CHECK OUT SOME OF OUR NEWS</h5>
      </div>

      <div className="news__section-boddy">
        <div className="news__section-news1">
          <img
            src="https://images.pexels.com/photos/4009626/pexels-photo-4009626.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="VR"
          />
          <p className="p__opensans">Could This VR Sketching Tool Be Coming of Age for Designers in The Furutre?</p>
          <p className="p__opensans" style={{fontSize: "0.8rem"}}>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Cras non nisi eu blandit...
          </p>
          <button className="custom__button main_div">Read More</button>
        </div>
        <div className="news__section-news1">
          <img
            src="https://images.pexels.com/photos/162031/dubai-tower-arab-khalifa-162031.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="Citeis"
          />
          <p className="p__opensans">8 Cities That Show You What The Future Will Look Like (Innovative Idea)</p>
          <p className="p__opensans" style={{fontSize: "0.8rem"}}>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Cras non nisi eu blandit...
          </p>
          <button className="custom__button main_div">Read More</button>
        </div>
        <div className="news__section-news1">
          <img
            src="https://images.pexels.com/photos/4792503/pexels-photo-4792503.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="Idea"
          />
          <p className="p__opensans">15 Gift Ideas for Mom and Dad. Wherever They Are This Year</p>
          <p className="p__opensans" style={{marginBottom: "2.7rem", fontSize: "0.8rem" }}>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Cras non nisi eu blandit...
          </p>
          <button className="custom__button main_div">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default News;
