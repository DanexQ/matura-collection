import * as S from "./StyledFilters";

const Filters = () => {
  return (
    <S.FiltersContainer>
      <S.FiltersTitle>Filtruj zadania</S.FiltersTitle>
      <S.Filters>
        <input type="checkbox" name="Funkcje trygonometryczne" />
        <label htmlFor="Funkcje trygonometryczne">
          Funkcje trygonometryczne
        </label>
      </S.Filters>
    </S.FiltersContainer>
  );
};

export default Filters;
