import React from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css";

// 'HeroSection' ennulla functionakath parameter aayitt groupof 'Objects' pass cheythal
// athinte value aa 'HeroSection' component call cheyyunna sthalath namukk pass cheyyam
// REMEMBER = Paramter 'Objects' aayittanu call cheythath
const HeroSection = ({
  lightBg,
  lightText,
  lightTextDesc,
  topLine,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
}) => {
  return (
    <>
      <div className={lightBg ? "home__hero-section" : "home__hero-section darkBg"}>
        <div className="container">
          <div className="row home__hero-row" style={{display: "flex", flexDirection: imgStart==='start' ? 'row-reverse' : 'row' }}>
            
            <div className="col">
                <div className="home__hero-text-wrapper">
                    <div className="top-line">{topLine}</div>
                    <h1 className={lightText ? "heading" : "heading dark"}>{headline}</h1>
                    <p className={lightTextDesc ? "home__hero-subtitle" : "home__hero-subtitle dark"}>{description}</p>
                    <Link to='/sign-up'>
                        <button className="btn--wide">{buttonLabel}</button>
                    </Link>
                </div>
            </div>

            <div className="col">
                <div className="home__hero-img-wrapper">
                    <img src={img} alt={alt} className="home__hero-img"/>
                </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
