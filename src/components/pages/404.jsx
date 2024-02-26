import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      {window.innerWidth < 700 ? (
        <Container>
          <ErrorHeadingText>404</ErrorHeadingText>
          <ErrorText>
            Pathname {window.location.pathname} could not be found.
            <StyledLink to="/login">Go back to home page</StyledLink>
          </ErrorText>
        </Container>
      ) : (
        <Container>
          <ErrorText>
            Error 404: Pathname {window.location.pathname} could not be found.
            <StyledLink to="/login">Go back to home page</StyledLink>
          </ErrorText>
        </Container>
      )}
    </>
  );
}

const ErrorHeadingText = styled.h1`
  font-size: 150px;
  color: #ff4d4f;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f8f8;
  flex-direction: column;
  flex-wrap: wrap;
  @media (max-width: 300px) {
  }
`;

const ErrorText = styled.h1`
  font-size: 48px;
  color: #ff4d4f;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;

  @media (max-width: 700px) {
    font-size: 36px;
  }
`;

const StyledLink = styled(Link)`
  color: #1890ff;
  text-decoration: none;
  font-weight: bold;
  text-decoration: underline;
  &:hover {
    text-decoration: none;
  }
`;
