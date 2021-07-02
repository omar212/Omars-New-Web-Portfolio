import React from 'react';
import  { NavLink } from 'react-router-dom';
import avatar from '../images/avatar.jpg';
import styled from 'styled-components';

function Navigation() {
    return (
        <NavigationStyled>
            <div className="avatar">
                <img src={avatar} alt="" />
            </div>
            
            <ul className="nav-items">
                <ol className="nav-items">
                    <NavLink to="/home" activeClassName="active-class" exact>
                        Home
                    </NavLink>
                </ol>
                <ol className="nav-items">
                    <NavLink to="/about" activeClassName="active-class">
                        About
                    </NavLink>
                </ol>
                <ol className="nav-items">
                    <NavLink to="/resume" activeClassName="active-class">
                        Resume
                    </NavLink>
                </ol>
                <ol className="nav-items">
                    <NavLink to="/portfolios" activeClassName="active-class">
                        Blogs
                    </NavLink>
                </ol>
                <ol className="nav-items">
                    <NavLink to="/blogs" activeClassName="active-class">
                        Contact
                    </NavLink>
                </ol>
            </ul>
            <footer className="footer">
                <p>@2021 Omar Elnagdy's Web Portfolio</p>
            </footer>
              
        </NavigationStyled>
    )
}

const NavigationStyled = styled.nav `
    display:flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    border-right: 5px solid var(--border-color);

    .avatar {
        width: 80%;
        border-bottom: 1px solid var(--border-color);
        text-align: center;
        padding: 1rem 0;
        img {
            width: 100%;
            border-radius: 50%;
            border: 8px solid var(--border-color);
        }
    }

    .nav-items {
        width: 100%;
        text-align: center;
        font-size: 2rem;
        .active-class {
            background-color: var(--primary-color);
            color: var(--font-dark-color);
        }

        ol{
            display: block;
            a {
                display: block;
                padding: .45rem 0;
                position: relative;

                &:hover {
                    cursor: pointer;
                }
                &::before {
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 50%;
                    background-color: var(--primary-color);
                    transition: All 0.4s cubic-bezier(.8,-0.2,.1,.77);
                    
                    opacity: .21;
                    transform-origin: right;
                }
            }

            a:hover::before {
                width: 100%;
                height: 100%;
            }
        }
    }

    footer {
        border-top: 1px solid var(--border-color);
        width: 100%;
        p {
            padding: 2rem 0;
            font-size: 1.1rem;
            text-align: center;
            display: block;
        }
    }


`
export default Navigation;