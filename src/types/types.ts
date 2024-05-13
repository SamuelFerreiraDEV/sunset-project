import { ReactNode } from "react"

export type NavItemListProps = {
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
  news: NewsProps[],
  newsFilter: string,
  createNews: (news: NewsProps) => Promise<void>,
  deleteNews: (news: NewsProps) => Promise<void>,
  searchForNews: (input: string) => void
}