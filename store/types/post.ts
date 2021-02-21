import { INewPost, IPost } from '../../interfaces/post'

export enum PostActionTypes {
  CREATE_POST = 'POST/CREATE_POST',
  UPDATE_POST = 'PUT/UPDATE_POST',
  DELETE_POST = 'DELETE/DELETE_POST',
  FETCH_POST = 'GET/FETCH_POST',
  FETCH_POST_SUCCESS = 'APP/FETCH_POST_SUCCESS',
  FETCH_POST_ERROR = 'APP/FETCH_POST_ERROR',
}

interface CreatePostAction {
  type: PostActionTypes.CREATE_POST,
  payload: INewPost
}
interface UpdatePostAction {
  type: PostActionTypes.UPDATE_POST
}
interface DeletePostAction {
  type: PostActionTypes.DELETE_POST
}

interface FetchPostAction {
  type: PostActionTypes.FETCH_POST,
  payload: string | number
}
interface FetchPostSuccessAction {
  type: PostActionTypes.FETCH_POST_SUCCESS,
  payload: IPost
}
interface FetchPostErrorAction {
  type: PostActionTypes.FETCH_POST_ERROR,
  payload: string
}

export type PostAction =
  CreatePostAction
  | UpdatePostAction
  | DeletePostAction
  | FetchPostAction
  | FetchPostSuccessAction
  | FetchPostErrorAction
