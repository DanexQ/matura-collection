import React, { useState } from "react";
import * as S from "./StyledBurgerMenu";

const BurgerMenu = () => {
  const [activeMenu, setActiveMenu] = useState<boolean>(false);

  const handleClick = () => {
    setActiveMenu((prevState) => !prevState);
  };

  return (
    <S.BurgerContainer onClick={handleClick}>
      <S.BurgerIcon active={activeMenu} />
    </S.BurgerContainer>
  );
};

export default BurgerMenu;
