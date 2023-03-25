import styled from "styled-components";

export const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.6rem;
  gap: 0.5rem;
  align-self: stretch;
`;

export const TaskTitle = styled.div<{ formulaType: "old" | "new" }>`
  ${({ theme, formulaType }) => `
    background-color: ${theme["light"].formula[formulaType].color};
    color: ${theme["light"].formula[formulaType].font};
  `}
  padding: 1rem 1rem;
  font-weight: 500;
`;

export const TaskContent = styled.div`
  padding: 1rem 2rem;
  background-color: #fafafa;
`;

export const TaskType = styled.div`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: blue;
`;

export const TaskBorder = styled.div`
  border: 1px solid #00000020;
`;

export const AnswerButton = styled.button<{ formulaType: "old" | "new" }>`
  background-color: #fafafa;
  text-transform: uppercase;
  border: 1px solid #00000020;
  padding: 1rem;
  align-self: flex-start;
  font-size: inherit;
  transition: all 0.2s;
  font-family: inherit;
  font-weight: 500;
  border-radius: 1rem;
  cursor: pointer;
  color: #5a5560;

  &:hover {
    ${({ theme, formulaType }) => `
    background-color: ${theme["light"].formula[formulaType].color};
    color: ${theme["light"].formula[formulaType].font};
  `}
  }
`;

export const TaskAnswer = styled.div<{ showAnswer: boolean }>`
  width: 100%;
  overflow: hidden;
  padding: ${({ showAnswer }) => (showAnswer ? "1rem 0" : "0")};
  transition: all 0.1s;
  max-height: ${({ showAnswer }) => (showAnswer ? "100px" : "0px")};
`;
