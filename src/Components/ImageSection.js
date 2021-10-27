import React from 'react'
import styled from 'styled-components';
import ai from '../images/ai.jpg';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
             <div className="left-content">
                <img src={ai} alt=""/>
             </div>
             <div className="right-content">
                <div className="sub-title">
                    <h4>I am <span>Omar Elnagdy</span></h4>
                </div>
                <p className="paragraph">
                    And I love what I do. Life is simple, when work and hobbies become the same thing. I am 
                    grateful for the decisions I made in my life, to make that dream a reality. In my life time, I have tried 
                    multiple possible careers such as teaching and mechanical engineering, but neither of those gave me that satisfaction feeling 
                    that computer science has given me. Computer science to me is like a tree that doesn't stop growing and I want to be a branch 
                    on that tree.
                </p>
                <div className="about-info">
                   <div className="info-title">
                        <p>Full Name:</p>
                        <p>Age:</p>
                        <p>Nationality:</p>
                        <p>Languages:</p> 
                        <p>Location</p>
                        <p>Company:</p>
                        <p>Role:</p>
                    </div> 
                    <div className="info">
                        <p>Omar Elnagdy</p>
                        <p>24</p>
                        <p>Egyptian/Moroccan</p>
                        <p>English, Arabic, Spanish</p> 
                        <p>New York, USA</p>
                        <p>IBM</p>
                        <p>Software Engineer</p>  
                    </div> 
                    
                </div>
                <div className="btn-container">
                    <PrimaryButton className="download-btn" title={'Download Resume'}/>
                </div>
             </div>
             
        </ImageSectionStyled>
    )
}

const ImageSectionStyled = styled.div`
    display: flex;
    margin-top: 5rem;
    height: 100%;
    @media screen and (max-width: 1000px) {
        flex-direction: column;
        text-align: center;
    }
    .left-content{
        width: 100%;
        /* height: 70vh; */
        img{
            width: 90%;
            height: 100%;
            object-fit: cover;
        }
    }
    .right-content {
        // padding-right: 5rem;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        height: 100%;
        
        h4 {
            margin-top: 2%;
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
            
        }
        .about-info{
            display: flex;
            height: 35vh;
            width: 100%;
            @media screen and (max-width: 1000px) {
                justify-content: center;
            }
    
            .info-title {
                padding-right: 3rem;
                p {
                    font-weight: 600;
                }
            }
            .info-title, .info {
                font-size: 18px;
                p{
                    padding: .7rem 0;
                }
            }
        }
        .paragraph {
            padding: 1rem 0;
            color: var(--white-color);
            font-weight: 800;
        }
        /* .hckQw {
            margin-top: 20%;
        } */

        .btn-container {
            margin-top: 25%;
        }
    }
`
export default ImageSection
