import React from 'react'
import { MainLayout,InnerLayout  } from '../styles/Layouts';
import Title from '../Components/Title'
import styled from 'styled-components'
import PrimaryButton from  '../Components/PrimaryButton'

function ContactPage() {
    return (
        <MainLayout>
            <Title title={'Contact'} span={'Contact'}/>
            <ContactPageStyled>
                <InnerLayout className={'contact-section'}>
                    <div className="left-content">
                        <form action="" className="form">
                            <div className="contact-title">
                                <h4>
                                    Get In Touch
                                </h4>
                            </div>
                            <div className="form-field">
                                <label htmlFor="name" id="name">Enter your name:* </label>
                                <input type="text" id="name"/>
                            </div>
                            <div className="form-field">
                                <label htmlFor="email" id="email">Enter your email:* </label>
                                <input type="text" id="email"/>
                            </div>
                            <div className="form-field">
                                <label htmlFor="subject" id="name">Enter your subject: </label>
                                <input type="text" id="subject"/>
                            </div>
                            <div className="form-field">
                                <label htmlFor="text-area">Enter your message*</label>
                                <textarea name="" id="" cols="30" rows="10"></textarea>
                            </div>
                            <div className="form-field">
                                <PrimaryButton title={'Send Email'}/>
                            </div>
                        </form>
                    </div>
                    
                    <div className="right-content">

                    </div>

                </InnerLayout>
                </ContactPageStyled>
        </MainLayout>
    )
}

const ContactPageStyled = styled.section`
    .contact-section {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        color: var(--white-color);
        .left-content {
            .contact-title {
                h4 {
                    color: var(--white-color);
                    padding:  1rem 0;
                    font-size: 1.8rem;
                }
            }
            .form {
                margin-top: .2rem;
                position: relative;
                width: 100%;
                .form-field {
                    margin-top: 2rem;
                    position: relative;
                    color: var(--white-color);

                    label {
                        position: absolute;
                        left: 20px;
                        top: -16px;
                        display: inline-block;
                        background-color: var(--background-dark-color);
                        padding: 0rem .5rem;
                        color: inherit;
                    }

                    input {
                        border: 1px solid var(--border-color);
                        outline: none;
                        background: transparent;
                        height:50px;
                        padding: 0 15px;
                        width: 100%;
                        color: inherit;
                    }

                    textarea {
                        border: 1px solid var(--border-color);
                        background-color: transparent;
                        outline: none;
                        color: inherit;
                        padding: .8rem 1rem;
                    }
                }
            }
        }
        .right-content {
            
        }
        
    }
`
export default ContactPage
