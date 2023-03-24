import React from "react";
import * as S from "./StyledTask";
import MathJax from "better-react-mathjax/MathJax";
import { MathJaxContext } from "better-react-mathjax";

interface TaskProps {
  taskNumber: number;
  taskPoints: number;
  examYear: number;
  formula: string;
}

const Task = ({}) => {
  return (
    <S.TaskContainer>
      <S.TaskBorder>
        <S.TaskTitle>
          Zadanie 2. (0-3) | MATURA 2021 - STARA FORMUŁA |
        </S.TaskTitle>
        <S.TaskContent>
          {" "}
          Różnica{" "}
          <MathJax style={{ display: "inline-block" }}>
            {"`cos^2 165^circ - sin^2 165^circ`"}
          </MathJax>{" "}
          jest równa
        </S.TaskContent>
        <S.TaskAnswer></S.TaskAnswer>
      </S.TaskBorder>
      <S.AnswerButton>Odpowiedź</S.AnswerButton>
    </S.TaskContainer>
  );
};

export default Task;
