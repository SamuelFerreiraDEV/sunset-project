import { NewsCard } from "./NewsCard";
import * as S from "./style";

export function NewsPanel() {

  let numbersArray = [1, 2, 3, 4, 5, 6, 56, 51, 11,991,61,81,177,215,451]

  function renderCards() {
    return numbersArray.map((key) => {
      return <NewsCard num={key} key={key}/>
    })
  }
  
  return (
    <S.Div>
      {renderCards()}
    </S.Div>
  )

  
}
