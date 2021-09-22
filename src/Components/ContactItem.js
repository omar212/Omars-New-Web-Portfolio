import React from 'react'
import PropTypes from 'prop-types'
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import styled from 'styled-components'


function ContactItem({icon, title, cont1, cont2}) {

    return (    
        <ContactItemStyled>
            <div className="left-content">
                <p>
                    {icon}
                </p>
            </div>
            <div className="right-content">
                <h6>{title}</h6>
                <p>{cont1}</p>
                <p>{cont2}</p>
            </div>
        </ContactItemStyled>
    )
}

const ContactItemStyled = styled.div`
    padding: 1.5rem 2rem;
    background-color: var(--background-dark-grey);
    display: flex;
    align-items: center;
    &:not(:last-child) {
        margin-bottom: 2rem;
    }
    
    .left-content {
        padding: 1.5rem;
        border: 1px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 1.5rem;
        font-size: 2rem;

        svg {
            font-size: 2.3rem;
        }
    }

    .right-content {
        h6 {
            color: var(--white-color);
            font-size: 1.2rem;
            padding-bottom: .6rem;
        }

        p {
            padding: .1rem 0;
        }
    }
`


export default ContactItem
