import React from 'react'
import { Wrapper } from '../styles/pages/Home'
import { MainLayout } from '../components/MainLayout'
import { ListPosts } from '../components/ListPosts'
import { useTypedSelector } from '../hooks/useTypedSelectors'
import { NextThunkDispatch, wrapper } from '../store'
import { fetchPosts } from '../store/actions-creators/posts'

export default function Home () : JSX.Element {
  const { posts } = useTypedSelector(state => state.posts)

  return (
    <MainLayout title={'Home page'}>
      <Wrapper>
        <ListPosts posts={posts}/>
      </Wrapper>
    </MainLayout>

  )
}

export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
  const dispatch = store.dispatch as NextThunkDispatch
  await dispatch(await fetchPosts())
})
