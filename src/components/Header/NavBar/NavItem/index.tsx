import { Link } from "react-router-dom";
import { NavItemListProps } from "../../../../types/nav";
import * as S from "./style";

export function NavItem({ href, imgLink, innerText }: NavItemListProps) {
  return (
    <S.ListItem >
      <Link to={href}>
        <img src={imgLink} />
        {innerText}
      </Link>
    </S.ListItem>
  )
}
