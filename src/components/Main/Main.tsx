import React from "react";
import styled from "styled-components";
import * as S from "./StyledMain";
import Task from "./Task";

const Main = () => (
  <S.MainContainer>
    {/* <Tasks /> */}
    {/* <Filters /> */}
    <Task />
  </S.MainContainer>
);

export default Main;

const SomeContent = styled.div`
  height: 200vh;
`;
