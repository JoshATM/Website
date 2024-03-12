import React, { useState } from "react";
import styled from "styled-components";

const TestData = [
  {
    test1: "thing1",
    test2: "thing2",
    test3: "thing3",
    testimage: "https://via.placeholder.com/150",
  },
  {
    test1: "thing5",
    test2: "thing6",
    test3: "thing7",
    testimage: "https://via.placeholder.com/150",
  },
];

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = TestData.filter((TestData) => {
    return (
      TestData.test1.toLowerCase().includes(searchTerm.toLowerCase()) ||
      TestData.test2.toLowerCase().includes(searchTerm.toLowerCase()) ||
      TestData.test3.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <StyledDiv>
      <h1>Find SOMETHING</h1>
      <h2>Search for a SOMETHING by test1, test2 or test3</h2>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      ></input>
      <button>Search</button>
      <h2>Or browse our SOMETHING below</h2>
      <br />
      <br />

      {filteredData.map((item, index) => (
        <>
          <BoxLayout key={index}>
            <StyledImage src={item.testimage} alt="Test Image" />
            <StyledText>
              <StyledMainText>test1: {item.test1}</StyledMainText>
              <StyledMainText>test2: {item.test2}</StyledMainText>
              <StyledMainText>test3: £{item.test3}/hr</StyledMainText>
            </StyledText>
          </BoxLayout>
          <br />
          <br />
        </>
      ))}
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  padding: 100px;
`;

const BoxLayout = styled.div`
  display: flex;
  border: 5px solid #1e2529;
  border-radius: 25px;
  align-items: center;
  justify-content: space-evenly;
  padding: 40px;
  background-color: rgba(30, 37, 41, 0.1);
`;

const StyledText = styled.p`
  font-size: 24px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-left: 50px;
  padding-right: 20px;
`;

const StyledMainText = styled.div``;

const StyledImage = styled.img`
  width: 150px;
  height: 150px;
`;
