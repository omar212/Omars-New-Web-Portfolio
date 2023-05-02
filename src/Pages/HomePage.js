import React from 'react';
import Particle from '../Components/particles';
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import GithubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedIn from '@material-ui/icons/LinkedIn';
import avatar from '../images/avatar2.jpg';


function HomePage() {
    return (
        <HomePageStyled> 
            <div className="particle-con">
                <Particle /> 
            </div>
            <div className="typography">
                <h1>Hi I'm <br/> <span>Omar Elnagdy !</span></h1>
                <p>
                    Glad to see you have made it here!, I hope this website can help protray myself in the best way possible. Enjoy & Explore !
                </p>
                <div className="icons">
                    <a href="https://www.facebook.com/omar.elnagdy" target="_blank" alt="facebook" rel="noopener noreferrer" className="icon i-facebook">
                            <FacebookIcon />
                    </a>
                    <a  href="https://github.com/omar212" target="_blank"  alt="github" rel="noopener noreferrer" className="icon i-github">
                            <GithubIcon />
                    </a>
            
                    <a href="https://twitter.com/x_Omar_x1" target="_blank" alt="twitter" rel="noopener noreferrer" className="icon i-twitter">
                         <TwitterIcon />
                    </a>
                    <a href="https://www.linkedin.com/in/omar-elnagdy/" target="_blank"  alt="linkedin" rel="noopener noreferrer" className="icon i-linkedin">
                        <LinkedIn />
                    </a>
                </div>
                <div className="avatar">
                    <img src={avatar} alt="" />
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
   width: 100%;
   height: 100vh;
   position: relative;

   h1 {
       color: var(--white-color)
   }

   .avatar {
        width: 80%;
        @media screen and (max-width:1200px) {
            width: 50%;
        }

        text-align: center;
        padding: 1rem 0;
        img {
            position: absolute;
            width: 20%;
            @media screen and (max-width:1200px) {
                width: 50%;
            }
            
            border-radius: 2rem;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            border: 3px solid var(--border-color);
        }
    }


   .p-particles-ks {
       position:  absolute;
       top: 0;
       left: 0;
   }

   .typography {
       position: absolute;
       top: 35%;
       left:50%;
       transform: translate(-50%, -50%);
       text-align: center;
       width: 100%;
       color: var(--white-color);
   }

   p {
       font-weight: 900;
       font-size: 24px;
   }

   .icons {
       display: flex;
        justify-content: center;
        margin-top:1rem;
        .icon {
            border: 2px solid var(--border-color);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: all .4s ease-in-out;


            &:hover {
                border: 2px solid var(--primary-color);
                color: var(--primary-color);
            }
             
            &:not(:last-child) {
                margin-right: 1rem;
            }
            svg {
                margin: 1rem;
                cursor: pointer;
            }
        }
    }
`;
export default HomePage;