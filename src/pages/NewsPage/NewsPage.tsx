import { useContext } from "react";
import { useParams } from "react-router-dom";
import { NewsContent } from "../../components/NewsContent";
import { NewsContext } from "../../contexts/NewsContext";
import { NewsProps } from "../../types/types";

export function NewsPage() {
  const { id }: { id: string } = useParams() as { id: string }; // tipar melhor saporra
  
  const { news } = useContext(NewsContext);
  const newsData: NewsProps = news[parseInt(id)]
  
  if(newsData) {
    return  <NewsContent 
              newsData={newsData}
            />
  } else {
    return <h1>Erro no carregamento!</h1>
  }
}