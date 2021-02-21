export interface IPosts {
  id: string | number
  title: string
  body: string
}

export interface PostsState {
  posts: IPosts[]
}
