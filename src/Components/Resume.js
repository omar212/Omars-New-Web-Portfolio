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
    const internDescr = "At IBM, I worked and collaborated with a diverse team of developers," 
    + "UX/UI designers, PO's, IM's, testers, etc. from around the world in order to transition " 
    + " IBM’s global \ ledger application for all journal activity to a cloud-native solution utilizing React for the " 
    + "front-end, and a variety of technologies for the back-end micro-services, such as SQL, Java Spring, JDBC, " 
    + "k8s for container-orchestration, and Docker for containerization. As a team, we additionally leveraged a " + 
    "host of CI/CD software to develop the application along with Git and GitHub for version control, and Travis for integrated build tests."

    const coopDescr = "Continued the work I finished as an intern, but now as a Co-Op while I was a student at City College of New York. "
    + " I participated in weekly stand-up meetings relating to the JIRA stories I was assigned. With each story, I assisted the team remotely " 
    + " with various bug fixes and quality assurance testing of the front-end and back-end of the global ledger application."

    const fullTimeDesc = "Full-stack software engineer focused primarily on the front-end and back-end of the " 
    + "IBM cloud-native applications GLUI, the single-entry point to IBM’s ledger for all global journal activity and GUDA, " 
    + "the global application for all IBM departmental activities. Works with testers, PO's, IM's, UI/UX designers, and users " 
    + "to enhance IBM's cloud-native journaling and departmental software. Leverages modern front-end technologies, such as React and Angular, " 
    + " and modern back-end technologies such as Node.js and Express, Java RESTful services using Spring, JDBC, and SQL. Utilizes the IBM DB2 and PostgreSQL " 
    + "relational databases, Docker for containerization, Artifactory for encapsulating all Docker images, and IBM Hybrid Cloud." 
    
    
    return (
        <MainLayout>
            <ResumeStyled>
                <Title title={'Resume'} span={'resume'} />
                <InnerLayout>
                    <div className="small-title">
                        <SmallTitle icon={school} title={'Education'}/>
                    </div>
                    <div className="resume-content">
                        <ResumeItem 
                            year={'Jan ‘15 - Dec ‘19'}
                            title={'The City College of New York, CUNY, New York, NY'}
                            subTitle={'Bachelor of Science in Computer Science'}
                            text={'Grove School of Engineering \n Minor: Mathematics \ GPA: 3.0'}
                        />
                    </div>
                    <div className="small-title">
                        <SmallTitle icon={briefcase} title={'Working Experience'}/>
                    </div>
                    <div className="resume-content">
                        <ResumeItem 
                            year={'May ‘19 - Aug ‘19'}
                            title={'IBM'}
                            subTitle={'Software Engineering Intern'}
                            text={internDescr}
                        />
                         <ResumeItem 
                            year={'Aug ‘19 - Jun ‘20'}
                            title={'IBM'}
                            subTitle={'Software Engineering Co-op'}
                            text={coopDescr}
                        />
                         <ResumeItem 
                            year={'Jan ‘20 - Present'}
                            title={'IBM'}
                            subTitle={'Software Engineer'}
                            text={fullTimeDesc}
                        />
                    </div>
                </InnerLayout>
            </ResumeStyled>
        </MainLayout>
    )
}

const ResumeStyled = styled.div`
    padding: none;
    @media screen and (max-width: 1000px) {
        padding: 0;
    }
    .small-title {
        padding-bottom: 1rem;
    }

    .resume-content {
        // border: 1px solid white;
        margin-bottom: 5%;
    }
`
export default Resume
