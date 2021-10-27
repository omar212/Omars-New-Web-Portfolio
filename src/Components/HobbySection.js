import React from 'react';
import { InnerLayout } from '../styles/Layouts';
import styled from 'styled-components';
import Title from './Title';
import HobbyCard from './HobbyCard';
import design from '../images/hobbyIcons/design.png';
import gaming from '../images/hobbyIcons/gaming.png';
import basketball from '../images/hobbyIcons/basketball.png';
import piano from '../images/hobbyIcons/piano.png';

function HobbySection() {
    return (
        <InnerLayout>
            <HobbySectionStyled>
                 <Title title={'Hobbies'} span={'Hobbies'}  />
                 <div className="services">
                    <HobbyCard 
                        image={design} 
                        title={'Web Design'} 
                        paragraph={"I truly enjoy the challenge and creativity it takes to create a website/app. I feel like I'm creating something very real and it truly gives me a satisfaction to complete it."}
                    />
                    <HobbyCard 
                        image={gaming} 
                        title={'Game Development'} 
                        paragraph={"I've always enjoyed creating and playing video games, in my opionion video games help you adept in stressful situations"}
                    />
                    <HobbyCard 
                        image={basketball} 
                        title={'Basketball'} 
                        paragraph={"For a healthy mind you need a healthy body, and basketball does that for me. Favourite Teams: Knicks & Nets"}
                    />
                     <HobbyCard 
                        image={piano} 
                        title={'Piano'} 
                        paragraph={"I've played piano since the age of 16 years old, I've always enjoyed the melody a piano can bring. You would be suprised how many songs are so easy to play through a piano."}
                    />
                 </div>
            </HobbySectionStyled>
        </InnerLayout>
    )
}

const HobbySectionStyled = styled.section`
    // background-color: var(--background-dark-color-gray);
    
    .services {
        display: grid;
        /* justify-content: space-between;  */
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2rem;
        margin-top: 5rem;
        width: 100%;

        @media screen and (max-width: 1000px) {
            grid-template-columns: repeat(3, 1fr);
            width: 100%;
        }
        @media screen and (max-width: 950px) {
            grid-template-columns: repeat(2, 1fr);
            width: 100%;
        }
        @media screen and (max-width: 650px) {
            grid-template-columns: repeat(1, 1fr);
            width: 100%;
        }
    }
`;
export default HobbySection;