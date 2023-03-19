import { useTheme } from "styled-components";
import * as S from "./StyledNavbar";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import BurgerMenu from "./BurgerMenu";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Navbar = () => {
  const theme = useTheme();
  const [isActiveMenu, setIsActiveMenu] = useState<boolean>(false);
  const navListElements = [
    <li key={uuidv4()}>Arkusze</li>,
    <li key={uuidv4()}>Wszystkie Zadania</li>,
    <li key={uuidv4()}>Losowe zadanie</li>,
  ];

  const handleActivateMenu = () => {
    setIsActiveMenu((prevState) => !prevState);
  };

  return (
    <S.NavBackground>
      <S.NavContainer>
        <p>Prosta Matura</p>
        <S.NavList>{navListElements}</S.NavList>
        <S.Button>
          <AccountCircleOutlinedIcon />
        </S.Button>
        <BurgerMenu
          activeMenu={isActiveMenu}
          handleActivateMenu={handleActivateMenu}
        />
      </S.NavContainer>
      <S.MobileNavList isActiveMenu={isActiveMenu}>
        {navListElements}
      </S.MobileNavList>
    </S.NavBackground>
  );
};

export default Navbar;
