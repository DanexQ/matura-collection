import * as S from "./StyledBurgerMenu";

interface BurgerMenuProps {
  activeMenu: boolean;
  handleActivateMenu: () => void;
}

const BurgerMenu = ({ activeMenu, handleActivateMenu }: BurgerMenuProps) => {
  return (
    <S.BurgerContainer onClick={handleActivateMenu}>
      <S.BurgerIcon active={activeMenu} />
    </S.BurgerContainer>
  );
};

export default BurgerMenu;
