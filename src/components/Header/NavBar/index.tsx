import * as S from "./style";
import SunHorizonImg from "../../../assets/SunHorizon.svg";
import CoffeeImg from "../../../assets/Coffee.svg";
import PlusSquareImg from "../../../assets/PlusSquare.svg";
import TrashImg from "../../../assets/Trash.svg";
import { NavItem } from "./NavItem";
import { NavItemListProps } from "../../../types/types";
import { useContext } from "react";
import { NewsContext } from "../../../contexts/NewsContext";

export function NavBar() {

  const { searchForNews } = useContext(NewsContext);

  const NavItemList: NavItemListProps[] = [
    {
      href: "/",
      imgLink: SunHorizonImg, 
      innerText: "Home"
    },  
    {
      href: "/landingpage",
      imgLink: CoffeeImg,
      innerText: "Landing Page"
    },
    {
      href: "/publicacao",
      imgLink: PlusSquareImg,
      innerText: "Publicar"
    },
    {
      href: "/removerpublicacao",
      imgLink: TrashImg,
      innerText: "Remover"
    }
  ]

  const NavItemListMap = NavItemList.map(
    ({ href, imgLink, innerText }) => (
      <NavItem 
        href={href}
        imgLink={imgLink} 
        innerText={innerText}
        key={href}
      />
    )
  )

  return (
    <S.Nav>
      <ul>
        <input type="text" placeholder="Buscar" onChange={((event) => {searchForNews(event.target.value)})} />
        {NavItemListMap}
      </ul>
    </S.Nav>
  )
}
