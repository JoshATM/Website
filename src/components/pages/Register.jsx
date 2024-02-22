import React from "react";
import styled from "styled-components";
import Button from "../Button";
import BackgroundImage from "../../assets/images/ExampleBackgroundImage.webp";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const Submit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <>
      <StyledImage src={BackgroundImage} />
      <InnerFormContainer>
        <Form>
          <h1>Welcome to NAME</h1>
          <br />
          <Label htmlFor="FirstName">First Name</Label>
          <Input
            type="text"
            id="FirstName"
            name="FirstName"
            placeholder="Enter First Name..."
          />
          <Label htmlFor="LastName">Last Name</Label>
          <Input
            type="text"
            id="LastName"
            name="LastName"
            placeholder="Enter First Name..."
          />
          <Label htmlFor="Email">Email</Label>
          <Input
            type="text"
            id="Email"
            name="Email"
            placeholder="Enter First Name..."
          />
          <Label htmlFor="DOB">Date of Birth</Label>
          <Input
            type="date"
            id="DOB"
            name="DOB"
            placeholder="Enter Date of Birth..."
          />
          <Label htmlFor="tel">Phone Number</Label>
          <Input
            type="tel"
            pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}"
            id="tel"
            name="tel"
            placeholder="Enter Phone Number..."
          />
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Enter Password..."
          />

          <Button type="submit" text="Submit" onClick={Submit} />
          <p>Already have an account?</p>
          <Link
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </Link>
        </Form>
      </InnerFormContainer>
    </>
  );
}

const Link = styled.a`
  color: #ff5722;
  cursor: pointer;
  margin-top: 10px;
`;

const StyledImage = styled.img`
  position: absolute;
  width: 50%;
  height: 97.9vh;
  object-fit: cover;
  z-index: -1;
  opacity: 0.5;
  filter: blur(5px);
  @media (max-width: 700px) {
    display: none !important;
  }
`;

const InnerFormContainer = styled.div`
  position: absolute;
  right: 25%;
  transform: translateX(50%);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 97.9vh;
  @media (max-width: 700px) {
    right: 50%;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 25vw;
  @media (max-width: 700px) {
    width: 80vw;
  }
`;

const Label = styled.label`
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;
