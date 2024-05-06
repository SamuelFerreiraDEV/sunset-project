import styled from "styled-components";

export const Header = styled.header`
  background-color: darkslateblue;
  height: 24vh;
  /* position: relative; */
  display: flex;
  flex-direction: column;
  place-items: center;

  a {
    display: flex;
    flex-direction: column;
    text-decoration: none;
  }

  h1 {
    font-size: 40px;
    color: var(--title);
    -webkit-text-stroke: 2px var(--borders);
    text-shadow: 4px 4px 2px black, 6px 6px 4px black, 8px 8px 6px black;
  }
`
export const ImgLogo = styled.img`
  height: 96px;
`