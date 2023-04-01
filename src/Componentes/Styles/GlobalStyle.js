import { createGlobalStyle } from "styled-components";
import Background from "./Background.jpeg";

export const GlobalStyle = createGlobalStyle`
  body {
    background-image: url(${Background});
  }
`;

