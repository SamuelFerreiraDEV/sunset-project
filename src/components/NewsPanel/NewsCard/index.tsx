import { NewsProps } from "../../../types/nav";
import * as S from "./style";

export function NewsCard(props: NewsProps) {
  return (
   <S.Div>
    <img src={props.image} />
    <div>
      <h3>{props.title}</h3>
    </div>
    
    </S.Div>
  )
}