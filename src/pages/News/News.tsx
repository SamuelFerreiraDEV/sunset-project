import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NewsProps } from "../../types/nav";
import { NewsPage } from "../../components/NewsPage";

export function News() {
  const { id }: { id: string } = useParams() as { id: string }; // tipar melhor saporra
  const [news, setNews] = useState<NewsProps>();
  
  useEffect(() =>{
    fetch('http://localhost:5173/api/news/')
    .then(response => response.json())
    .then(data => setNews(data[id!]))
  }, [])

  console.log(id);
  
  if(news) {
    return <NewsPage id={news.id} author={news.author} authorPic={news.authorPic} category={news.category} content={news.content} image={news.image} published_date={news.published_date} tags={news.tags} title={news.title} key={news.id}/>
  }
  else {
    return <h1>Link inválido ou erro no carregamento!</h1>
  }
}