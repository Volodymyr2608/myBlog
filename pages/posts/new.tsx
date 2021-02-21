import React, { useState } from 'react'
import { MainLayout } from '../../components/MainLayout'
import { Wrapper } from '../../styles/pages/Home'
import { Form } from '../../styles/components/Form'
import { useActions } from '../../hooks/useActions'

export default function NewPost (): JSX.Element {
  const [post, setPost] = useState({
    title: '',
    body: ''
  })
  const { createPost } = useActions()

  const changeHandlerInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPost({ ...post, [event.target.name]: event.target.value })
  }
  const changeHandlerTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPost({ ...post, [event.target.name]: event.target.value })
  }

  const newPost = async (event) => {
    event.preventDefault()
    createPost(post)
  }

  return (
    <MainLayout title={'Create Post'}>
      <Wrapper>
        <Form>
          <div className="wrapper_form">
          <h1>New post</h1>
          <form action="">
            <div className="form_field">
              <label htmlFor="title">
                Title
              </label>
              <input value={post.title} onChange={changeHandlerInput} type="text" name="title" id="title" placeholder="Title"/>
            </div>
            <div className="form_field">
              <textarea value={post.body} onChange={changeHandlerTextArea} name="body" placeholder="Descriptions"/>
            </div>
            <div className="btn">
              <button onClick={newPost}>Додати</button>
            </div>
          </form>
          </div>
        </Form>
      </Wrapper>
    </MainLayout>
  )
}
