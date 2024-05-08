import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root {
    --background: #5C1F06;
    --icons: #FB923C;
    --title: #FDBA74;
    --buttons-text: #FDBA74;
    --borders: #5C1F06;
    --cards-text: #FFEDD5;
    --footer-background: #5C1F06;
  }
  
  body {
    background-image: url("../src/assets/sunset-background.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Lora", serif;
    /* font-style: italic; */
    color: wheat;

    &::-webkit-scrollbar {
      display: none;
    }
  } 
` 

