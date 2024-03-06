import React, { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import styled from "styled-components";
import Darkmode from "./Darkmode";

export default function NavigationBar() {
  const navigate = useNavigate();

  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);

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

  const ProfileSettings = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  const SettingsMenu = () => {
    setShowSettingsDropdown(!showSettingsDropdown);
  };

  const LogoutFunction = () => {};

  const ProfileSettingsDropdownMenu = () => {
    return (
      <>
        <ProfileDropdownContainer>
          <StyledLink
            onClick={() => {
              navigate("/profile");
            }}
          >
            Profile
          </StyledLink>
          <StyledLink onClick={SettingsMenu}>Settings</StyledLink>
          {showSettingsDropdown && <SettingsMenuDropDown />}
          <StyledLink onClick={LogoutFunction}>Logout</StyledLink>
        </ProfileDropdownContainer>
      </>
    );
  };

  const SettingsMenuDropDown = () => {
    return (
      <>
        <SettingsDropdownContainer>
          <Darkmode />
          <p>Text</p>
        </SettingsDropdownContainer>
      </>
    );
  };

  return (
    <>
      <StyledDiv>
        <NavigationLinks>
          <StyledLogo
            src="https://via.placeholder.com/150"
            alt="Logo"
            onClick={() => {
              navigate("/");
            }}
          />
          <StyledLink
            onClick={() => {
              navigate("/page1");
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
              navigate("/login");
            }}
          >
            Login
          </StyledLink>
          <ProfileImage
            src="https://via.placeholder.com/150"
            onClick={ProfileSettings}
          />
          {showProfileDropdown && <ProfileSettingsDropdownMenu />}
        </NavigationLinks>
      </StyledDiv>
    </>
  );
}

const StyledLogo = styled.img`
  width: auto;
  height: 100px;
  object-fit: cover;
  cursor: pointer;
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
  z-index: 1000;

  @media (max-width: 700px) {
    display: none !important;
  }
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

const ProfileImage = styled.img`
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

const ProfileDropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 125px;
  right: 10px;
  background-color: #1e2529;
  color: white;
  padding: 10px;
  z-index: 1000;
  border-radius: 5px;
  border: 1px solid #ff5722;
  width: 300px;
  gap: 10px;
  align-items: center;
`;

const SettingsDropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 70px;
  right: 270px;
  background-color: #1e2529;
  color: white;
  padding: 10px;
  z-index: 1001;
  border-radius: 5px;
  border: 1px solid #ff5722;
  width: 300px;
  gap: 10px;
`;
