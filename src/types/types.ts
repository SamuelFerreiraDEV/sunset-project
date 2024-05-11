import { ReactNode } from "react"

export type NavItemListProps = {   // TYPE x INTERFACE
  href: string,
  imgLink: string,
  innerText: string
}

export type NewsProps = {
  id: string,
  title: string,
  image: string,
  category: string,
  author: string,
  authorPic: string,
  published_date: string,
  content: string,
  tags: string[]
}

export type NewsProviderProps = {
  children: ReactNode
}

export type NewsBoardProps = {
  newsArr: NewsProps[]
}

export type NewsContentProps = {
  newsData: NewsProps
}

export interface NewsContextData {
  news: NewsProps[]
  createNews: (news: NewsProps) => Promise<void>
}

export interface SearchNews {
  titleInput: string,
  tagsInput: string
}