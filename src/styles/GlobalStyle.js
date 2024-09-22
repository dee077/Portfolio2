import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
  --rt-color-white: #fff;
  --rt-color-dark: #222;
  --rt-color-success: #8dc572;
  --rt-color-error: #be6464;
  --rt-color-warning: #f0ad4e;
  --rt-color-info: #337ab7;
  --rt-opacity: 0.9;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
  overflow-x: hidden;
  scrollbar-color: #14B8A6;
  scrollbar-width: thin;
  scrollbar-color: #14B8A6 transparent;
}

body {
  overflow-x: hidden;
}

//* Custom Scrollbar
/* html::-webkit-scrollbar {
  width: 1.5rem;
} */
/* html::-webkit-scrollbar-track {
   background-color: transparent;
} */
html::-webkit-scrollbar-thumb {

  background: #14B8A6;
    border: 5px solid transparent;
    border-radius: 9px;
    background-clip: content-box;
}

p {
  color: ${({ theme }) => theme.colors.text};
  opacity: .7;
  font-size: 1.65rem;
  line-height: 1.5;
  margin-top: 1rem;
  font-weight:400;
}
a {
  text-decoration: none;
}

li {
  list-style: none;
}

.container {
  max-width: 120rem;
  margin: 0 auto;
}

.grid-two-column {
  grid-template-columns: repeat(2, 1fr);
}
.grid-three-column {
  grid-template-columns: repeat(3, 1fr);
}
.grid-four-column{
   grid-template-columns: 1fr 1.2fr .5fr .8fr ;
}


`