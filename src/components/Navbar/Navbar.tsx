import { useTheme } from "styled-components";
import * as S from "./NavbarStyled";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Navbar = () => {
  const theme = useTheme();
  console.log(theme);
  return (
    <S.NavBackground>
      <S.NavContainer>
        <p>Prosta Matura</p>
        <S.NavList>
          <li>Arkusze</li>
          <li>Wszystkie Zadania</li>
          <li>Losowe zadanie</li>
        </S.NavList>
        <S.Button>
          <AccountCircleOutlinedIcon />
        </S.Button>
      </S.NavContainer>
    </S.NavBackground>
  );
};

export default Navbar;
