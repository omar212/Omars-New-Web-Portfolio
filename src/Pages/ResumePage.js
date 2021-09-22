import React from 'react'
import {MainLayout, InnerLayout} from '../styles/Layouts'
import Skills from '../Components/Skills'
import Title from '../Components/Title'
import Resume from '../Components/Resume'

function ResumePage() {
    return (
        
        <MainLayout>
            <Skills/> 
            <Resume /> 
        </MainLayout>
    )
}

export default ResumePage
