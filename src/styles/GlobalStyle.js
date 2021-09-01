import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --primary-color: #007BFF;
        --secondary-color: #6C757D;
        --background-dark-color: #10121A;
        --background-dark-color-gray: #191D2B;
        --background-dark-grey: #191D2B;
        --border-color: #2E344E;
        --background-light-color: #F1F1F1;
        --white-color: #FFF;
        --font-light-color: #a4acc4;
        --font-dark-color: #313131;
        --font-dark-color-2: #151515;
        --sidebar-dark-color: #191D2B;
        --background-light-color-2: rgba(3,127,255,.3);
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: 'Zen Loop', cursive;
        font-size: 1.2rem;
    }

    body {
        background-color: var(--background-dark-color);
        color: var(--font-light-color);
    }

    a {
        font-family: inherit;
        color: inherit;
        font-size: 2rem;
    }

    h1 {
        font-size: 4rem;
        color: var(--white-color);
        span {
            font-size: 4rem;
        }
    }

    span {
        color: var(--primary-color);
    }

`

export default GlobalStyle;