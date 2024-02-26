import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../Button";
import Quiz from "../Quiz"; // Import Quiz component
import CreateQuiz from "../CreateQuiz";

export default function Materials() {
  const [uploadedContent, setUploadedContent] = useState("");
  const [savedContent, setSavedContent] = useState([]);

  useEffect(() => {
    // Load saved content from local storage
    const savedContentFromStorage = localStorage.getItem("savedContent");
    if (savedContentFromStorage) {
      setSavedContent(JSON.parse(savedContentFromStorage));
    }
  }, []);

  const handleUpload = (event) => {
    setUploadedContent(event.target.value);
  };

  const saveToAccount = () => {
    // Save the uploaded content to local storage
    const newSavedContent = [...savedContent, uploadedContent];
    setSavedContent(newSavedContent);
    localStorage.setItem("savedContent", JSON.stringify(newSavedContent));
    setUploadedContent("");
  };

  const deleteContent = (index) => {
    // Delete the content at the specified index
    const newSavedContent = savedContent.filter((_, i) => i !== index);
    setSavedContent(newSavedContent);
    localStorage.setItem("savedContent", JSON.stringify(newSavedContent));
  };

  return (
    <Container>
      <Heading>Materials Page</Heading>
      <Content>
        <p>This is the content of the Materials page.</p>
        <p>You can add more content here.</p>
        <UploadContainer>
          <input type="text" value={uploadedContent} onChange={handleUpload} />
          <Button onClick={saveToAccount} text="Upload" />
        </UploadContainer>
        {savedContent.map((content, index) => (
          <ContentItem key={index}>
            <p>{content}</p>
            <Button onClick={() => deleteContent(index)} text="Delete" />
          </ContentItem>
        ))}
        <CreateQuiz />
        <Quiz />
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2f2f2;
  font-family: Arial, sans-serif;
`;

const Heading = styled.h1`
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
`;

const Content = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const UploadContainer = styled.div`
  margin-top: 20px;
`;

const ContentItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 5px;
`;
