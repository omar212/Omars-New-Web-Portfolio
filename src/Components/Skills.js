import React from 'react'
import styled from 'styled-components'
import { MainLayout, InnerLayout } from '../styles/Layouts'
import Title from '../Components/Title'
import ProgressBar from './ProgressBar'

function Skills() {
    return (   
        <SkillsStyled>
            <MainLayout>
                <Title title={'My Skills'} span={'my skills'}/>
                <InnerLayout>
                    <div className="skills">
                        <ProgressBar 
                            title={'Javascript / ReactJS / Redux / NodeJS / NextJS'}
                            width={'95%'}
                            text={'95%'}
                        />
                        <ProgressBar 
                            title={'Java / SpringBoot'}
                            width={'80%'}
                            text={'80%'}
                        />
                        <ProgressBar 
                            title={'HTML5'}
                            width={'100%'}
                            text={'100%'}
                        />
                        <ProgressBar 
                            title={'Python'}
                            width={'80%'}
                            text={'80%'}
                        />
                        <ProgressBar 
                            title={'MySQL'}
                            width={'80%'}
                            text={'80%'}
                        />
                        <ProgressBar 
                            title={'Golang'}
                            width={'40%'}
                            text={'40%'}
                        />
                        <ProgressBar 
                            title={'CSS / SASS / Bootstrap / Material UI / Carbon Design'}
                            width={'100%'}
                            text={'100%'}
                        />
                        <ProgressBar
                            title={'React Testing Library / Jest'}
                            width={'80%'}
                            text={'80%'}
                        />
                        <ProgressBar
                            title={'Git / Github / Gitlab'}
                            width={'100%'}
                            text={'100%'}
                        />
                        <ProgressBar
                            title={'Docker / Kubernetes'}
                            width={'80%'}
                            text={'80%'}
                        />
                    </div>
                    
                </InnerLayout>
            </MainLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px) {
            grid-template-columns: repeat(1, 1fr);
        }
    }
`
export default Skills
