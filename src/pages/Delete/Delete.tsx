import * as S from "./style";
import { NewsProps, SearchNews } from "../../types/types";
import { useContext, useState } from "react";
import { SubmitHandler, useForm } from 'react-hook-form';
import { NewsContext } from "../../contexts/NewsContext";
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../services/api";

const schema = z.object({
  // title: z.string().min(4, {message: "Mínimo de 4 caracteres"}),
  // title: z.string().min(4, {message: "Mínimo de 4 caracteres"}),
})

export function Delete() {
  
  const { news } = useContext(NewsContext)
  const [newsSearch, setNewsSeach] = useState<NewsProps[]>([]);

  const { 
    register, 
    handleSubmit, 
    formState: {errors, isSubmitting }
  } = useForm<NewsProps>({
    resolver: zodResolver(schema)
   });


  const handleSearch: SubmitHandler<NewsProps> = async (data) => {
    await new Promise(resolve => setTimeout(resolve, 1000))

    console.log(data);

    const filtered = news.filter((newsElement: NewsProps) => {
      if(newsElement.title.includes(data.title) || newsElement.tags.includes(data.tags.toString()))
        return newsElement;
    })
    setNewsSeach(filtered)
  }

  return (
    <S.Div>
      <form onSubmit={handleSubmit(handleSearch)}>
        <label htmlFor="title">Pesquise pelo título</label>
        <input 
          {... register("title")} 
          type="text" 
          placeholder="..."
        />
        {errors.title && <div>{errors.title.message}</div>}

        <p>OU</p>

        <label htmlFor="tags">Pesquise pelas tags da notícia</label>
        <input 
          {... register("tags")} 
          type="text" 
          placeholder="..."
        />
        {errors.tags && <div>{errors.tags.message}</div>}

        <button disabled={isSubmitting} type="submit">
          {isSubmitting ? 'loading' : 'Submit'}
          </button>
        </form>

        <ul>
          {newsSearch.map((each) => {
            return (
            <li>
              <h3>{each.title}</h3>
              <h4>Tags: {each.tags}</h4>
            </li>)
          })}
        </ul>

    </S.Div>
  )
}