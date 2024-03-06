import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function NavigationBar() {
  const navigate = useNavigate();

  const [position, setPosition] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      let moving = window.scrollY;

      setVisible(moving <= 10); // Remember to use window.ScrollTo(0, 10) to find that it works with the Header
      setPosition(moving);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <>
      <StyledDiv style={{ display: visible ? "none" : "flex" }}>
        <StyledLogo
          src="https://www.diabetes.ie/wp-content/uploads/2021/05/logo-Placeholder.jpg"
          onClick={() => {
            navigate("/");
          }}
        />
        <NavigationLinks>
          <StyledLink
            onClick={() => {
              navigate("/Page1");
            }}
          >
            Page 1
          </StyledLink>
          <StyledLink
            onClick={() => {
              navigate("/materials");
            }}
          >
            Materials
          </StyledLink>
          <StyledLink
            onClick={() => {
              navigate("/profile");
            }}
          >
            Profile
          </StyledLink>
          <StyledLink
            onClick={() => {
              navigate("/Login");
            }}
          >
            Login
          </StyledLink>
        </NavigationLinks>
      </StyledDiv>
    </>
  );
}

const StyledLogo = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #d34b22;
  cursor: pointer;
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(1);
  }
  &::selection {
    background: transparent;
  }
`;

const StyledDiv = styled.div`
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  display: flex;
  background-color: #1e2529;
  height: 50px;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  @media (max-width: 700px) {
    display: none !important;
  }
`;

const StyledLink = styled.a`
  font-size: 35px;
  background-color: transparent;
  border: transparent;
  text-decoration: underline solid transparent;
  color: #cfd8dc;
  // transition: text-decoration 0.5s ease;
  &:hover {
    text-decoration: underline solid black;
  }
  &:active {
    text-decoration: none;
  }
`;

const NavigationLinks = styled.div`
  width: -webkit-fill-available;
  display: flex;
  align-content: center;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;
