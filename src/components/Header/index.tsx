import * as S from "./style";
import SunHorizonImg from "../../assets/SunHorizon.svg";
import { NavBar } from "./NavBar/index";

export function Header() {
  return (
    <>
      <S.Header>
        <S.ImgLogo src={SunHorizonImg} alt="Sunset News logo"/>
        <h1>SUNSET NEWS</h1>
      </S.Header>
      <NavBar />
    </>
  )
}