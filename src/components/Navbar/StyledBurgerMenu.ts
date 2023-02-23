import styled from "styled-components";

export const BurgerContainer = styled.div`
  padding: 1rem 0;
  width: 25px;
  cursor: pointer;
`;

export const BurgerIcon = styled.div<{ active: boolean }>`
  width: 100%;
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
