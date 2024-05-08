import { NewsContentProps } from "../../types/types"

export function NewsContent({ newsData }: NewsContentProps) {
  return (
    <>
      <h1>{newsData.title}</h1>
      <img src={newsData.image} />
    </>
  )
}