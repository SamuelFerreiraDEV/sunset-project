import { createContext, useEffect, useState } from "react";
import { NewsProps, NewsProviderProps, NewsContextData} from "../types/types";
import { api } from "../services/api";

export const NewsContext = createContext<NewsContextData>(
  {} as NewsContextData
);

export function NewsProvider({ children }: NewsProviderProps) {
  const [news, setNews] = useState<NewsProps[]>([]);

  useEffect(() => {
    api.get('news')
    .then(response => setNews(response.data))
  }, [])

  async function createNews(newsInput: NewsProps) {
    const response = await api.post('news', {
      ...newsInput,
      published_date: new Date()
    });
    const newNews = response.data.news;

    setNews([
      ...news,
      newNews,
    ])
  }

  async function deleteNews({ id }: NewsProps) {
    
    await api.delete(`news/${id}`);

    const getResponse = await api.get('news');
    setNews(getResponse.data)
  }
  
  return(
    <NewsContext.Provider value={{news, createNews, deleteNews}}>
      {children}
    </NewsContext.Provider>
  )

}