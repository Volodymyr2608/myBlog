import * as PostsActionCreators from '../actions-creators/posts'
import * as PostActionCreators from '../actions-creators/post'

export default {
  ...PostsActionCreators,
  ...PostActionCreators
}
