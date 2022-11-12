/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { navItems, socialLink } from "../../data.";
import "./header.css";

export const Header: React.FC = () => {
  const [hash, setHash] = useState(window.location.hash);
  return (
    <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#" title="Hide navigation">
          Hide navigation
        </a>
        <ul id="nav" className="nav">
          {navItems.map((o) => (
            <li
              key={o.hash}
              className={hash === o.hash ? "current" : ""}
              onClick={() => {
                setHash(o.hash);
              }}
            >
              <a href={o.hash}>{o.name}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">I am Dat.</h1>
          <h3 style={{ color: "#fff", fontFamily: "sans-serif " }}>
            I am a Frontend Developer. I love creating websites that look good
            and give the best user experience. I have been self-studying
            Frontend online for about 1.5 years and currently have about 1 year
            of experience in this field. My goal is to become a Senior Frontend
            Developer
          </h3>
          <hr />
          <ul className="social">
            {socialLink &&
              socialLink.map((item) => {
                return (
                  <li key={item.name}>
                    <a href={item.url} target="_blank" rel="noreferrer">
                      <i className={item.className}></i>
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>

      <p className="scrolldown">
        <a href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};
