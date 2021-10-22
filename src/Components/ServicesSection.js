import React from 'react';
import { InnerLayout } from '../styles/Layouts';
import styled from 'styled-components';
import Title from '../Components/Title';
import ServiceCard from './ServiceCard';
import design from '../images/hobbyIcons/design.png';
import gaming from '../images/hobbyIcons/gaming.png';
import basketball from '../images/hobbyIcons/basketball.png';

function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                 <Title title={'Hobbies'} span={'Hobbies'}  />
                 <div className="services">
                    <ServiceCard 
                        image={design} 
                        title={'Web Design'} 
                        paragraph={"I truly enjoy the challenge and creativity it takes to create a website/app. I feel like I'm creating something very real and it truly gives me a satisfaction to complete it."}
                    />
                    <div className="mid-card">
                    <ServiceCard 
                        image={gaming} 
                        title={'Game Development'} 
                        paragraph={"I've always enjoyed creating and playing video games, in my opionion video games help you adept in stressful situations"}
                    />
                    </div>
                    <ServiceCard 
                        image={basketball} 
                        title={'Basketball'} 
                        paragraph={"For a healthy mind you need a healthy body, and basketball does that for me. Favourite Teams: Knicks & Nets"}
                    />
                 </div>
            </ServicesSectionStyled>
        </InnerLayout>
    )
}

const ServicesSectionStyled = styled.section`
    // background-color: var(--background-dark-color-gray);
    
    .services {
        display: flex;
        justify-content: space-between; 
        margin-top: 5rem;
        .mid-card {
            margin: 0 1.2rem;
        }
    }
`;
export default ServicesSection;