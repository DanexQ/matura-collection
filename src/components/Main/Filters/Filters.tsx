import * as S from "./StyledFilters";

const Filters = () => {
  return (
    <S.FiltersContainer>
      <S.FiltersTitle>Filtruj zadania</S.FiltersTitle>
      <S.Filters>
        <input type="checkbox" name="Funkcje trygonometryczne" />
        <label htmlFor="Funkcje trygonometryczne">
          Funkcje trygonometryczne <S.FilterQuantity>(3)</S.FilterQuantity>
        </label>
        <input type="checkbox" name="Funkcje trygonometryczne" />
        <label htmlFor="Optymalizacja">
          Optymalizacja <S.FilterQuantity>(2)</S.FilterQuantity>
        </label>
      </S.Filters>
    </S.FiltersContainer>
  );
};

export default Filters;
