import styled from "styled-components";

export const BurgerContainer = styled.div`
  --burger-width: 25px;
  width: var(--burger-width);
  height: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 600px) {
    display: none;
  }
`;

export const BurgerIcon = styled.div<{ active: boolean }>`
  width: var(--burger-width);
  background-color: ${({ theme, active }) =>
    active ? theme["light"].background : theme["light"].color};
  height: 3px;
  border-radius: 5px;
  position: relative;
  transition: background-color 0.2s ease-in;

  &::after,
  &::before {
    content: "";
    display: block;
    width: ${({ active }) => (active ? `100%` : `50%`)};
    height: inherit;
    background-color: ${({ theme }) => theme["light"].color};
    border-radius: inherit;
    position: absolute;
    top: 0;
    transition: all 0.2s ease-out;
  }
  &::after {
    transform: ${({ active }) =>
      active
        ? `translateY(0px) translateX(0%) rotate(135deg)`
        : `translateY(6px) translateX(50%)`};
  }

  &::before {
    transform: ${({ active }) =>
      active
        ? `translateY(0px) translateX(0%) rotate(-135deg)`
        : `translateY(-6px) translateX(50%)`};
  }
`;
