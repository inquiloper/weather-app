import { createGlobalStyle } from 'styled-components';
import Raleway from '../fonts/Raleway-VariableFont_wght.ttf';

const GlobalStyle = createGlobalStyle`

    :root {
        --main-background-color: #100E1D;
        --main-background-secondary-color: #1E213A;
        --main-font-color: #E7E7EB;
        --secondary-font-color: #A09FB1;
    }
    @font-face {
    font-family: 'Raleway';
        src:  url(${Raleway});
    }

    body {
        font-family: Raleway, sans-serif;
        color: var(--main-font-color);
    }
`;

export default GlobalStyle;