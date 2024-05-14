import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  height: 10vh;
  background-color: var(--background);
  position: sticky; // << arrumar
  
  ul {
    width: 100%;
    /* background-color: blue; */
    display: flex;
    justify-content: space-evenly ;
    list-style: none;
    display: flex;
    align-items: center;

    input {
      height: 70%;
      background-color: var(--cards-text);
      border: 2px solid #5C1F06;
      border-radius: 4px;
      color: #5C1F06;
      font-size: 16px;
      padding: 4px;
    }
  }
`