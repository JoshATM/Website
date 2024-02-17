import React from "react";
import styled from "styled-components";

export default function Line({ top }) {
  return <StyledLine top={top}></StyledLine>;
}

const StyledLine = styled.div`
  display: flex;
  position: absolute;
  width: -webkit-fill-available;
  left: 0;
  top: ${(props) => props.top};
  height: 5px;
  background-color: #ff5722;
`;
