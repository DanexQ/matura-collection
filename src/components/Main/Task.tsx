import * as S from "./StyledTask";
import MathJax from "better-react-mathjax/MathJax";
import { useState } from "react";

interface TaskProps {
  taskNumber: number;
  taskPoints: number;
  examYear: number;
  formulaType: "old" | "new";
  //taskContent
  //taskAnswer
}

const Task = ({ taskNumber, taskPoints, examYear, formulaType }: TaskProps) => {
  const formula = formulaType == "new" ? "NOWA" : "STARA";
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  const handleClick = () => {
    setShowAnswer((prevState) => !prevState);
  };

  return (
    <S.TaskContainer>
      <S.TaskBorder>
        <S.TaskTitle formulaType={formulaType}>
          Zadanie {taskNumber}. (0-{taskPoints}) | MATURA {examYear} - {formula}{" "}
          FORMUŁA |
        </S.TaskTitle>
        <S.TaskContent>
          <MathJax style={{ display: "inline-block" }}>
            Różnica {"`cos^2 165^circ - sin^2 165^circ`"} jest równa:
          </MathJax>
          <S.TaskAnswer showAnswer={showAnswer}>
            <MathJax>Odpowiedź: {"`frac{sqrt{3}}{2}`"}</MathJax>
          </S.TaskAnswer>
        </S.TaskContent>
      </S.TaskBorder>
      <S.AnswerButton onClick={handleClick} formulaType={formulaType}>
        Odpowiedź
      </S.AnswerButton>
    </S.TaskContainer>
  );
};

export default Task;
