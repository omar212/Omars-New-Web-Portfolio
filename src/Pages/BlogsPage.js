import React from 'react'
import { InnerLayout, MainLayout } from '../styles/Layouts';
import styled from 'styled-components'
import Title from '../Components/Title';
import blogs from '../data/blogs'

function BlogsPage() {
    return (
        <MainLayout>
            <BlogsStyled>
                <Title title={'Blogs'} span={'Blogs'} />
                <InnerLayout  className='blog'>
                {
                    blogs.map((blog) => {
                        return (
                        <div key={blog.id} >
                            <div className="image">
                                <img src={blog.image} alt=""/>
                            </div>
                            <div className="title">
                                <h4>
                                    {blog.title}
                                </h4>
                            </div>
                        </div>
                        )
                    })
                }
                </InnerLayout>
            </BlogsStyled>
        </MainLayout>
    )
}

const BlogsStyled = styled.div `
    .blog {
        display: grid;
        grid-template-columns: repeat(2,1f);
        grid-column-gap: 2rem;
        grid-row-start: 3rem;
        .image {
            width: 100%;
            height: 85%;
            img {
                width: 100%;
                height: 65%;
                object-fit: cover;
            }
        }
        
    }

`
export default BlogsPage
