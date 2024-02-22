import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const MobileHeader = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Header>
      <Hamburger className={isOpen ? "open" : ""} onClick={toggleMenu}>
        <HamburgerBar />
        <HamburgerBar />
        <HamburgerBar />
      </Hamburger>
      <Logo
        src="https://via.placeholder.com/150"
        onClick={() => {
          navigate("/");
          setIsOpen(false);
        }}
      />
      {isOpen && (
        <Nav>
          <HambugerText
            onClick={() => {
              navigate("/Page1");
              toggleMenu();
            }}
          >
            Page 1
          </HambugerText>
          <HambugerText
            onClick={() => {
              navigate("/Page2");
              toggleMenu();
            }}
          >
            Page 2
          </HambugerText>
          <HambugerText
            onClick={() => {
              navigate("/profile");
              toggleMenu();
            }}
          >
            Profile
          </HambugerText>
          <HambugerText
            onClick={() => {
              navigate("/Login");
              toggleMenu();
            }}
          >
            Login
          </HambugerText>
        </Nav>
      )}
    </Header>
  );
};

export default MobileHeader;

const Logo = styled.img`
  position: absolute;
  top: 5px;
  left: 50%;
  right: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 25px;
  object-fit: cover;
`;

const Header = styled.header`
  padding: 10px;
  background-color: #1e2529;
  color: white;
`;

const Hamburger = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  cursor: pointer;
  background-color: #1e2529;
  position: relative;
  z-index: 9999;

  span {
    height: 3px;
    width: 100%;
    transition: all 0.3s ease-in-out;
    background-color: #ff5722;
  }

  &.open span:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  &.open span:nth-child(2) {
    opacity: 0;
  }

  &.open span:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }

  @media (min-width: 700px) {
    display: none !important;
  }
`;

const HamburgerBar = styled.span``;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-top: 10px;
  background-color: #1e2529;
  color: white;
  gap: 35px;
  height: 100vh;
  position: absolute;
  z-index: 9999;
  top: 30px;
  bottom: 0;
  left: 0;
  right: 0;
  @media (min-width: 700px) {
    display: none !important;
  }
`;

const HambugerText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
`;
