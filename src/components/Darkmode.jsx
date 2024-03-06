import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

// Define your themes
const themes = {
  light: {
    backgroundColor: "#f2f2f2",
    textColor: "#000",
  },
  dark: {
    backgroundColor: "#263238",
    textColor: "#cfd8dc",
  },
};

export default function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const GlobalStyle = createGlobalStyle`
        body {
            background-color: ${(props) =>
              props.theme
                ? themes.dark.backgroundColor
                : themes.light.backgroundColor};
            color: ${(props) =>
              props.theme ? themes.dark.textColor : themes.light.textColor};
        }
    `;

  return (
    <>
      <GlobalStyle theme={darkMode} />
      <DarkModeButton darkMode={darkMode} onClick={toggleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </DarkModeButton>
    </>
  );
}

const DarkModeButton = styled.button`
  background-color: ${(props) =>
    props.darkMode
      ? themes.light.backgroundColor
      : themes.dark.backgroundColor};
  color: ${(props) =>
    props.darkMode ? themes.light.textColor : themes.dark.textColor};
  padding: 10px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  z-index: 10000;
  position: fixed;
  right: 0px;
  top: 0px;
`;
