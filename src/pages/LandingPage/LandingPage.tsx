import { Link } from "react-router-dom";
import SunHorizonImg from "../../assets/SunHorizon.svg";
import * as S from "./style";
import { useContext } from "react";
import { NewsContext } from "../../contexts/NewsContext";

export function LandingPage() {

  const { news } = useContext(NewsContext)

  return (
    <S.Div>
      <h3>Este é apenas um exemplo (imcompleto) de como a Landing Page seria caso fosse desacoplada do site.</h3>
      <div>
        <S.Header>
          <Link to="/">
            <S.ImgLogo src={SunHorizonImg} alt="Sunset News logo"/>
            <h1>SUNSET NEWS</h1>
          </Link>
        </S.Header>
        <h3>
          A Sunset News tem a missão de entregar as últimas notícias em tecnologia <br></br> em um ambiente confortável, ideal para aquela pausa da tarde!
        </h3>
        <Link to="/">
            <button>
              Acesse já e saiba tudo que acontece na área tech em primeira mão!
            </button>
        </Link>
        <S.CardsHolder>
          <S.Cards>card1</S.Cards>
          <S.Cards>card2</S.Cards>
          <S.Cards>card3</S.Cards>
        </S.CardsHolder>
      </div>
    </S.Div>
  )
}