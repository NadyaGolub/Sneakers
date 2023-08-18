import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #e7f6ff;
}

button {
  font-family: 'Inter', system-ui;
}

input {
  font-family: 'Inter', system-ui;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

    ul {
  list-style: none;
  
  padding: 0;
}
li {
  list-style: none;
}

h3 {
  margin: 0;
}

h1 {
  margin: 0;
 
}

h2 {
  margin: 0;
  font-family: 'Inter', system-ui;
}

h5 {
  font-weight: 400;
  font-size: 14px;
}

p {
  margin: 0;
}

b {
  font-size: 14px;
}

span {
  font-size: 14px;
  opacity: 0.8;
  text-transform: uppercase;
}

`;