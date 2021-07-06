import React from 'react';
import Particle from '../Components/particles';
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import GithubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedIn from '@material-ui/icons/LinkedIn';


function HomePage() {
    return (
        <HomePageStyled> 
            <div className="particle-con">
                <Particle /> 
            </div>
            <div className="typography">
                <h1>Hi I'm <span>Omar Elnagdy</span></h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec gravida tincidunt euismod. Mauris lacus mi, vulputate eget sem
                    vitae, imperdiet consectetur urna. In ante sapien, mattis eu nisi ut,
                    malesuada fringilla massa. Ut pulvinar, quam quis interdum convallis,
                    sem dolor ullamcorper lacus, vel tristique felis nunc in risus.
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
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
   width: 100%;
   height: 100vh;
   position: relative;

   .p-particles-ks {
       position:  absolute;
       top: 0;
       left: 0;
   }

   .typography {
       position: absolute;
       top: 50%;
       left:50%;
       transform: translate(-50%, -50%);
       text-align: center;
       width: 80%;
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