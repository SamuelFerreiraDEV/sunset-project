import { NewsProps } from "../../types/nav"

export function NewsPage(props: NewsProps) {
  return (
    <>
      <h1>{props.title}</h1>
      <img src={props.image} />
    </>
  )
}