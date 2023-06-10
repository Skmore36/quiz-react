import { useEffect, useState } from "react";
import "./App.css"
type TimerProps = {
  questionNumber: number;
  prevQuestion: number;
  length: number;
  setShowScore: React.Dispatch<React.SetStateAction<boolean>>;
  setQuestionNumber: React.Dispatch<React.SetStateAction<number>>;
  timer: number;
  setTimer: React.Dispatch<React.SetStateAction<number>>;
};

export default function Timer({
  questionNumber,
  setShowScore,
  setQuestionNumber,
  length,
  timer,
  setTimer,
}: TimerProps) {
 
  //   const [timer, setTimer] = useState(10);

  useEffect(() => {
    if (timer === 0) {
      if (questionNumber + 1 < length)
        setQuestionNumber((prevQuestion) => prevQuestion + 1);
      else {
        return setShowScore(true);
      }
    }
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  useEffect(() => {
    //reset when question number if last
    setTimer(10);
  }, [questionNumber]);
  return <span className="timer">{timer}</span>;
}
