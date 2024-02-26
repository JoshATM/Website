import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";

export default function CreateQuiz() {
  const [quizzes, setQuizzes] = useState([]);
  const [questions, setQuestions] = useState([]);

  const addQuestion = () => {
    setQuestions([
      ...questions,
      { question: "", options: [], rightChoice: "" },
    ]);
  };

  const handleQuestionChange = (index, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].question = value;
    setQuestions(updatedQuestions);
  };

  const handleOptionChange = (questionIndex, optionIndex, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options[optionIndex] = value;
    setQuestions(updatedQuestions);
  };

  const handleRightChoiceChange = (questionIndex, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].rightChoice = value;
    setQuestions(updatedQuestions);
  };

  const saveQuiz = () => {
    console.log("Quiz saved!");
    const newQuiz = { questions: [...questions] };
    setQuizzes([...quizzes, newQuiz]);
    localStorage.setItem("quizzes", JSON.stringify(quizzes));
  };

  return (
    <Container>
      <Title>Create Quiz</Title>
      {questions.map((question, questionIndex) => (
        <QuestionContainer key={questionIndex}>
          <QuestionInput
            value={question.question}
            onChange={(e) =>
              handleQuestionChange(questionIndex, e.target.value)
            }
            placeholder="Enter question"
          />
          <OptionsContainer>
            {question.options.map((option, optionIndex) => (
              <OptionInput
                key={optionIndex}
                value={option}
                onChange={(e) =>
                  handleOptionChange(questionIndex, optionIndex, e.target.value)
                }
                placeholder={`Option ${optionIndex + 1}`}
              />
            ))}
            <AddOptionButton
              onClick={() => {
                const updatedQuestions = [...questions];
                updatedQuestions[questionIndex].options.push("");
                setQuestions(updatedQuestions);
              }}
              text="Add Option"
            />
          </OptionsContainer>
          <RightChoiceContainer>
            <RightChoiceLabel>Right Choice:</RightChoiceLabel>
            <RightChoiceSelect
              value={question.rightChoice}
              onChange={(e) =>
                handleRightChoiceChange(questionIndex, e.target.value)
              }
            >
              <option value="">Select Right Choice</option>
              {question.options.map((option, optionIndex) => (
                <option key={optionIndex} value={option}>
                  {option}
                </option>
              ))}
            </RightChoiceSelect>
          </RightChoiceContainer>
        </QuestionContainer>
      ))}
      <AddQuestionButton onClick={addQuestion} text="Add Question" />
      <SaveButton onClick={saveQuiz} text="Save Quiz" />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const QuestionContainer = styled.div`
  margin-bottom: 20px;
`;

const QuestionInput = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const OptionInput = styled.input`
  margin-bottom: 5px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const RightChoiceContainer = styled.div`
  display: flex;
  align-items: center;
`;

const RightChoiceLabel = styled.label`
  margin-right: 5px;
`;

const RightChoiceSelect = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const AddOptionButton = styled(Button)`
  margin-top: 5px;
`;

const AddQuestionButton = styled(Button)`
  margin-top: 10px;
`;

const SaveButton = styled(Button)`
  margin-top: 10px;
`;
