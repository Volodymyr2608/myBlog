export interface IComment {
  id: string | number
  postId: string | number
  body: string
  date: string
}

export interface IPost {
  id: string | number
  title: string
  body: string,
  comments?: IComment[]
}

export interface INewPost {
  title: string,
  body: string
}
export interface INewComment {
  postId: string | number
  body: string
  date: string
}

export interface Post {
  post: IPost
}
