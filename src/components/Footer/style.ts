import styled from "styled-components";

export const Footer = styled.footer`
  /* height: 40vh; */
  display: flex;
  flex-direction: column;
  background-color: var(--background);
  align-items: flex-start;
  padding: 4px;
  margin-top: 24px;
  
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  h1 {
    color: wheat;
  }
`