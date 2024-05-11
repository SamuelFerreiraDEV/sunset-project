import { useContext } from "react";
import { NewsBoard } from "../../components/NewsBoard";
import * as S from "./style";
import { NewsContext } from "../../contexts/NewsContext";

export function Home() {

  const { news } = useContext(NewsContext);

  return (
    <S.Div>
      <NewsBoard newsArr={news}/>
    </S.Div>
  )
}