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

export const TaskTag = styled.div<{ tagType?: string }>`
  background-color: #f4d3ff;
  padding: 0.5rem 1rem;
  color: #c100ff;
  font-size: 1.2rem;
  ${({ tagType }) => {
    switch (tagType) {
      case "Stara":
        return `background-color: #FFFCAB; color: #D4BA00`;
      case "Nowa":
        return `background-color: #f4d3ff; color: #c100ff`;
      case "Optymalizacja":
        return `background-color: #C3FFB4; color: #20A100`;
      case "Stereometria":
        return `background-color: #A0A6FF; color: #000EE4`;
      case "Granice":
        return `background-color: #FFABFE; color: #CA00C7`;
      case "Trygonometria":
        return `background-color: #FFA1A1; color: #B00000`;
      case "Równania trygonometryczne":
        return `background-color: #FFE5C2; color: #FF9300`;
      case "Wielomiany":
        return `background-color: #C5FFFE; color: #00C1BE`;
      case "Ciągi":
        return `background-color: #FFA1A1; color: #B00000`;
      case "Dowody algebraiczne":
        return `background-color: #DDC8FF; color: #6100FF`;
      case "Dowody geometryczne":
        return `background-color: #FFCDB0; color: #E95500`;
      case "Nierówności":
        return `background-color: #C4EBFF; color: #0080C1`;
      case "Równania z parametrem":
        return `background-color: #FEA7D0; color: #CF0061`;
      case "Prawdopodobieństwo":
        return `background-color: #EDBEFF; color: #9B00D5`;
      case "Kombinatoryka":
        return `background-color: #9EDB9D; color: #027800`;
      case "Wartości bezwzględne":
        return `background-color: #E5A4DA; color: #72005F`;
      case "Geometria analityczna":
        return `background-color: #A7ABF5; color: #010785`;
      case "Planimetria":
        return `background-color: #DDDE97; color: #7E8000`;
      default:
        return `background-color: #DFDFDF; color: #373737`;
    }
  }}
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

export const AnswerButton = styled.button`
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
