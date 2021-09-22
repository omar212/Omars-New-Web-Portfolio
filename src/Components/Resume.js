import React from 'react'
import { MainLayout, InnerLayout } from '../styles/Layouts'
import Title from '../Components/Title'
import styled from 'styled-components'
import SmallTitle from '../Components/SmallTitle'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import SchoolIcon from '@material-ui/icons/School'
import ResumeItem from '../Components/ResumeItem'
function Resume() {
    const briefcase  = <BusinessCenterIcon/>
    const school = <SchoolIcon/>
    
    return (
        <MainLayout>
            <ResumeStyled>
                <Title title={'Resume'} span={'resume'} />
                <InnerLayout>
                    <div className="small-title">
                        <SmallTitle icon={briefcase} title={'Working Experience'}/>
                    </div>
                    <div className="resume-content">
                        <ResumeItem 
                            year={'2015 - 2019'}
                            title={'Bachelors in Computer Science and Minor in Mathematics'}
                            subTitle={'City College of New York'}
                            text={''}
                        />
                    </div>
                </InnerLayout>
            </ResumeStyled>
        </MainLayout>
    )
}

const ResumeStyled = styled.div`
    .small-title {
        padding-bottom: 1rem;
    }
`
export default Resume
