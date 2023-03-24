import styled from "styled-components";

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  gap: 3rem;
  font-size: var(--navbar-font-size);
  text-transform: uppercase;

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

export const MobileNavList = styled(NavList)<{ isActiveMenu: boolean }>`
  display: none;
  background-color: #fff;
  position: fixed;
  top: 80px;
  right: ${({ isActiveMenu }) => (isActiveMenu ? "0%" : "-100%")};
  width: 70%;
  height: calc(100% - 80px);
  border-left: 1px solid #00000020;
  box-shadow: -100px 0 5rem #00000010;
  clip-path: inset(0px 0px 0px -100%);
  transition: right 0.2s;

  @media only screen and (max-width: 350px) {
    width: 100%;
  }
  @media only screen and (max-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 2rem;
    gap: 5rem;
  }
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;

  svg {
    font-size: 3rem !important;
    transition: color 0.2s;
  }

  &:hover {
    color: ${({ theme }) => theme["light"].highlight};
  }
`;

export const NavBackground = styled.nav`
  --navbar-font-size: 1.7rem;
  display: block;
  height: 80px;
  background-color: #fafafa;
  border: 1px solid #00000010;
  box-shadow: 0 0 1rem #00000020;
  padding: 2rem;
  position: sticky;
  top: 0;
`;

export const NavContainer = styled.div`
  max-width: 120rem;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: var(--navbar-font-size);
  font-weight: 500;
  gap: 5rem;
  text-transform: uppercase;
  text-align: center;
  color: ${(props) => props.theme["light"].color};
  transition: all 0.2s;
  z-index: 1000;

  > p:nth-child(1) {
    font-weight: 700;
  }

  @media only screen and (max-width: 600px) {
    justify-content: center;
    gap: 2rem;

    > p:nth-child(1) {
      margin-right: auto;
    }

    ${NavList} {
      display: none;
    }
  }
`;
