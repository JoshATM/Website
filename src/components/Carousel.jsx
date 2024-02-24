import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Image1 from "../assets/images/ExampleImage1.jpg";
import Image2 from "../assets/images/ExampleImage2.jpg";
import Image3 from "../assets/images/ExampleImage3.jpg";
import Image4 from "../assets/images/ExampleImage4.avif";

export default function Carousel() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [Image1, Image2, Image3, Image4];

  const handleImageChange = (index) => {
    setCurrentImage(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <CarouselContainer>
      <StyledImage
        src={images[currentImage]}
        alt="images"
        className="image-transition"
      />
      <DotContainer>
        {images.map((_, index) => (
          <Dot
            key={index}
            active={index === currentImage}
            onClick={() => handleImageChange(index)}
          />
        ))}
      </DotContainer>
    </CarouselContainer>
  );
}

const CarouselContainer = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  @media (max-width: 1650px) {
    min-width: 100%;
  }
  @media (max-width: 700px) {
    min-width: 100%;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
`;

const DotContainer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  @media (max-width: 700px) {
    bottom: -185px;
  }
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "#ff5722" : "white")};
  margin: 0 5px;
  cursor: pointer;
`;
