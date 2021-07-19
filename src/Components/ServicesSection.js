import React from 'react';
import { InnerLayout } from '../styles/Layouts';
import styled from 'styled-components';
import Title from '../Components/Title';
import ServiceCard from './ServiceCard';
import design from '../images/design.png';
import gaming from '../images/gaming.png';
import ibm from '../images/ibm.png';

function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                 <Title title={'Projects'} span={'projects'}  />
                 <div className="services">
                    <ServiceCard 
                        image={design} 
                        title={'Web Design'} 
                        paragraph={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia"}
                    />
                    <div className="mid-card">
                    <ServiceCard 
                        image={gaming} 
                        title={'Game Development'} 
                        paragraph={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia"}
                    />
                    </div>
                    <ServiceCard 
                        image={ibm} 
                        title={'IBM Watson'} 
                        paragraph={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia"}
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