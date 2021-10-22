import React from 'react'
import {MainLayout, InnerLayout} from '../styles/Layouts'
import Skills from '../Components/Skills'
import Title from '../Components/Title'
import Resume from '../Components/Resume'
import styled from 'styled-components'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

function ResumePage() {
    return (
        <MainLayout>
            <Skills/> 
            <IconSection>
                <ArrowDownwardIcon className="arrow-circle-down bounce" />
            </IconSection>
            <Resume /> 
        </MainLayout>
    )
}

const IconSection = styled.section`
    svg {
        width: 10px;
    }

    .bounce {
        animation: bounce 3s;
        animation-iteration-count: infinite;
    }

    .arrow-circle-down {
        display: block;
        width: 100%;
        height: 70px;
    }

    @keyframes bounce {
        0%,
        25%,
        50%,
        75%,
        100% {
            transform: translateY(0);
        }
        40% {
            transform: translateY(-20px);
        }
        60% {
            transform: translateY(-12px);
        }
    }
`
export default ResumePage
