import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  background-color: burlywood;
  width: 32.5%;
  height: 33%;
  border: 2px solid var(--borders);
  overflow: hidden;
  margin: 4px;
  
  h3 {
    color: black;
    
  }
  
  &:hover {
    border: 4px solid var(--borders);
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