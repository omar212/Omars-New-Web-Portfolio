import React from 'react'
import styled from 'styled-components'

function PrimaryButton({title}) {
    return (
        <PrimaryButtonStyled>
            {title}
        </PrimaryButtonStyled>
    )
}

const PrimaryButtonStyled = styled.a`
    background-color: var(--primary-color);
    padding: .8rem 2.5rem;
    color: var(--white-color);
    cursor: pointer;
    display: inline-block;
    font-size: inherit;
    text-transform: uppercase;
    position: relative;
    transition: all .4s ease-in-out;   
    margin-top: 2%;
    &:hover::after {
        content: "";
        position: absolute;
        width: 100%;
        height: .2rem;
        background-color: white;
        transition: all .4s ease-in-out;
        left:0;
        bottom: 0;
    }
`
export default PrimaryButton
