import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  padding: 32px;
  align-items: center;
  background-color: var(--background);

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* width: 80vw; */
    background-color: black;

    margin: 24px;
    /* text-indent: -30px; */

    h3 {
      text-align: center;
    }
  }

  button {
    background-color: var(--background);
    padding: 16px;
    margin-top: 8px;
    font-size: 16px;
    font-weight: 900;
    border-radius: 8px;
    cursor: pointer;
  }
`
export const Header = styled.header`
  height: 24vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  place-items: center;
  background-image: url("../src/assets/sunset-background.jpg");
  background-size: cover;


  a {
    display: flex;
    flex-direction: column;
    text-decoration: none;
  }

  h1 {
    font-size: 40px;
    color: var(--title);
    -webkit-text-stroke: 2px var(--borders);
    text-shadow: 4px 4px 2px black, 6px 6px 4px black, 8px 8px 6px black;
  }
`
export const ImgLogo = styled.img`
  height: 96px;
`
export const CardsHolder = styled.div`
  display: flex;
  width: 80%;
  flex-direction: row;
`

export const Cards = styled.div`
  display: flex;
  flex-direction: row;
  background-color: var(--background);
  width: 33%;
  height: 33%;
  border: 4px solid var(--borders);
  overflow: hidden;
  margin: 4px;
  border-radius: 8px;
`