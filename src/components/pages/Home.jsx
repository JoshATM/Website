import React from "react";
import styled from "styled-components";
import Carousel from "../Carousel";
import Line from "../Line";
import ButtonRedirect from "../ButtonRedirect";
import BackgroundImage from "../../assets/images/ExampleBackgroundImage.webp";

export default function Home() {
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
      <Line top={"800px"} />
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
`;

const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledDiv = styled.div`
  display: flex;
  height: 500px;
  padding: 100px;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 200px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #cfd8dc;
  text-align: center;
`;

const Description = styled.p`
  font-size: 16px;
  color: #cfd8dc;
  text-align: center;
`;
