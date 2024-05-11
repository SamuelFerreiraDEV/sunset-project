import { NewsContentProps } from "../../types/types"

export function NewsContent({ newsData }: NewsContentProps) {
  return (
    <>
      <h1>{newsData.title}</h1>
      <h1>{newsData.published_date}</h1>
      <img src={newsData.image} />
      <p>{newsData.content}</p>
    </>
  )
}