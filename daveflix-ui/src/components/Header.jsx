import React from "react";
import styled from "styled-components";
import header from "../assets/d.png";
import { useNavigate } from "react-router-dom";
export default function Header(props) {
  const navigate = useNavigate();
  return (
    <Container className="flex a-center j-between">
      <div className="logo">
        <img src={header} alt="header"></img>
      </div>
      <button onClick={() => navigate(props.login ? "/login" : "/signup")}>
        {props.login ? "Login" : "Sign In"}
      </button>
    </Container>
  );
}
const Container = styled.div`
  padding: 0 4rem;
  .logo {
    img {
      height: 15rem;
    }
  }
  button {
    padding: 0.5rem 1rem;
    background-color: #e50914;
    border: none;
    cursor: pointer;
    color: white;
    border-radius: 0.2rem;
    font-weight: bolder;
    font-size: 1.05rem;
  }
`;
