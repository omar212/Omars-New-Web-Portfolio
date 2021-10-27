import React, { useRef, useState } from 'react'
import { MainLayout,InnerLayout  } from '../styles/Layouts';
import Title from '../Components/Title'
import styled from 'styled-components'
import PrimaryButton from  '../Components/PrimaryButton'
import EmailIcon from '@material-ui/icons/Email'
import PhoneIcon from '@material-ui/icons/Phone'
import LocationIcon from '@material-ui/icons/LocationOn'
import ContactItem from '../Components/ContactItem'
import { Phone } from '@material-ui/icons';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
import Button from '@material-ui/core/Button';
 

function ContactPage() {
    const phone = <PhoneIcon />
    const email = <EmailIcon />
    const location = <LocationIcon />

    const form = useRef();
    const [success, checkSuccess] = useState(false)
    
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_hpxlflq', 'template_n9iwg9e', form.current, init("user_QdsLIWqRzZR2BZEMyzhaR"))
        .then((result) => {
            console.log(result.text);
            checkSuccess(true)
        }, (error) => {
            console.log(error.text);
        });
    };
      
      

    return (
        <MainLayout>
            <Title title={'Contact'} span={'Contact'}/>
            <ContactPageStyled>
                <InnerLayout className={'contact-section'}>
                    <div className="left-content">
                        <form ref={form} onSubmit={sendEmail} action="" className="form">
                            <div className="contact-title">
                                <h4>
                                    Get In Touch
                                </h4>
                            </div>
                            <div className="form-field">
                                <label htmlFor="name" id="name" >Enter your name:* </label>
                                <input type="text" id="name" name="user_name"/>
                            </div>
                            <div className="form-field">
                                <label htmlFor="email" id="email" >Enter your email:* </label>
                                <input type="text" name="user_email" id="email"/>
                            </div>
                            <div className="form-field">
                                <label htmlFor="subject" id="name">Enter your subject: </label>
                                <input type="text" id="subject"/>
                            </div>
                            <div className="form-field" >
                                <label htmlFor="text-area">Enter your message*</label>
                                <textarea name="message" id="" cols="30" rows="10"></textarea>
                            </div>
                            <div className="form-field">
                                <Button className="primary-button" type="submit" value="Send" onClick={sendEmail}><span>Send Email</span></Button>
                            </div>
                        </form>
                    </div>
                    
                    <div className="right-content">
                        <ContactItem title={'Phone'} icon={phone} cont1={'+1(347)-429-2283'} const2={''} />
                        <ContactItem title={'Email'} icon={email} cont1={'omarelnagdy16@gmail.com'} const={''} />
                        <ContactItem title={'Location'} icon={location} cont1={'New York, NY'} cont2={'Danbury, CT'} />
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
        grid-column-gap: 2rem;
        color: var(--white-color);
        @media screen and (max-width: 1000px) {
            grid-template-columns: repeat(1,1fr);
        }
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
                    @media screen and (max-width: 1000px) {
                            width: 80%;
                        }

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
                        width: 100%;
                        padding: .8rem 1rem;
                    }

                    Button {
                        @media screen and (max-width: 1000px) {
                            margin: auto;
                            display: flex;
                            justify-content: center;
                            margin-bottom: 2rem;
                        }
                    }
                }
                .primary-button {
                    background-color: var(--primary-color);
                    padding: .8rem 2.5rem;
                    color: var(--white-color) !important;
                    cursor: pointer;
                    display: inline-block;
                    font-size: inherit;
                    text-transform: uppercase;
                    position: relative;
                    transition: all .4s ease-in-out;   
                    margin-top: 2%;
                    margin-bottom:5%;
                    &::after {
                        content: "";
                        position: absolute;
                        width: 0;
                        height: .2rem;
                        transition: all .4s ease-in-out;
                        left: 0;
                        bottom: 0;
                    }
                    &:hover::after {
                        width: 100%;
                        background-color: white;
                        opacity: .7;
                    }
                    span {
                        color: var(--white-color) !important;
                    }
                }
                
            }
        }
        .right-content {
            display: grid;
            width:75%;
            height: 50%;
            // justify-content: space-between;
            @media screen and (max-width: 1000px) {
                width: 90%;
                grid-template-columns: repeat(1,1fr);
            }
           
        }
        
    }
`
export default ContactPage
