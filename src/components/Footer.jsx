import styled from "styled-components";

export default function Footer() {
  return (
    <StyledFooter>
      <StyledText>This is the footer.</StyledText>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  background-color: #182026;
  color: #fff;
  padding: 20px;
  text-align: center;
  position: absolute;
  bottom: 0;
  width: -webkit-fill-available;
`;

const StyledText = styled.p`
  font-size: 1.5rem;
  margin: 0;
`;
