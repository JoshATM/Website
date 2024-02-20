import React, { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import styled from "styled-components";

export default function NavigationBar() {
  const navigate = useNavigate();

  const [position, setPosition] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      let moving = window.scrollY;

      setVisible(moving <= 10); // Remember to use window.ScrollTo(0, 10) to find that it works with the MiniHeader
      setPosition(moving);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <>
      <StyledDiv style={{ display: visible ? "flex" : "none" }} id="Header">
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
              navigate("/page1");
            }}
          >
            Page 1
          </StyledLink>
          <StyledLink
            onClick={() => {
              navigate("/page2");
            }}
          >
            Page 2
          </StyledLink>
          <StyledLink
            onClick={() => {
              navigate("/page3");
            }}
          >
            Page 3
          </StyledLink>
          <StyledLink
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </StyledLink>
        </NavigationLinks>
      </StyledDiv>
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
  height: 114px;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  z-index: 10000;
`;

const StyledLink = styled.a`
  font-size: 35px;
  background-color: transparent;
  border: transparent;
  color: #cfd8dc;
  transition: text-decoration 0.1s ease;

  &:hover {
    color: #ff5722;
    cursor: pointer;
  }
  &:active {
    text-decoration: none;
    color: #fff;
  }
  &::selection {
    background: transparent;
    color: #ff5722;
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
