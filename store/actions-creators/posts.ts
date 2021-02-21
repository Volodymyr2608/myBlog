import { Dispatch } from 'react'
import { IPosts } from '../../interfaces/posts'
import { PostsAction, PostsActionTypes } from '../types/posts'
import axios from 'axios'
import _ from 'lodash'

export const fetchPosts = () => {
  return async (dispatch: Dispatch<PostsAction>) => {
    try {
      dispatch({
        type: PostsActionTypes.FETCH_POSTS
      })
      const response = await axios.get('https://simple-blog-api.crew.red/posts')
      const data: IPosts[] = await response.data
      const posts = _.filter(data, (o) => o.title && o.body)
      dispatch({
        type: PostsActionTypes.FETCH_POSTS_SUCCESS,
        payload: posts
      })
    } catch (e) {
      dispatch({
        type: PostsActionTypes.FETCH_POSTS_ERROR,
        payload: 'Something went wrong'
      })
    }
  }
}
