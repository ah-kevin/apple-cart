import {SELECT_SUBREDDIT, INVALIDATE_SUBREDDIT,REQUEST_POSTS,RECEIVE_POSTS} from '../../constants/reddit/index';

export function selectSubreddit (subreddit) {
  return {
    type: SELECT_SUBREDDIT,
    subreddit
  }
}

export function invalidatesubreddit (subreddit) {
  return {
    type: INVALIDATE_SUBREDDIT,
    subreddit
  }
}
export function requestPosts (subreddit) {
  return {
    type:REQUEST_POSTS,
    subreddit
  }
}
export function receivePosts (subreddit,json) {
  return {
    type:RECEIVE_POSTS,
    subreddit,
    posts:json.data.children.map(child=>child.data),
    receivedAt:Date.now()
  }
}
