import React from "react";
import styled from "styled-components";
import background from "../assets/d.png";
import { Link } from "react-router-dom";
export default function Navbar({ isScrolled }) {
  const link = [
    { name: "home", link: "/" },
    { name: "TV", link: "/tv" },
    { name: "Movies", link: "/movies" },
    { name: "My List", link: "/mylist" },
  ];
  return (
    <container>
      <nav className={`flex ${isScrolled ? "scrolled" : ""}`}>
        <div className="left flex a-center">
          <div className="brand flex a-center j-center">
            <img src={background} alt="logo" />
          </div>
          <ul className="links flex">
            {link.map((name, link) => {
              return (
                <li key={name}>
                  <Link to={link}>{name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="right flex a-center">
          <div className={`search`}></div>
        </div>
      </nav>
    </container>
  );
}
const container = styled.div``;
