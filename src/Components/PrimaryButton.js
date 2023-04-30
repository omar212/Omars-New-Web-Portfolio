import React from 'react'
import styled from 'styled-components'
import omarResume from '../images/resume/resume.pdf'
import { Link } from 'react-router-dom'

function PrimaryButton({title}) {
    return (
        <PrimaryButtonStyled>
            <Link to={omarResume} target="_blank" download>
                {title}
            </Link>
        </PrimaryButtonStyled>
    )
}

const PrimaryButtonStyled = styled.a` 
    background-color: var(--primary-color);
    padding: .8rem 1.5rem;
    border-radius: 25rem;
    color: var(--white-color);
    cursor: pointer;
    display: inline-block;
    font-size: inherit;
    text-transform: uppercase;
    position: relative;
    transition: all .4s ease-in-out;   
    margin-top: 2%;
    &::after {
        content: "";
        position: absolute;
        width: 0;
        height: .2rem;
        transition: all .4s ease-in-out;
        left: 0;
        bottom: 0;
    }
    a {
        font-size: 30px;
    }
    /* &:hover::after {
        width: 100%;
        background-color: white;
        opacity: .7;
        bord
    } */
`
export default PrimaryButton
