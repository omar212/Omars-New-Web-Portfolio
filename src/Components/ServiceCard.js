import React from 'react';
import { InnerLayout } from '../styles/Layouts';
import styled from 'styled-components';

function ServiceCard({image, title, paragraph}) {
    return (
        <ServiceCardStyled>
            <div className="container">
                <img src={image} alt=""/>
                <h4>{title}</h4>
                <p>{paragraph}</p>
            </div>

        </ServiceCardStyled>
    )
}

const ServiceCardStyled = styled.div `
    background-color: var(--background-dark-color-gray);
    border-left: 1px solid var(--border-color);
    border-right: 1px solid var(--border-color);
    border-top: 8px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);

    &:hover {
        border-top: 8px solid var(--primary-color);
        transform: translateY(3px)
    }
      .container {
          padding: 1.2rem;
          h4 {
              color: var(--white-color);
              font-size: 1.6rem;
              padding: 1rem 0;
              position: relative;
              &::after {
                  content: "";
                  width: 2rem;
                  background-color: var(--border-color);
                  height:4px;
                  position: absolute;
                  left: 0;
                  bottom: 0;
              }
          }

          p {
              padding: .5rem 0;
          }
      }
    /* img {
        margin: 5px;
    } */
`
export default ServiceCard
