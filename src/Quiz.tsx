import React, { useState } from "react";
import { questions } from "./Questions";
import Timer from "./Timer";

export function Quiz() {
  const [questionNumber, setQuestionNumber] = useState<number>(0);
  const [showScore, setShowScore] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  const [timer, setTimer] = useState<number>(10);

  const clickHandle = (isCorrect: boolean) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }
  };

  const retryHandle = () => {
    setScore(0);
    setQuestionNumber(0);
    setShowScore(false);
  };

  const nextClickHandle = () => {
    const nextQuestion = questionNumber + 1;
    if (nextQuestion < questions.length) {
      setQuestionNumber(nextQuestion);
    } else {
      setTimer(0);
      setShowScore(true);
    }
  };

  return (
    <>
    Remaining Time:
      <Timer
        questionNumber={questionNumber}
        setShowScore={setShowScore}
        setQuestionNumber={setQuestionNumber}
        length={questions.length}
        timer={timer}
        setTimer={setTimer}
        prevQuestion={0}
      />
      <div className="app">
        {showScore ? (
          <>
            <div className="score-section">
              You scored {score} out of {questions.length}
            </div>
            <div>
              <button onClick={retryHandle}>Retry !</button>
            </div>
          </>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>{questionNumber + 1}</span>/{questions.length}
              </div>

              <div className="question-text">
                {questions[questionNumber].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questions[questionNumber].answerOptions.map((answerOption) => (
                <button onClick={() => clickHandle(answerOption.isCorrect)}>
                  {answerOption.answerText}
                </button>
              ))}
            </div>
            <button className="nextBtn" onClick={nextClickHandle}>
              Next
            </button>
          </>
        )}
      </div>
    </>
  );
}
