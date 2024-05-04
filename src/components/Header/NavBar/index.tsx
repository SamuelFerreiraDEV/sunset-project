import * as S from "./style";
import SunHorizonImg from "../../../assets/SunHorizon.svg";
import ChatImg from "../../../assets/ChatCenteredDots.svg";
import CoffeeImg from "../../../assets/Coffee.svg";

export function NavBar() {
  return (
    <S.Nav>
      <ul>
        <li>
          <a href="/">
            <img src={SunHorizonImg} />
              Home
          </a>
        </li>
        <li>
          <a href="/contato">
            <img src={ChatImg} />
              Contato
            </a>
        </li>
        <li>
          <a href="/sobre">
            <img src={CoffeeImg} />
            Sobre
          </a>
        </li>
      </ul>
    </S.Nav>
  )
}