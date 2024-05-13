import { Link } from "react-router-dom";
import SunHorizonImg from "../../assets/SunHorizon.svg";
import * as S from "./style";

export function LandingPage() {
  return (
    <S.Div>
      <h3>Este é apenas um exemplo de como a Landing Page seria caso fosse desacoplada do site.</h3>
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
        

      </div>
    </S.Div>
  )
}