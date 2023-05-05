import styled from "styled-components";

export const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  gap: 2rem;
  flex: 1;
  font-size: 1.6rem;
`;

export const FilterQuantity = styled.span`
  color: gray;
  font-size: 1.2rem;
  font-weight: 600;
`;

export const Filters = styled.div`
  display: grid;
  flex-direction: column;
  grid-template-columns: max-content 1fr;
  gap: 0.5rem;
`;

export const FiltersTitle = styled.h3`
  font-size: 2rem;
  text-transform: uppercase;
`;
