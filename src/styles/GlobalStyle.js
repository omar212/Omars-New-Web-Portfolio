import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    /* :root {
        --primary-color: #007BFF;
        --secondary-color: #6C757D;
        --background-dark-color: #10121A;
        --background-dark-color-gray: #191D2B;
        --background-dark-grey: #191D2B;
        --border-color: #f1f1f1;
        --background-light-color: #F1F1F1;
        --white-color: #151515;
        --font-light-color: #a4acc4;
        --font-dark-color: #313131;
        --font-dark-color-2: #151515;
        --sidebar-dark-color: #191D2B;
        --background-light-color-2: rgba(3,127,255,.3);
    } */

    .light-theme {
        --primary-color: #007BFF;
        --secondary-color: #6C757D;
        --background-dark-color: #F1F1F1;
        --background-dark-color-gray: #F6E3BA;
        --background-dark-grey: #191D2B;
        --border-color: #CBCED8;
        --background-light-color: #F1F1F1;
        --white-color: black;
        --font-light-color: #313131;
        --font-dark-color: #313131;
        --font-dark-color-2: #151515;
        --sidebar-dark-color: #FFF;
        --background-light-color-2: rgba(3,127,255,.3);
    }

    .dark-theme {
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

    h6 {
            color: var(--white-color);
            font-size: 1.2rem;
            padding-bottom: .6rem;
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

    
       
    /* .light-dark-mode  {
        position: fixed;
        right: 0px;
        top: 14.5%;
        // background-color: var(--background-light-color-2);
        width: 5%;
        margin-top:2%;
        margin-right:1%;
        height: 2.5rem;
        z-index: 15;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        svg {
            display: flex;
            align-items: center;
            font-size: 1.7rem;
            color: var(--white-color)
        }
        .MuiFormControlLabel-root {
            margin-left:0 !important;
            margin-right:0 !important;
        }
    } */

    .theme {
        position: relative;
    }

    // Nav Toggler
    .ham-burger-menu {
        position: absolute;
        top: 0px;
        // margin-left: 1rem;
        width: 6.5rem;
        height: 2.5rem;
        // border: 1px solid white;
        right: 0;
        text-align: end;
        z-index: 15;
        svg {
            font-size: 3rem;
        }
        .light-dark-mode  {
        position: fixed;
        right: 0px;
        top: 14.5%;
        // background-color: var(--background-light-color-2);
        width: 15%;
        margin-top:2%;
        margin-right:1%;
        height: 2.5rem;
        z-index: 15;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        svg {
            display: flex;
            align-items: center;
            font-size: 1.7rem;
            color: var(--white-color)
        }
        .MuiFormControlLabel-root {
            margin-left:0 !important;
            margin-right:0 !important;
        }
    }
    }

    .nav-toggle {
            transform: translateX(-100%);
            z-index: 22;    
            @media screen and (max-width: 1200px) {
                transform: translateX(0%);
            }
    }

`

export default GlobalStyle;