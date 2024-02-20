import React from "react";
import styled from "styled-components";

export default function Button(props) {
  return (
    <StyledButton type={props.type} onClick={props.onClick}>
      {props.text}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  color: #fff;
  background-color: #ff5722;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d34b22;
  }
`;
