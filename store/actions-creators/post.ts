import { Dispatch } from 'react'
import { PostAction } from '../types/post'
import axios from 'axios'

export const createPost = (post) => {
  return async (dispatch: Dispatch<PostAction>) => {
    try {
      await axios.post('https://simple-blog-api.crew.red/posts', { ...post }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
    } catch (e) {
      console.log(e)
    }
  }
}

export const fetchPost = ({ postId }) => {
  return async (dispatch: Dispatch<PostAction>) => {
    try {
      await axios.get(`https://simple-blog-api.crew.red/posts/${postId}?_embed=comments`)
    } catch (e) {
      console.log(e)
    }
  }
}

export const createComment = (comment) => {
  return async (dispatch: Dispatch<PostAction>) => {
    try {
      await axios.post('https://simple-blog-api.crew.red/comments', { ...comment }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
    } catch (e) {
      console.log(e)
    }
  }
}
