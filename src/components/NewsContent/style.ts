import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--background);
  border: 4px solid black;
  border-radius: 8px;
  width: 80vw;
  justify-content: center;
  margin: 0 auto;
  padding: 8px;
  margin-top: 8vh;

  * {
    margin-top: 8px;
  }

  h1 {
    font-size: 42px;
  }

  img {
    width: 40vw;
  }

  p {
    margin-top: 12px;
  }

`