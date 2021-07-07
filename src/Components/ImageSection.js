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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
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
                <PrimaryButton title={'Download CV'}/>
             </div>
        </ImageSectionStyled>
    )
}

const ImageSectionStyled = styled.div`
    display: flex;
    margin-top: 5rem;
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
        padding-right: 5rem;
        
        h4 {
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
            
        }
        .about-info{
            display: flex;

        
            .info-title {
                padding-right: 3rem;
                p {
                    font-weight: 600;
                }
            }
            .info-title, .info {

                p{
                    padding: .3rem 0;
                }
            }
        }
        .paragraph {
            padding: 1rem 0;
        }
    }
`
export default ImageSection
