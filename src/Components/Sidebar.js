import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation'

function Sidebar({navToggle, setNavToggle}) {
    return (
        <SidebarStyled className={`${navToggle ? 'nav-toggle' : ''}`}>
            <Navigation setNavToggle={setNavToggle} navToggle={navToggle}/>
        </SidebarStyled>
    )
}

const SidebarStyled = styled.div`
    width: 16.3rem;
    height: 100vh;
    position: fixed;
    overflow: hidden;
    transition: all .4s ease-in-out;
    @media screen and (max-width: 1200px) {
        transform: translateX(-100%);
    }
    background-color: var(--sidebar-dark-color);
`

export default Sidebar;