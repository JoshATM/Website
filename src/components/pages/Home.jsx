import React from "react";
import styled from "styled-components";
import Carousel from "../Carousel";
import Line from "../Line";
import Button from "../Button";

export default function Home() {
  return (
    <StyledDiv>
      <StyledText>
        <Title>Catchy 1-7 word Title</Title>
        <Description>
          A brief description of the site and probably a redirect!
        </Description>
        <Button text="Click here / Join Now" />
      </StyledText>
      <Carousel />
      <Line top={"800px"} />
      <Line top={"1500px"} />
      <Line top={"2000px"} />
    </StyledDiv>
  );
}

const StyledText = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledDiv = styled.div`
  display: flex;
  height: 114px;
  padding: 100px;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 350px;
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
