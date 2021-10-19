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
    width: 100%;
    border: 1px solid purple;
    
    &:not(:last-child) {
        padding-bottom: 3rem;
    }
    .left-content {
        width: fit-content;
        word-break: none;
        padding-left: 40px;
        position: relative;
        border: 1px solid green;
        &::before {
            content: "";
            position: absolute;
            left: 0;
            top: 5px;
            width: 1rem;
            height: 17px;
            border-radius: 50%;
            border: 2px solid var(--border-color);
            background-color: var(--background-color-dark)
        }
        p {
            display: inline-block; 
            width: max-content;
            border:1px solid red;
        }

    }
    .right-content {
        margin-left:6rem;
        position: relative;
        border: 1px solid green;
        &::before {
            content: "";
            position: absolute;
            left: -100px;
            top: 15px;
            width: 3rem;
            height: 2px;
            background-color: var(--border-color);
        }
        h5 {
            color: var(--primary-color);
            font-size: 2.3rem;
            padding-bottom: .4rem;
        }
        h6 {
            padding-bottom: .4rem;
            font-size: 1.5rem;
        }
        p {
            display: inline-block; 
            word-break: break-word;
            width: 50%;
            border:1px solid red;
        }
    }
`
export default ResumeItem