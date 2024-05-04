import { Container } from "./style";

interface NewsCardProps {
  num: number
}

export function NewsCard(props: NewsCardProps) {
  return (
   <Container>
      NEWSCARD {props.num}
    </Container>
  )
}