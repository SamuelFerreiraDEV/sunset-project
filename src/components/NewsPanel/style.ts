import styled from "styled-components";

export const Div = styled.div`
  
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  justify-content: center;
  justify-self: center;
  background-color: blue;
  width: 80%;
  height: 100%; 
  padding: 4px;
  /* margin:48px; */
  overflow-x: hidden;
  /* border: 4px solid red; */
  
  &::-webkit-scrollbar {
    display: none;
  }
`
