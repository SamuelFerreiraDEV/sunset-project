import * as S from "./style";
import WhatsImg  from "../../assets/WhatsappLogo.svg";
import MailImg  from "../../assets/EnvelopeSimple.svg";

export function Footer() {
  return (
    <S.Footer>
      <div>
        <img src={WhatsImg} />
        <h3>(XX) X XXXXXXXX</h3>
      </div>
      <div>
        <img src={MailImg} />
        <h3>sunsetnews@sunsetnews.com</h3>
      </div>
      <div>
      <h2>
        Sunset News Copyright © 2024. Todos os direitos reservados.
      </h2>
      </div>
    </S.Footer>
  )
}