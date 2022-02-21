import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
import "./Testimonial.css";
import { AiFillStar } from "react-icons/ai";
import { SiSap, SiDell,  SiXiaomi, SiHotelsdotcom, SiNetflix, SiQualcomm, SiZyte } from "react-icons/si"



function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="section section__padding app__bg" id="testimonial">
      <div className="parent__section">
        <div className="title">
          <div className="title__important">
            <div />
            <h2>Testimonials</h2>
          </div>
          <h5 className="p__opensans" style={{ color: "#57dbd6"}}>WE ARE MORE THAN DIGITAL AGENCY</h5>
        </div>
        <div className="section-center">
          {people.map((person, personIndex) => {
            const { id, image, name, title, quote } = person;

            let position = "nextSlide";
            if (personIndex === index) {
              position = "activeSlide";
            }
            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === people.length - 1)
            ) {
              position = "lastSlide";
            }

            return (
              <article className={position} key={id}>
                <img src={image} alt={name} className="person-img" />
                <h4 className="name">{name}</h4>
                <p className="title">{title}</p>
                <div className="stars">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
                <p className="text">{quote}</p>
                <FaQuoteRight className="icon" />
              </article>
            );
          })}
          <button className="prev" onClick={() => setIndex(index - 1)}>
            <FiChevronLeft />
          </button>
          <button className="next" onClick={() => setIndex(index + 1)}>
            <FiChevronRight />
          </button>
        </div>
       
      </div>
      <div className="companies__logo">
          <SiSap/>
          <SiDell/>
          <SiQualcomm/>
          <SiXiaomi/>
          <SiNetflix/>
          <SiHotelsdotcom/>
          <SiZyte/>
      </div>
    </section>
  );
}

export default App;
