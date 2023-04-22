import Tasks from "./Tasks";
import { Filters } from "./StyledFilters";
import * as S from "./StyledMain";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const Main = () => {
  const elo = async () => {
    const tasksRef = collection(db, "tasks");
    const tasksSnap = await getDocs(tasksRef);
    tasksSnap.forEach((doc) => console.log(doc.id, doc.data()));
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
