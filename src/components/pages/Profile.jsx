import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Button";

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState("Person");
  const [lastName, setLastName] = useState("A");
  const [email, setEmail] = useState("example@email.com");
  const [phone, setPhone] = useState("123-456-7890");
  const [dob, setDob] = useState("01/01/2000");
  const [address, setAddress] = useState("1234 Example St, City, State, 12345");

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <ProfileContainer>
      <Title>Person A Profile</Title>
      <Info>Photo</Info>
      <StyledImage
        src="https://via.placeholder.com/150"
        alt="Profile Picture"
      />
      <Box>
        <InfoContainer>
          <Info>
            First Name:{" "}
            {isEditing ? (
              <StyledInput
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            ) : (
              firstName
            )}
          </Info>
          <Info>
            Email:{" "}
            {isEditing ? (
              <StyledInput
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            ) : (
              email
            )}
          </Info>
          <Info>
            Date of Birth:{" "}
            {isEditing ? (
              <StyledInput
                type="text"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
            ) : (
              dob
            )}
          </Info>
        </InfoContainer>
        <InfoContainer>
          <Info>
            Last Name:{" "}
            {isEditing ? (
              <StyledInput
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            ) : (
              lastName
            )}
          </Info>
          <Info>
            Phone:{" "}
            {isEditing ? (
              <StyledInput
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            ) : (
              phone
            )}
          </Info>
          <Info>
            Address:{" "}
            {isEditing ? (
              <StyledInput
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            ) : (
              address
            )}
          </Info>
        </InfoContainer>
      </Box>

      {isEditing ? (
        <Button onClick={handleSave} text="Save" />
      ) : (
        <Button onClick={handleEdit} text="Edit" />
      )}
    </ProfileContainer>
  );
}

const Box = styled.div`
  display: flex;
  width: -webkit-fill-available;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: flex-start;
`;

const StyledInput = styled.input`
  padding: 5px;
  border: 1px solid #d34b22;
  border-radius: 5px;
  font-size: 16px;
`;

const StyledImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #d34b22;
`;

const ProfileContainer = styled.div`
  text-align: center;
  margin: 0 auto;
  width: 70%;
  padding: 50px;
  border: 1px solid #d34b22;
  border-radius: 10px;
  box-shadow: 0 0 10px #d34b22;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #263238;
  color: #cfd8dc;
  display: flex;
  justify-content: center;
  gap: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  transition: 0.3s;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  &:hover {
    box-shadow: 0 0 20px #d34b22;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const Info = styled.p`
  font-size: 16px;
`;
