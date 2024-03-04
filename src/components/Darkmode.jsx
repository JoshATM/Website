import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";

export default function Darkmode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle the dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Container>
        <Button onClick={toggleDarkMode}>
          {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </Button>
      </Container>
    </ThemeProvider>
  );
}

// Define the light and dark themes
const lightTheme = {
  background: "#ffffff",
  text: "#000000",
};

const darkTheme = {
  background: "#000000",
  text: "#ffffff",
};

// Create a styled component for the container
const Container = styled.div`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  padding: 20px;
`;

// Create a styled component for the button
const Button = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 10px;
  font-size: 12px;
  z-index: 10000;
`;
