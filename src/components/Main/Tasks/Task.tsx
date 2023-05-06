import * as S from "./StyledTask";
import MathJax from "better-react-mathjax/MathJax";
import { useState } from "react";

export type TaskProps = {
  content: string;
  answer: string;
  taskType: string;
  formula: "Nowa" | "Stara";
  examType: "Oficjalna" | "Dodatkowa" | "Próbna";
  examYear: number;
  points: number;
  imageUrl?: string;
};

const Task = (taskDetails: TaskProps) => {
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const percentages = Math.floor((taskDetails.points / 50) * 100);

  const handleClick = () => {
    setShowAnswer((prevState) => !prevState);
  };

  return (
    <S.TaskContainer>
      <S.TaskTop>
        <S.TaskTag>
          {"Matura " + taskDetails.examType + " " + taskDetails.examYear}{" "}
        </S.TaskTag>
        <S.TaskTag tagType={taskDetails.formula}>
          {taskDetails.formula} Formuła
        </S.TaskTag>
        <S.TaskTag tagType={taskDetails.taskType}>
          {taskDetails.taskType}
        </S.TaskTag>
        <S.TaskPoints>
          Punkty: 0-{taskDetails.points} ({percentages}%)
        </S.TaskPoints>
      </S.TaskTop>
      <S.TaskContent>
        <MathJax style={{ display: "inline-block" }}>
          {taskDetails.content}
        </MathJax>
        <S.TaskAnswer showAnswer={showAnswer}>
          <MathJax>Odpowiedź: {taskDetails.answer}</MathJax>
        </S.TaskAnswer>
      </S.TaskContent>
      <S.AnswerButton onClick={handleClick}>Odpowiedź</S.AnswerButton>
    </S.TaskContainer>
  );
};

export default Task;
