import { useParams } from "react-router-dom";
import { NewsPanel } from "../../components/NewsPanel";
import * as S from "./style";

export function Home() {

  const param = useParams();
  console.log(param);
  

  return (
    <S.Div>
      <NewsPanel />
    </S.Div>
  )
}