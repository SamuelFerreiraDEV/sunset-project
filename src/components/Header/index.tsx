import * as S from "./style";
import SunHorizonImg from "../../assets/SunHorizon.svg";
import { NavBar } from "./NavBar/index";
import { Link } from "react-router-dom";
import { useState } from "react";

export function Header() {

  const [count, setCount] = useState(0);

  return (
    <>
    <button onClick={() => setCount(count+1)} style={{color: 'black'}}>CONTADOR {count}</button>
      <S.Header>
        <Link to="/">
          <S.ImgLogo src={SunHorizonImg} alt="Sunset News logo"/>
          <h1>SUNSET NEWS</h1>
        </Link>
        
      </S.Header>
      <NavBar />
    </>
  )
}