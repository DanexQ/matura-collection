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
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FiltersTitle = styled.h3`
  font-size: 2rem;
  text-transform: uppercase;
`;

export const FilterElement = styled.div`
  display: flex;
  gap: 0.5rem;
`;
