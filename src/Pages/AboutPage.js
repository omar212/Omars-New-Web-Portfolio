import React from 'react'
import { MainLayout } from '../styles/Layouts';
import styled from 'styled-components';
import Title from '../Components/Title';
import ImageSection from '../Components/ImageSection';

function AboutPage() {
    return (
        <MainLayout>
            <AboutStyled>
                <Title title={'About Me'} span={'About Me'} />
                <ImageSection />
            </AboutStyled>
        </MainLayout>
    )

}


const AboutStyled = styled.section`

`
export default AboutPage
