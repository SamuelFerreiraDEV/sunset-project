import * as S from "./style";
import SunHorizonImg from "../../../assets/SunHorizon.svg";
import ChatImg from "../../../assets/ChatCenteredDots.svg";
import CoffeeImg from "../../../assets/Coffee.svg";
import { NavItem } from "./NavItem";
import { NavItemListProps } from "../../../types/nav";

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
