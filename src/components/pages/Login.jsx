import React from "react";
import styled from "styled-components";
import Button from "../Button";
import BackgroundImage from "../../assets/images/ExampleBackgroundImage.webp";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export default function Login() {
  const navigate = useNavigate();
  const Submit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    localStorage.setItem("LoggedIn", true);
    fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Email: e.target.email?.value,
        password: e.target.password?.value,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem("LoggedIn", true);
        toast.success("Logged in successfully", { duration: 5000 })(() => {
          navigate("/page1");
          window.location.reload();
        });
      })
      .catch((error) => {
        toast.error("Error: " + error, { duration: 5000 });
        console.error("Error:", error);
      });
  };
  return (
    <>
      <StyledImage src={BackgroundImage} />
      <InnerFormContainer>
        <Form>
          <h1>Welcome to NAME</h1>
          <br />
          <Label htmlFor="email">Email</Label>
          <Input
            type="text"
            id="email"
            name="email"
            placeholder="Enter Email..."
          />

          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Enter Password..."
          />

          <Button type="submit" text="Submit" onClick={Submit} />
          <p>Don't have an account?</p>
          <Link
            onClick={() => {
              navigate("/register");
            }}
          >
            Register
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
