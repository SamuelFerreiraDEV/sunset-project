import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  background-color: burlywood;
  width: 33.3%;
  height: 33%;
  border: 2px solid var(--borders);
  overflow: hidden;
  background-size: cover;
  
  img {
    height: 60%;
  }

  div {
    height: 40%;
    overflow: hidden;
  }
`