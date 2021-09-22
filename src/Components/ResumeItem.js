import React from 'react'
import styled from 'styled-components'

function ResumeItem({year, title, subTitle, text }) {
    return (
        <ResumeItemStyled>
            <div className="left-content">
                <p>{year}</p>
            </div>
            <div className="right-content">
                <h5>{title}</h5>
                <h6>{subTitle}</h6>
                <p>{text}</p>
            </div>
        </ResumeItemStyled>
    )
}


const ResumeItemStyled = styled.div`
    display: flex;
    .left-content {
        width: 10%;
        p {
            display: inline-block; 
        }

    }
    .right-content {
        margin-left:0%;
        h5 {
            color: var(--primary-color);
            font-size: 2.3rem;
            padding-bottom: .4rem;
        }
        h6 {
            padding-bottom: .4rem;
            font-size: 1.5rem;
        }
    }
`
export default ResumeItem
