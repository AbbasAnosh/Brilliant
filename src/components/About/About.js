import React from "react";
import "./About.css";
import images from "../../components/constants/images";

function About() {
  return (
    <div className="parent section__padding" id="about">
      <div className="container">
        <div className="about__section-content">
          <div className="about__section-content__title">
            <div />
            <h2>About.</h2>
          </div>
          <h5 className="p__opensans">WE ARE MORE THAN DIGITAL AGENCY</h5>
        </div>
        <div className="gallery">
          <figure class="gallery__item gallery__item--5">
            <img
              src={images.aboutImage1}
              alt="Gallery-5"
              class="gallery__img"
            />
            <div className="info1">
              <div>
              <h3>Philosophy</h3>

              </div>
              <p
                className="p__opensans"
                style={{fontSize: "0.8rem" }}
              >
                Trust pays off
              </p>
            </div>
          </figure>
          <figure class="gallery__item gallery__item--3">
            <img
              src={images.aboutImage3}
              alt="Gallery-3"
              class="gallery__img"
            />
            <div className="info2">
              <h3>Office</h3>
              <p
                className="p__opensans"
                style={{ fontSize: "0.8rem" }}
              >
                Somewhere on earth
              </p>
            </div>
          </figure>
          <figure class="gallery__item gallery__item--4">
            <img
              src={images.aboutImage4}
              alt="Gallery-4"
              class="gallery__img"
            />
            <div className="info3">
              <h3>Team Work</h3>
              <p
                className="p__opensans"
                style={{fontSize: "0.8rem" }}
              >
                Committed and creative
              </p>
            </div>
          </figure>
        </div>

        <div className="about__info-details">
          <div>
            <h3>Who we are</h3>
            <p className="p__opensans">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
            </p>
          </div>
          <div className="content1">
            <div className="first__line" />
            <div className="second__line1">
              <h3>Our philosophy</h3>
              <p className="p__opensans">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque
                ipsa.
              </p>
            </div>
          </div>
          <div className="content2">
            <div className="first__line" />
            <div className="second__line1">
              <h3>How we work</h3>
              <p className="p__opensans">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque
                ipsa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
