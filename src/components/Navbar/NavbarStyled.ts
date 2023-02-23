import styled from "styled-components";

export const NavBackground = styled.nav`
  display: block;
  height: 80px;
  background-color: #fffffe;
`;

export const NavContainer = styled.div`
  max-width: 120rem;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.7rem;
  font-weight: 500;
  gap: 5rem;
  text-transform: uppercase;
  text-align: center;
  color: ${(props) => props.theme["light"].color};

  > :nth-child(1) {
    font-weight: 700;
  }
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  gap: 3rem;

  &:hover {
    color: ${({ theme }) => theme["light"].color}80;
  }

  > li {
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
      color: ${({ theme }) => theme["light"].highlight};
    }
  }
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;

  svg {
    font-size: 4rem !important;
    transition: color 0.2s;
  }

  &:hover {
    color: ${({ theme }) => theme["light"].highlight};
  }
`;
