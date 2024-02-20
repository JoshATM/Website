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
          onClick={() => {
            navigate("/");
          }}
        >
          Logo
        </StyledLogo>
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
              navigate("/Page2");
            }}
          >
            Page 2
          </StyledLink>
          <StyledLink
            onClick={() => {
              navigate("/Page3");
            }}
          >
            Page 3
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
      {/* <Footer /> */}
    </>
  );
}

const StyledLogo = styled.div`
  font-size: 35px;
  background-color: transparent;
  border: transparent;
  text-decoration: underline solid transparent;
  color: #cfd8dc;
`;

const StyledDiv = styled.div`
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  display: flex;
  background-color: #1e2529;
  height: auto;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  z-index: 10000;
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
