import * as S from "./style";
import { NewsProps } from "../../types/types";
import { useContext, useState } from "react";
import { SubmitHandler, useForm } from 'react-hook-form';
import { NewsContext } from "../../contexts/NewsContext";
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  title: z.string().min(4, {message: "Mínimo de 4 caracteres"}),
  id: z.string(),
})

export function Delete() {
  
  const { news, deleteNews } = useContext(NewsContext)
  const [newsSearch, setNewsSeach] = useState<NewsProps[]>([]);

  const { 
    register, 
    handleSubmit, 
    reset,
    formState: {errors, isSubmitting }
  } = useForm<NewsProps>({
    resolver: zodResolver(schema)
   });

  const handleSearch: SubmitHandler<NewsProps> = async ({ title }) => {

    await new Promise(resolve => setTimeout(resolve, 1000))

    const filtered = news.filter((newsElement: NewsProps) => {
      if(newsElement.title.toUpperCase().includes(title.toUpperCase()))
        return newsElement;
    })
    setNewsSeach(filtered)
  }

  const handleDelete: SubmitHandler<NewsProps> = async (formData) => {
    console.log(formData);
    
    await new Promise(resolve => setTimeout(resolve, 1000))

    deleteNews(formData)
    reset()
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

        <button disabled={isSubmitting} type="submit">
          {isSubmitting ? 'loading' : 'Submit'}
        </button>
      </form>

      <form onSubmit={handleSubmit(handleDelete)}>
        <label htmlFor="id">Insira o ID do item que será deletado</label>
        <input 
          {... register("id")} 
          type="text"
          placeholder="..."
        />
        {errors.id && <div>{errors.id.message}</div>}

        <button disabled={isSubmitting} type="submit">
          {isSubmitting ? 'loading' : 'Submit'}
        </button>
      </form>

      <div>
        <ul>
          {newsSearch.map((eachNews) => {
            return (
              <li key={eachNews.id}>
                <h3>ID {eachNews.id} - {eachNews.title}</h3>
              </li>
            )
          })}
        </ul>
      </div>
    </S.Div>
  )
}