import React from "react";
import Tasks from "./Tasks";
import { Filters } from "./StyledFilters";
import * as S from "./StyledMain";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const Main = () => {
  const elo = async () => {
    const tasksSnapshot = await getDocs(collection(db, "taksk"));
    console.log(tasksSnapshot);
    tasksSnapshot.forEach((doc) => {
      console.log(doc.id);
    });
  };
  elo();

  return (
    <S.MainContainer>
      <Tasks />
      <Filters />
    </S.MainContainer>
  );
};

export default Main;
