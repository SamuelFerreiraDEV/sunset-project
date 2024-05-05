import { NavItemListProps } from "../../../../types/nav";
import * as S from "./style";

export function NavItem({ href, imgLink, innerText }: NavItemListProps) {
  const path: string = window.location.pathname;
  return (
    <S.ListItem className={path === href ? "active" : ""}>
      <a href={href}>
        <img src={imgLink} />
        {innerText}
      </a>
    </S.ListItem>
  )
}
