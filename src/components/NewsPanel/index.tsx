import { useEffect, useState } from "react";
import { NewsCard } from "./NewsCard";
import * as S from "./style";
import { NewsProps } from "../../types/nav";

export function NewsPanel() {
  
  const [newsArr, setNewsArr] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5173/api/news')
    .then(response => response.json())
    .then(data => setNewsArr(data))
  }, [])
console.log(newsArr);

  
  function renderCards() {
    return newsArr.map((news: NewsProps) => {
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
                key={news.title}
              />
    })
  }
  
  return (
    <S.Div>
      {renderCards()}
    </S.Div>
  )
}
