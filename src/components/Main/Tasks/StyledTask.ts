import styled from "styled-components";

export const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.6rem;
  gap: 2rem;
  align-self: stretch;
  padding: 3rem;
  border: 1px solid #f0f0f0;
`;

export const TaskTop = styled.div`
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const TaskTag = styled.div`
  background-color: #f4d3ff;
  padding: 0.5rem 1rem;
  color: #c100ff;
  font-size: 1.2rem;
`;

export const TaskPoints = styled.div`
  color: gray;
  margin-left: auto;
`;

export const TaskContent = styled.div``;

export const TaskType = styled.div`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: blue;
`;

export const AnswerButton = styled.button<{ formulaType: "old" | "new" }>`
  background-color: #d3efff;
  border: none;
  padding: 0.75rem 1rem;
  align-self: flex-start;
  font-size: 1.6rem;
  transition: all 0.2s;
  font-family: inherit;
  font-weight: 500;
  cursor: pointer;
  color: #00a2ff;
  position: relative;
  z-index: 1;

  &::after {
    content: "";
    width: 0%;
    height: 2px;
    background-color: #00a2ff;
    position: absolute;
    bottom: 0px;
    right: 50%;
    z-index: 5;
    transition: all 0.2s;
  }

  &:hover {
    filter: brightness(95%);

    &::after {
      width: 100%;
      right: 0%;
    }
  }
`;

export const TaskAnswer = styled.div<{ showAnswer: boolean }>`
  width: 100%;
  font-weight: 700;
  overflow: hidden;
  padding: ${({ showAnswer }) => (showAnswer ? "1rem 0" : "0")};
  transition: all 0.1s;
  max-height: ${({ showAnswer }) => (showAnswer ? "100px" : "0px")};
`;
