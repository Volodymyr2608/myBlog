import React from 'react'
import Link from 'next/link'
import { Wrapper } from '../styles/pages/Home'
import styled from 'styled-components'

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  a {
    text-decoration: none;
    color: white;
  }

  .logo a {
    font-size: 1.3rem;
    cursor: pointer;
  }

  ul {
    display: flex;
    align-items: center;
  }

  ul li {
    padding: 0 1rem;
    list-style-type: none;
  }

  .newPost {
    background-color: #fff;
    padding: 10px;
    border-radius: 5px;
    color: #000;
  }
`

export const Navbar = (): JSX.Element => {
  return (<>
    <Wrapper>
      <Nav>
        <div className="logo">
          <Link href="/"><a>myBlog</a></Link>
        </div>
        <ul>
          <li><Link href="/"><a>Posts</a></Link></li>
          <li><Link href="/posts/new"><a className="newPost">Create Post</a></Link></li>
        </ul>
      </Nav>
    </Wrapper>

  </>)
}
