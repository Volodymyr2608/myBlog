import { Post } from '../../interfaces/post'
import { PostAction, PostActionTypes } from '../types/post'

const initialState:Post = {
  post: {
    id: '',
    title: '',
    body: '',
    comments: []
  }
}

export const postReducer = (state = initialState, action: PostAction): Post => {
  switch (action.type) {
    case PostActionTypes.FETCH_POST_SUCCESS:
      return { ...state, post: action.payload }
    default:
      return state
  }
}
