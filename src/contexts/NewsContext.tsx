import { createContext, useEffect, useState } from "react";
import { NewsProps, NewsProviderProps } from "../types/types";
import { api } from "../services/api";
import NewsData from '../services/NewsData.json'

export const NewsContext = createContext<NewsProps[]>([]);

export function NewsProvider({ children }: NewsProviderProps) {
  const [news, setNews] = useState<NewsProps[]>([]);
  
  useEffect(() => {  
    api.get('news')
    .then(response => setNews(response.data))
  }, [])
  
  console.log(news);
  
  return(
    <NewsContext.Provider value={news}>
      {children}
    </NewsContext.Provider>
  )

}