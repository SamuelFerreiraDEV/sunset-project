import { Link } from "react-router-dom";

export function Contato() {
  return ( 
    <>
    <h1>Contatos</h1>
    <Link to={'/contatos/1'}>Contato 1</Link>
    <Link to={'/contatos/2'}>Contato 2</Link>
    </>
  )
}