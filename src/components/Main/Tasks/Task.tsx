import * as S from "./StyledTask";
import MathJax from "better-react-mathjax/MathJax";
import { useState } from "react";

type TaskType = {
  content: string;
  answer: string;
  formula: "old" | "new";
  examType: "oficjalna" | "dodatkowa" | "próbna";
  examYear: number;
  points: number;
  imageUrl?: string;
};

const Task = () => {
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  const handleClick = () => {
    setShowAnswer((prevState) => !prevState);
  };

  return (
    <S.TaskContainer>
      <S.TaskTop>
        <S.TaskTag>Nowa Formuła</S.TaskTag>
        <S.TaskTag>Optymalizacja</S.TaskTag>
        <S.TaskPoints>Punkty: 0-7 [{Math.floor((7 / 50) * 100)}%]</S.TaskPoints>
      </S.TaskTop>
      <S.TaskContent>
        <MathJax style={{ display: "inline-block" }}>
          Różnica {"`cos^2 165^circ - sin^2 165^circ`"} jest równa:
        </MathJax>
        <S.TaskAnswer showAnswer={showAnswer}>
          <MathJax>Odpowiedź: {"`frac{sqrt{3}}{2}`"}</MathJax>
        </S.TaskAnswer>
      </S.TaskContent>
      <S.AnswerButton onClick={handleClick} formulaType={"old"}>
        Odpowiedź
      </S.AnswerButton>
    </S.TaskContainer>
  );
};

export default Task;
