import { IPosts } from '../../interfaces/posts'

export enum PostsActionTypes {
  FETCH_POSTS = 'APP/FETCH_POSTS',
  FETCH_POSTS_SUCCESS = 'APP/FETCH_POSTS_SUCCESS',
  FETCH_POSTS_ERROR = 'APP/FETCH_POSTS_ERROR',
}

interface FetchPostsAction {
  type: PostsActionTypes.FETCH_POSTS
}
interface FetchPostsSuccessAction {
  type: PostsActionTypes.FETCH_POSTS_SUCCESS,
  payload: IPosts[]
}
interface FetchPostsErrorAction {
  type: PostsActionTypes.FETCH_POSTS_ERROR,
  payload: string
}

export type PostsAction =
    FetchPostsAction
    | FetchPostsSuccessAction
    | FetchPostsErrorAction
