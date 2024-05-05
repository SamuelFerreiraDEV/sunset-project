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
`