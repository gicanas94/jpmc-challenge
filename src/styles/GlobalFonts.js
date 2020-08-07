import { createGlobalStyle } from 'styled-components';
import RobotoRegular from './fonts/Roboto-Regular.ttf';

export default createGlobalStyle`
  @font-face {
    font-family: 'RobotoRegular';
    font-style: normal;
    src: url(${RobotoRegular}) format('truetype');
  }
`;
