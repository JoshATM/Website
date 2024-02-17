import React, { useState } from "react";
import styled from "styled-components";
import Image1 from "../assets/images/ExampleImage1.jpg";
import Image2 from "../assets/images/ExampleImage2.jpg";
import Image3 from "../assets/images/ExampleImage3.jpg";
import Image4 from "../assets/images/ExampleImage4.avif";
import Button from "./Button";

export default function Carousel() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [Image1, Image2, Image3, Image4];

  const handleNextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + images.length) % images.length
    );
  };

  return (
    <CarouselContainer>
      <StyledImage src={images[currentImage]} alt="images" />
      <ButtonContainer>
        <Button onClick={handlePrevImage} text="<" />
        <Button onClick={handleNextImage} text=">" />
      </ButtonContainer>
    </CarouselContainer>
  );
}

const CarouselContainer = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 250px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
