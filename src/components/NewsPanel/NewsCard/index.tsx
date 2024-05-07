import { Link } from "react-router-dom";
import { NewsProps } from "../../../types/nav";
import * as S from "./style";

export function NewsCard(props: NewsProps) {
  const link = '/news/' + (parseInt(props.id) - 1);
  return (
    <S.Div>
      <Link to={link}>
        <img src={props.image} />
        <div>
          <h3>{props.title}</h3>
        </div>
      </Link>
    </S.Div>
  )
}