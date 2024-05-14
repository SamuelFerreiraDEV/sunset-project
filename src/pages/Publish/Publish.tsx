import * as S from "./style";
import { NewsProps } from "../../types/types";
import { useContext } from "react";
import { SubmitHandler, useForm } from 'react-hook-form';
import { NewsContext } from "../../contexts/NewsContext";
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  title: z.string().min(8, {message: "Mínimo de 8 caracteres"}),
  image: z.string().url({message: "URL inválida"}),
  content: z.string().min(10, {message: "Mínimo de 10 caracteres"}),
  tags: z.string().min(2, {message: "Insira uma tag"})
})

export function Publish() {
  
  const { createNews } = useContext(NewsContext);
  
  const { 
    register, 
    handleSubmit, 
    reset,
    formState: {errors, isSubmitting }
  } = useForm<NewsProps>({
    resolver: zodResolver(schema)
  });
  

  const handlePublish: SubmitHandler<NewsProps> = async (formData) => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // setPublish(data)
    
    createNews(formData)
    reset();
  }

  return (
    <S.Div>
      <form onSubmit={handleSubmit(handlePublish)}>
        <label htmlFor="title">Título</label>
        <input 
          {... register("title")} 
          type="text" 
          placeholder="Título"
        />
        {errors.title && <div>{errors.title.message}</div>}

        <label htmlFor="image">Imagem</label>
        <input 
          {... register("image")}  
          type="text" 
          placeholder="URL da imagem"
        />
        {errors.image && <div>{errors.image.message}</div>}

        <label htmlFor="category">Categoria</label>
        <select {... register("category")}>
          <option disabled={true}>Selecione a categoria</option>
          <option>Tech</option>
          <option>IA</option>
          <option>Business</option>
        </select>
        
        <label htmlFor="content">Conteúdo</label>
        <input className="content"
          {... register("content")} 
          type="text" 
          placeholder="Conteúdo" 
        />
        {errors.content && <div>{errors.content.message}</div>}

        <label htmlFor="tags">Tags</label>
        <input 
          {... register("tags")} 
          type="text" 
          placeholder="Tags" 
        />
        {errors.tags && <div>{errors.tags.message}</div>}

        <button disabled={isSubmitting} type="submit">
          {isSubmitting ? 'Carregando' : 'Publicar'}
          </button>
        </form>
    </S.Div>
  )
}