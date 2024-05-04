import styled from "styled-components";

export const Header = styled.header`
  background-color: darkslateblue;
  height: 24vh;
  /* position: relative; */
  display: flex;
  flex-direction: column;
  place-items: center;


  h1 {
    font-size: 40px;
    color: var(--title);
    -webkit-text-stroke: 2px var(--borders);
    text-shadow: 4px 4px 2px black, 6px 6px 4px black;
  }
`
export const ImgLogo = styled.img`
  height: 96px;
  /* width: 64px; */
`