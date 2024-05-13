import { NewsCard } from "./NewsCard";
import * as S from "./style";
import { NewsBoardProps, NewsProps } from "../../types/types";
import { useContext } from "react";
import { NewsContext } from "../../contexts/NewsContext";

export function NewsBoard({ newsArr } : NewsBoardProps) {

  const { newsFilter } = useContext(NewsContext);
  
  function renderCards() {    
    
    return newsArr.filter((e) => e.title.toUpperCase().includes(newsFilter.toUpperCase()))
      .map((news: NewsProps) => {
        return  <NewsCard
                  id={news.id}
                  title={news.title} 
                  image={news.image}
                  category={news.category}
                  author={news.author} 
                  authorPic={news.authorPic}
                  published_date={news.published_date}
                  content={news.content} 
                  tags={news.tags} 
                  key={news.id}
                />
      }).reverse()
  }
  
  return (
    <S.Div>
      {renderCards()}
    </S.Div>
  )
}
