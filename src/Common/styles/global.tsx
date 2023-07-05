import { createGlobalStyle } from 'styled-components';
import variables from '../styles/variables.module.scss'

import './app.scss';

const GlobalStyles = createGlobalStyle`
   *, :focus, :after, :before, :active {
       box-sizing: border-box;
   }
   html,body {
       width: 100%;
       height: 100%;
       font-family:${({ theme }) => theme.baseFontFamily};
       font-size: ${({ theme }) => theme.baseFontSize};
       line-height:${({ theme }) => theme.baseLineHeight};
   }
   small {font-size: ${variables.size_sm};}
   h1,h2,h3,h4,h5,h6,p,ul,ol,table {margin-bottom : ${variables.size};}
   h2,h3,h4,h5,h6 { font-weight: ${variables.fw_sb};}
   h1:last-child,h2:last-child,h3:last-child,h4:last-child,h5:last-child,h6:last-child,p:last-child,ul:last-child,ol:last-child,table:last-child {margin-bottom : 0}
   
   .claim__header{
       background-color: ${({ theme }) => theme.primaryBgColor}
   }

`;

export default GlobalStyles;
