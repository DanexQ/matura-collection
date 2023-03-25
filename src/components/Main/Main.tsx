import Filters from "./Filters";
import * as S from "./StyledMain";
import Tasks from "./Tasks";

const Main = () => (
  <S.MainContainer>
    <Tasks />
    <Filters />
  </S.MainContainer>
);

export default Main;
