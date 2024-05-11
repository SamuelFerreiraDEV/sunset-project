import * as S from "./style";
import { NewsProps } from "../../types/types";
import { useContext, useState } from "react";
import { SubmitHandler, useForm } from 'react-hook-form';
import { NewsContext } from "../../contexts/NewsContext";
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../services/api";

const schema = z.object({
  title: z.string().min(10, {message: "Mínimo de 10 caracteres"}),
  image: z.string().url({message: "URL inválida"}),
  content: z.string().min(10, {message: "Mínimo de 10 caracteres"}),
  tags: z.string().min(4, {message: "Insira uma tag"})
})

export function Publish() {
  
  const { createNews } = useContext(NewsContext);
  const [publish, setPublish] = useState<NewsProps>({} as NewsProps);

  const { 
    register, 
    handleSubmit, 
    formState: {errors, isSubmitting }
  } = useForm<NewsProps>({
    resolver: zodResolver(schema)
   });
   
  // const [title, setTitle] = useState('');
  // const [image, setImage] = useState('');
  // const [content, setContent] = useState('');
  // const [id, setId] = useState('');
  // const [category, setCategory] = useState('');
  // const [author, setAuthor] = useState('');
  // const [authorPic, setAuthorPic] = useState('');
  // const [tags, setTags] = useState([]);
  // const [published_date, setPublished_date] = useState('');

  const handlePublish: SubmitHandler<NewsProps> = async (data) => {

    await new Promise(resolve => setTimeout(resolve, 1000))
    
    api.delete("/news/4")
    setPublish(data)
    console.log(data);

    createNews(publish)
    console.log(publish);
  }

  // async function handleCreateNews(event: FormEvent) {
  //   event.preventDefault()

  //   setId((news.length+1).toString())

  //   await createNews({
  //   title,
  //   image,
  //   author,
  //   authorPic,
  //   category,
  //   content,
  //   id,
  //   published_date,
  //   tags
  //   })

  //   setTitle('')
  //   setImage('')
  //   setContent('')
  //   setCategory('')
  // }

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
        <input 
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
          {isSubmitting ? 'loading' : 'Submit'}
          </button>
        </form>
    </S.Div>
  )
}