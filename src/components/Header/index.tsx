import * as S from "./style";
import SunHorizonImg from "../../assets/SunHorizon.svg";
import { NavBar } from "./NavBar/index";
import { Link } from "react-router-dom";

export function Header() {

  return (
    <>
      <S.Header>
        <Link to="/">
          <S.ImgLogo src={SunHorizonImg} alt="Sunset News logo"/>
          <h1>SUNSET NEWS</h1>
        </Link>
        
      </S.Header>
      <NavBar />
    </>
  )
}