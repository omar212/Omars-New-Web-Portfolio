import React from 'react'
import { InnerLayout, MainLayout } from '../styles/Layouts';
import styled from 'styled-components'
import Title from '../Components/Title';
import blogs from '../data/blogs'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import  { Link, NavLink } from 'react-router-dom';


function BlogsPage() {
    return (
        <MainLayout>
            <ProjectStyled>
                <Title title={'Projects'} span={'Projects'} />
                <InnerLayout  className='blog'>
                {
                    blogs.map((blog) => {
                        return (
                            <div key={blog.id} >
                                <Card className="blog-item" sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        component="img"
                                        alt="image of my princess"
                                        height={"240px"}
                                        image={blog.image}
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        <a href={blog.link}>{blog.title}</a>
                                    </Typography>
                                    </CardContent>
                                </Card>
                            </div>
                        )
                    })
                }
               
                </InnerLayout>
            </ProjectStyled>
        </MainLayout>
    )
}

const ProjectStyled = styled.div `
    .blog {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
        // padding: 2rem 1rem;
        width: 100%;
        height: 100%;
        
        @media screen and (max-width: 1000px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width: 950px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width: 650px) {
            grid-template-columns: repeat(1, 1fr);
        }

        .MuiTypography-gutterBottom {
            text-align: center;
            margin: auto;
            color: var(--white-color);
            font-family: inherit;
            font-size: inherit;
            
        }

        // border: 1px solid white;
        // background-color: var(--background-dark-grey);

        .blog-item {
            background-color: var(--background-dark-color-gray);
            padding: 1rem 1rem;
            height: fit-content;
            width: 50%;
            @media screen and (max-width: 650px) {
                width:100%;
            }
            @media screen and (min-width: 651px) and (max-width: 1000px) {
                width:75%;
            }
            // height: 100%;
            // height: 100%;
            
            overflow: hidden;
        }

        .image {
            width:100%;
            
            height: fit-content;
            img {
                width: 100%;
                height: fit-content;
                // margin-bottom: -100px;
                // object-fit: cover;
                transition: all .4s ease-in-out;
                &:hover {
                    cursor: pointer;
                    transform: rotate(5deg) scale(1.1)
                }
            }
        }

        .title {
            // margin-top: 10px;
            text-align: center;
            a {
                font-size: 1.5rem;
                color: var(--white-color);
                cursor: pointer;
                transition: all .4s ease-in-out;
                &:hover {
                    color: var(--primary-color)
                }
            }
        }
        
    }

`
export default BlogsPage
