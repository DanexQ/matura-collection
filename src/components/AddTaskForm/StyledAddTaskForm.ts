import styled from "styled-components";

export const FormContainer = styled.div`
  margin: 5rem auto;
  max-width: 80rem;
`;

export const Form = styled.form`
  display: grid;
  justify-content: center;
  align-items: center;
  text-align: center;
  grid-template-columns: max-content 1fr;
  font-size: 2rem;
  gap: 2rem;

  input,
  select {
    height: 5rem;
    text-align: center;
    font-size: inherit;
  }
`;

export const FormButton = styled.button`
  grid-column: 1/3;
  justify-self: center;
  width: 25%;
  height: 5rem;
`;
