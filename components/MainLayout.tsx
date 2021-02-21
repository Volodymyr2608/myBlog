import Head from 'next/head'
import React from 'react'
import styled from 'styled-components'
import { Navbar } from './Navbar'

const Heading = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left:0;
  height: 80px;
  background-color: #374151;
  color: white;
`
interface MainProps {
  children: JSX.Element,
  title?: string
}

export function MainLayout ({ children, title = 'myBlog' }: MainProps): JSX.Element {
  return (<>
    <Head>
      <title>{title}</title>
    </Head>
    <Heading>
      <Navbar/>
    </Heading>
    <main>
      {children}
    </main>
  </>)
}