import { PostsActionTypes, PostsAction } from '../types/posts'
import { PostsState } from './../../interfaces/posts'

const initialState: PostsState = {
  posts: []
}

export const postsReducer = (state = initialState, action: PostsAction): PostsState => {
  switch (action.type) {
    case PostsActionTypes.FETCH_POSTS_SUCCESS:
      return { ...state, posts: action.payload }
    default:
      return state
  }
}
