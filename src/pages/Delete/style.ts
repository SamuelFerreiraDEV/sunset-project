import styled from "styled-components";

export const Div = styled.div`
  
  display: flex;
  flex-direction: column;
  margin: auto;
  height: 80vh;
  width: 50vw;
  background-color: darkviolet;
  justify-content: center;
  align-items: center;
  
  form {
    display: flex;
    flex-direction: column;
    width: 30vh;

    div {
      color: red;
      font-size: 12px;
    }
  }

  div {
    height: 40%;
    overflow: hidden;
  }
  
  ul {
    /* display: flex; */
    list-style-type: none;
    /* flex-flow: row wrap; */
  }

`
