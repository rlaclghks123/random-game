import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset};
    
    body{
        font-family:serif;
    };

    a{
       text-decoration: none;
    }
    

`;

export default GlobalStyle;
