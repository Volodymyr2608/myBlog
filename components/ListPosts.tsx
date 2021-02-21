import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { IPosts } from '../interfaces/posts'

const TablePost = styled.div`
  padding-top: 30px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-auto-flow: row;
  gap: 2rem;

  .title {
    text-decoration: none;
    color: #374151;
  }

  .description {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }

`

interface ListPostsProps {
  posts: IPosts[]
}

export const ListPosts = ({ posts } : ListPostsProps): JSX.Element => {
  return (<>
    <TablePost>
      { posts.map((post) => (
        <div className="" key={post.id}>
          <div>
            <h2><Link href={`/posts/${post.id}`}><a className="title">{post.title}</a></Link></h2>
            <p className="description">{post.body}</p>
          </div>
        </div>
      ))}
    </TablePost>
  </>)
}
