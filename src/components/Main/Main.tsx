import Tasks from "./Tasks/Tasks";
import Filters from "./Filters/Filters";
import * as S from "./StyledMain";

const Main = () => {
  return (
    <S.MainContainer>
      <Tasks />
      <Filters />
    </S.MainContainer>
  );
};

export default Main;
