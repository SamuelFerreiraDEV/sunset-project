import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--background);
  width: 32.5%;
  height: 33%;
  border: 4px solid var(--borders);
  overflow: hidden;
  margin: 4px;
  border-radius: 8px;
  
  h3 {
    color: var(--cards-text);
    
  }
  
  &:hover {
    border: 4px solid var(--cards-text);
  }
  
  a {
    height: 100%;
    display: flex;
    flex-direction: column;
    text-decoration: none;
  }
  
  img {
    height: 60%;
  }
  
  div {
    display: flex;
    padding-left: 2px;
    height: 40%;
    
    h3 {
    }
  }
`