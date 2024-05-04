import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  height: 10vh;
  background-color: var(--background);
  position: sticky; // << arrumar

  ul {
    width: 100%;
    background-color: blue;
    display: flex;
    justify-content: space-evenly ;
    list-style: none;
  }
  
  li {
    display: flex;
    align-items: center;
  }
  
  li:hover {
    background-color: var(--background);
  }
  
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--buttons-text);
    font-size: 24px;
    gap: 8px;

    color: var(--title);
    -webkit-text-stroke: 0.4px var(--borders);
    text-shadow: 4px 4px 4px black, 4px 4px 4px black, 4px 4px 4px black;
  }

  img {
    width: 48px;
  }
`