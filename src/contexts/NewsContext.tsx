import { createContext, useEffect, useState } from "react";
import { NewsProps, NewsProviderProps } from "../types/types";
import { api } from "../services/api";

export const NewsContext = createContext<NewsProps[]>([]);

export function NewsProvider({ children }: NewsProviderProps) {
  const [news, setNews] = useState<NewsProps[]>([]);
  
  useEffect(() =>{
    api.get('news/0')
    .then(response => setNews(response.data))
  }, [])

  return(
    <NewsContext.Provider value={news.reverse()}>
      {children}
    </NewsContext.Provider>
  )

}