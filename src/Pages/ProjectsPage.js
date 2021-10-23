import React from 'react'
import { InnerLayout, MainLayout } from '../styles/Layouts';
import styled from 'styled-components'
import Title from '../Components/Title';
import blogs from '../data/blogs'

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
                            <div className="blog-item">
                                <div className="image">
                                    <img src={blog.image} alt=""/>
                                </div>
                                <div className="title">
                                    <a target="_blank" href={blog.link}>
                                        {blog.title}
                                    </a>
                                </div>
                            </div>
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
        grid-template-columns:  100% 100%;
        grid-column-gap: 2rem;
        grid-row-gap: 3rem;
        padding: 2rem 1rem;
        width: 50%;

        // border: 1px solid white;
        // background-color: var(--background-dark-grey);

        .blog-item {
            background-color: var(--background-dark-color-gray);
            padding: 1rem 1rem;
            width: 100%;
            height: 100%;
            
            overflow: hidden;
        }

        .image {
            width:100%;
            height: 92%;
            img {
                width: 100%;
                height: 65%;
                margin-bottom: -100px;
                // object-fit: cover;
                transition: all .4s ease-in-out;
                &:hover {
                    cursor: pointer;
                    transform: rotate(5deg) scale(1.1)
                }
            }
        }

        .title {
            margin-top: 10px;
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
