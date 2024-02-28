import React from "react";
import styled from "styled-components";
import Button from "../Button";
import { toast } from "react-hot-toast";

export default function Page1() {
  const Test = () => {
    toast.success("Test");
  };
  return (
    <StyledDiv>
      <Button text="Test" onClick={Test} />
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
`;
