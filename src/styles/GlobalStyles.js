import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background-color: #f9f9f9;
    color: #484848;
    font-family: RobotoRegular;
    font-size: 18px;
    height: 100vh;
    margin: 0;
  }

  p {
    margin: 0;
  }
`;
