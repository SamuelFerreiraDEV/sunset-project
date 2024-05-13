import * as S from './style';

import { NewsContentProps } from "../../types/types"

export function NewsContent({ newsData }: NewsContentProps) {
  console.log(newsData.published_date)
  return (
      <S.Div>
        <h1>{newsData.title}</h1>
        <h3>"{newsData.author}" at {newsData.published_date}</h3>
        <img src={newsData.image} />
        <p>{newsData.content}</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris bibendum lobortis est at fringilla. Proin ac elementum libero. Curabitur rhoncus ipsum a porttitor lacinia. Nunc at lectus quis erat consequat volutpat. Nullam pulvinar egestas tellus ut ultrices. Nam eget sapien magna. Sed a massa metus. Phasellus a aliquam quam. Fusce tempus justo consequat erat mattis bibendum.Nam in viverra dolor, sit amet blandit odio. Praesent tincidunt efficitur diam, vel pretium sapien efficitur nec. Phasellus magna lorem, egestas sit amet fringilla consectetur, volutpat quis nisi. Morbi lacus justo, fringilla in tellus in, tincidunt molestie risus. Nulla vehicula consequat congue. Nam sodales ligula sodales neque maximus porttitor. Curabitur nec posuere odio. In porta elit eu euismod imperdiet. Quisque sit amet pharetra risus, id imperdiet urna. Quisque iaculis lacinia tortor ut sagittis. Donec suscipit enim et arcu tincidunt suscipit. Aenean at est ipsum. Fusce nec lorem nec mi mattis dictum vel vitae urna. Mauris eu ante accumsan turpis pellentesque laoreet tincidunt eget ante. Phasellus nec metus ultricies, facilisis erat at, sollicitudin ex. Nam sollicitudin gravida elit vitae interdum. Donec egestas felis sit amet tincidunt facilisis. Sed sodales tincidunt neque, sed tempus arcu fermentum eu. Aenean pretium id ante sit amet aliquet. Ut at porttitor magna, eu mattis dui. Donec efficitur condimentum diam sed aliquet. Nulla id lacus vitae ex mollis tempor ut at quam. Morbi ut felis convallis, fermentum mi in, cursus magna. Nullam sed ipsum fermentum tellus ultrices aliquam vel porttitor mi. Etiam fermentum vestibulum enim, quis aliquam mauris scelerisque ornare. Ut lobortis nisi et eros placerat, non condimentum massa aliquet. Mauris in tortor nec sem egestas elementum. Etiam nibh nisl, porta vitae dignissim euismod, condimentum lobortis dolor. Phasellus interdum vulputate condimentum. Nulla et lectus ac urna condimentum tempor ac et orci. Pellentesque imperdiet molestie tincidunt. Fusce placerat nisl ac leo interdum, nec lacinia augue rutrum. Nam a diam suscipit, efficitur metus in, cursus orci. Donec posuere vehicula ante non sagittis. Vivamus laoreet suscipit placerat. Suspendisse venenatis purus eget sem facilisis suscipit. Nam tincidunt lectus dictum tellus sollicitudin, vitae euismod libero venenatis. Suspendisse sagittis congue pellentesque. Proin ornare vestibulum dolor. Duis sit amet odio at magna molestie consequat. Donec in hendrerit lorem. Proin ullamcorper bibendum ultrices.
        </p>
      </S.Div>
  )
}