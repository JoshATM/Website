import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Carousel from "../Carousel";
import Line from "../Line";
import ButtonRedirect from "../ButtonRedirect";
import BackgroundImage from "../../assets/images/ExampleBackgroundImage.webp";

export default function Home() {
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
    <StyledDiv>
      <StyledImage src={BackgroundImage} />
      <StyledText>
        <Title>Catchy 1-7 word Title</Title>
        <Description>
          A brief description of the site and probably a redirect! such as: Sign
          up now!
        </Description>
        <ButtonRedirect path="login" text="Join Now!" />
      </StyledText>
      <Carousel />
      {windowWidth < 1650 ? <Line top={"1020px"} /> : <Line top={"825px"} />}
      <Line top={"1500px"} />
      <WhiteBackground></WhiteBackground>
      <Line top={"2000px"} />
      <Line top={"2500px"} />
    </StyledDiv>
  );
}

const WhiteBackground = styled.div`
  background-color: #fff;
  position: absolute;
  top: 1505px;
  width: -webkit-fill-available;
  height: 500px;
`;

const StyledImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  max-height: 700px;
  object-fit: cover;
  z-index: -1;
  opacity: 0.2;
  filter: blur(5px);
  @media (max-width: 1650px) {
    max-height: 900px;
  }
  @media (max-width: 700px) {
    max-height: 1100px;
  }
`;

const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 700px) {
    padding-bottom: 100px;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  padding: 100px;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 200px;
  align-content: space-around;
  @media (max-width: 1650px) {
    flex-wrap: nowrap;
    padding-top: 300px;
    gap: 100px;
  }
  @media (max-width: 700px) {
    height: 300px;
    padding-top: 300px;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const Title = styled.h1`
  display: flex;
  flex-wrap: wrap;
  font-size: 24px;
  color: #cfd8dc;
  text-align: center;
`;

const Description = styled.p`
  display: flex;
  flex-wrap: wrap;
  font-size: 16px;
  color: #cfd8dc;
  text-align: center;
`;
