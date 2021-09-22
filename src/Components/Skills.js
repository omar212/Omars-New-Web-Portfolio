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
                            title={'HTML5'}
                            width={'90%'}
                            text={'90%'}
                        />
                        <ProgressBar 
                            title={'Javascript/React JS'}
                            width={'90%'}
                            text={'90%'}
                        />
                        <ProgressBar 
                            title={'Java'}
                            width={'70%'}
                            text={'70%'}
                        />
                        <ProgressBar 
                            title={'Python'}
                            width={'80%'}
                            text={'80%'}
                        />
                        <ProgressBar 
                            title={'SQL'}
                            width={'80%'}
                            text={'80%'}
                        />
                        <ProgressBar 
                            title={'Golang'}
                            width={'40%'}
                            text={'40%'}
                        />
                         <ProgressBar 
                            title={'CSS/SASS'}
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
    }
`
export default Skills
