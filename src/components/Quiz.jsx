import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";

export default function Quiz() {
  const [quizData, setQuizData] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);

  // Load quiz data from local source
  const loadQuizData = () => {
    const data = localStorage.getItem("quizzes");
    setQuizData(JSON.parse(data));
  };

  // Handle option selection
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  // Handle submitting the answer
  const submitAnswer = () => {
    const currentQuiz = quizData[currentQuestion];
    if (selectedOption === currentQuiz.correctOption) {
      setScore(score + 1);
    }
    setSelectedOption(null);
    setCurrentQuestion(currentQuestion + 1);
  };

  // Render quiz questions and options
  const renderQuiz = () => {
    if (!quizData) {
      return <p>Loading quiz...</p>;
    }

    if (currentQuestion >= quizData.length) {
      return (
        <div>
          <p>Quiz completed!</p>
          <p>Your score: {score}</p>
        </div>
      );
    }

    const currentQuiz = quizData[currentQuestion];

    return (
      <div>
        <Question>{currentQuiz.question}</Question>
        <Options>
          {currentQuiz.options &&
            currentQuiz.options.map((option, index) => (
              <Option key={index}>
                <label>
                  <Input
                    type="radio"
                    name="option"
                    value={option}
                    checked={selectedOption === option}
                    onChange={() => handleOptionSelect(option)}
                  />
                  {option}
                </label>
              </Option>
            ))}
        </Options>
        <Button onClick={submitAnswer} text="Submit" />
      </div>
    );
  };

  return (
    <Container>
      <Title>Quiz</Title>
      <Button onClick={loadQuizData} text="Load Quiz" />
      {renderQuiz()}
    </Container>
  );
}

const Question = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const Options = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const Option = styled.li`
  margin-bottom: 5px;
`;

const Input = styled.input`
  margin-right: 5px;
`;

const Container = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;
