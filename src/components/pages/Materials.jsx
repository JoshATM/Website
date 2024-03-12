import React from "react";
import styled from "styled-components";
import Button from "../Button";
import Search from "../Search";

export default function Materials() {
  return (
    <Container>
      <Text>Text</Text>
      <Search />
    </Container>
  );
}

const Container = styled.div`
  background-color: #f2f2f2;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.p`
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
`;
