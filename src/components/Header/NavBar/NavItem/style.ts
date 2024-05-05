import styled from "styled-components";

export const ListItem = styled.li`
    display: flex;
    align-items: center;
    
    &:hover {
      background-color: var(--background);
    }
    
    &.active {
      background-color: green;
    }
  
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--buttons-text);
    font-size: 24px;
    gap: 8px;

    color: var(--title);
    -webkit-text-stroke: 0.4px var(--borders);
    text-shadow: 4px 4px 4px black, 4px 4px 4px black, 4px 4px 4px black;
  }

  img {
    width: 48px;
  }
`