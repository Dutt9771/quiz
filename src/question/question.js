import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
export default function Questions() {
  let questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "Madrid", "Rome", "Berlin"],
      answer: "Paris",
    },
    {
      question: "What is the largest planet in the solar system?",
      options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
      answer: "Jupiter",
    },
    {
      question: "What is the highest mountain in the world?",
      options: ["Everest", "Kilimanjaro", "Denali", "Aconcagua"],
      answer: "Everest",
    },
    {
      question: "Who wrote the Harry Potter series of books?",
      options: [
        "J.K. Rowling",
        "Stephen King",
        "Dan Brown",
        "George R.R. Martin",
      ],
      answer: "J.K. Rowling",
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [open, setOpen] = useState(true);

  //   question=questions[0]
  const answerQuestion = (answer) => {
    if (answer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQue = currentQuestion + 1;
    console.log("currentQuestion", currentQuestion + 1);
    if (nextQue === questions.length) {
      setOpen(false);
    } else {
      setCurrentQuestion(currentQuestion + 1);
      console.log("currentQuestion", currentQuestion);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setOpen(true);
  };
  return (
    <div>
      <div sx={{ 
      float:'right'}}>
      <Button
        variant="outlined"
        type="button"
        onClick={resetQuiz}
        sx={{
          
      float:'right',
          marginTop: "5px",
          marginBottom: "5px",
          marginRight: "8px",
          color: "black",
          border: "1px solid black",
          "&:hover": {
            color: "white",
            backgroundColor: "green",
            border: "1px solid green",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        RESET
      </Button>

          </div>
      <div style={{marginTop:"30px"}}>
        {open ? (
          <>
            <h1>{questions[currentQuestion].question}</h1>
            {questions[currentQuestion].options.map((option, index) => {
              return (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: "700px",
                      backgroundColor: "white",
                      "&:hover": {
                        color: "green",

                        opacity: [0.9, 0.8, 0.7],
                      },
                      cursor: "pointer",
                    }}
                  >
                    <Stack
                      direction="column"
                      justifyContent="center"
                      alignItems="center"
                      spacing={2}
                      onClick={() => answerQuestion(option)}
                      type="button"
                      style={{
                        display: "container",
                        padding: "25px",
                        borderRadius: "5px",
                        margin: "10px",
                        marginRight: "10px",
                        justifyContent: "center",
                      }}
                      sx={{
                        color: "black",
                        border: "1px solid black",
                        "&:hover": {
                          color: "white",
                          backgroundColor: "green",
                          border: "1px solid green",
                          opacity: [0.9, 0.8, 0.7],
                        },
                      }}
                    >
                      {option}
                    </Stack>
                  </Box>
                </div>
              );
            })}
            {/* <button type='button' id='btn' onClick={nextQuestion}>{btn}</button> */}
          </>
        ) : (
          <div>
            <h4>Quiz Result</h4>
            <h1>
              {score}/{questions.length}
            </h1>
            <h1 style={{color:"blue"}}>
            "To retake the quiz, Click on the 'Reset' button.
            </h1>
          </div>
        )}
      </div>
      {/* <div >Scrore is {score}</div> */}
    </div>
  );
}
