import React from 'react'
import { MainLayout } from '../styles/Layouts';
import styled from 'styled-components';
import Title from '../Components/Title';
import ImageSection from '../Components/ImageSection';
import ServicesSection from '../Components/ServicesSection';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

function AboutPage() {
    return (
        <MainLayout>
            <AboutStyled>
                <Title title={'About Me'} span={'About Me'} />
                <ImageSection />
                <ArrowDownwardIcon className="arrow-circle-down bounce" />
                <ServicesSection />
            </AboutStyled>
        </MainLayout>
    )

}


const AboutStyled = styled.section`
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
export default AboutPage
