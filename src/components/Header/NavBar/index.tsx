import * as S from "./style";
import SunHorizonImg from "../../../assets/SunHorizon.svg";
import ChatImg from "../../../assets/ChatCenteredDots.svg";
import CoffeeImg from "../../../assets/Coffee.svg";
import PlusSquareImg from "../../../assets/PlusSquare.svg";
import TrashImg from "../../../assets/Trash.svg";
import { NavItem } from "./NavItem";
import { NavItemListProps } from "../../../types/types";

export function NavBar() {

  const NavItemList: NavItemListProps[] = [
    {
      href: "/",
      imgLink: SunHorizonImg, 
      innerText: "Home"
    }, 
    {
      href: "/contato", 
      imgLink: ChatImg, 
      innerText: "Contato"
    }, 
    {
      href: "/sobre",
      imgLink: CoffeeImg,
      innerText: "Sobre"
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
        {NavItemListMap}
      </ul>
    </S.Nav>
  )
}
