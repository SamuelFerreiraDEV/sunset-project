import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction:column;
  margin: auto;
  height: 80vh;
  width: 30vw;
  margin-top: 16px;
  background-color: var(--background);
  justify-content: center;
  align-items: center;
  font-size: 26px;
  border-radius: 8px;
  
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
    h3 {
      font-size: 14px;
      margin: 4px;
    }
  }

  button {
    margin-top: 8px;
    background-color: var(--background);
    border: 2px solid var(--buttons-text);
    padding: 12px;
    border-radius: 4px;
  }

`
