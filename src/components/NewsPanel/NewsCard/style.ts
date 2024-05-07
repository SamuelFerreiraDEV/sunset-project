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

  &:hover {
    border: 4px solid var(--borders);
  }
  
  img {
    height: 60%;
  }

  div {
    height: 40%;
    overflow: hidden;
  }
  /* a {
    display: flex;
    flex-direction: column;
  } */
`