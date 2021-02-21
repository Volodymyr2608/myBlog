import React, { useState } from 'react'
import { MainLayout } from '../../components/MainLayout'
import { Wrapper } from '../../styles/pages/Home'
import { wrapper, NextThunkDispatch } from '../../store'
import { fetchPost } from '../../store/actions-creators/post'
import { useTypedSelector } from '../../hooks/useTypedSelectors'
import { Post } from '../../styles/pages/Post'
import { Comment } from '../../styles/components/Comment'
import { useRouter } from 'next/dist/client/router'
import { useActions } from '../../hooks/useActions'

export default function PostDetail () : JSX.Element {
  const { post } = useTypedSelector(state => state.post)
  const { query } = useRouter()

  const [comment, setComment] = useState({
    body: '',
    postId: +query.postId
  })
  const { createComment } = useActions()

  const changeHandlerTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment({ ...comment, [event.target.name]: event.target.value })
  }

  const saveComment = async (event) => {
    event.preventDefault()
    createComment(comment)
  }

  return (<MainLayout title={'Post page'}>
    <Wrapper>
      <Post>
        <h1>{post.title}</h1>
        <hr/>
        <p>{post.body}</p>
        <form action="">
          <textarea onChange={changeHandlerTextArea} value={comment.body} name="body" id="body" placeholder="Write your comment"/>
          <div className="btn">
            <button onClick={saveComment} className="save">Send</button>
          </div>
        </form>
      </Post>

      <Comment>
      {
          post.comments.map((comment) => (
            <div key={comment.id} className="comment">
              <p>{comment.body}</p>
            </div>
          ))
        }
      </Comment>

    </Wrapper>
  </MainLayout>)
}

export const getServerSideProps = wrapper.getServerSideProps(async ({ query, store }) => {
  const dispatch = store.dispatch as NextThunkDispatch
  await dispatch(await fetchPost({ postId: query.postId }))
})
