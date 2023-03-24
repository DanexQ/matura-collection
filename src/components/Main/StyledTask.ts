import styled from "styled-components";

export const TaskContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.6rem;
  gap: 1rem;
`;

export const TaskTitle = styled.div`
  background-color: ${({ theme }) => theme["light"].formula["old"].color};
  padding: 1rem 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme["light"].formula["old"].font}; ;
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

export const AnswerButton = styled.button`
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
    background-color: ${({ theme }) => theme["light"].formula["old"].color};
    color: ${({ theme }) => theme["light"].formula["old"].font};
  }
`;

export const TaskAnswer = styled.div``;
