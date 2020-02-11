import gql from "graphql-tag";
import {client, FeedClient} from "../../../../graphQl";

export const fetchLiveFeedList = async (eventId = '') => {
  console.log('eventId', eventId)
  try {
      return FeedClient.query({
        query: GEET_FEED_BY_EVENT,
        fetchPolicy: 'network-only',
        variables: {eventId}
      })
        .then(async ({ data }: any) => {
          if (data.livefeedByEventId) {
            console.log('feed', data.livefeedByEventId)
            return data.livefeedByEventId
          } else {
            const data = await createEventFeed(eventId)
            return data
          }
        }).catch(e => console.log('Error in fetching Live feed', e.message));
  }catch (e) {
    console.log('User fetching error :', e.message)
  }
}

export const fetchAttendeeData = async (attendeeId: string = '') => {
  try {
      return client.query({query: GET_ATTENDEE_DATA, variables: {attendeeId}})
        .then(({ data }: any) => {
          return data.attendee
        }).catch(e => console.log('Error in fetching Live feed', e.message));
  }catch (e) {
    console.log('User fetching error :', e.message)
  }
}

export const createNewPost = async (input: any, comment = false) => {
  const mutation = comment ? CREATE_NEW_COMMENT : CREATE_NEW_POST
  try {
      return FeedClient.mutate({mutation, variables: {input}})
        .then(({ data }: any) => {
          console.log('create result', data)
        }).catch(e => console.log('Error in creating Live feed post', e.message));
  }catch (e) {
    console.log('User fetching error :', e.message)
  }
}

export const createEventFeed = async (eventId: string) => {
  const input = {eventId, feedType: 1}
  try {
    return FeedClient.mutate({mutation: CREATE_EVENT_FEED, variables: {input}})
      .then(({ data }: any) => {
        console.log('feed event', data.createLivefeed)
        return data.createLivefeed;
      }).catch(e => console.log('Error in creating Live feed post', e.message));
  }catch (e) {
    console.log('User fetching error :', e.message)
  }
}
export const likeUnlikePostReq = async (input: any, like = false) => {
  const mutation = like ? UNLIKE_POST : LIKE_POST
  try {
    return FeedClient.mutate({mutation, variables: {input}})
      .then(({ data }: any) => {
        console.log('like unlike post response', data)
      }).catch(e => console.log('Error in like or unlike post', e.message));
  }catch (e) {
    console.log('User fetching error :', e.message)
  }
}
export const deletePostReq = async (postId: string) => {
  console.log('postId', postId)
  try {
    return FeedClient.mutate({mutation: DELETE_POST, variables: {input: {postId}}})
      .then(({ data }: any) => {
        console.log('Delete post response', data)
      }).catch(e => console.log('Error in delete post', e.message));
  }catch (e) {
    console.log('User fetching error :', e.message)
  }
}

const GET_ATTENDEE_DATA = gql`
query Attendee($attendeeId: ID!){
  attendee(attendeeId: $attendeeId) {
    id
    name {
      first
      last
    }
    eventId
    imageUri
    employment {
      position
      company
    }
  }
}
`;

const CREATE_EVENT_FEED = gql`
mutation createLiveFeed($input:CreateLiveFeedInput) {
  createLivefeed(input: $input) {
    id
    eventId
    feedType
    createDate
    posts {
      id
      feedId
      authorId
      title
      body
      imageUrls
      createDate
      comments {
        id
        text
        createDate
        postId
        authorId
        }
        postLikes {
          authorId
          postId
          }
    }
  }
}
`;

const CREATE_NEW_POST = gql`
mutation createPost($input: CreatePostInput) {
  createPost(input: $input) {
    feedId
    authorId
    body
    title
    imageUrls
  }
}
`;

const CREATE_NEW_COMMENT = gql`
mutation createPost($input: CreateCommentInput) {
  createComment(input: $input) {
    authorId
    text
    postId
  }
}
`;

const LIKE_POST = gql`
mutation likePost($input: LikePostInput) {
  likePost(input: $input) {
    authorId
    postId
  }
}
`;

const UNLIKE_POST = gql`
mutation unlikePost($input: LikePostInput) {
  unlikePost(input: $input) {
    authorId
    postId
  }
}
`;

const DELETE_POST = gql`
mutation deletePost($input: DeletePostInput) {
  deletePost(input: $input) {
    id
  }
}
`;

const GEET_FEED_BY_EVENT = gql`
query LivefeedByEventId($eventId: ID!){
  livefeedByEventId(eventId: $eventId) {
    id
    feedType
    eventId
    createDate
    posts {
      id
      feedId
      authorId
      title
      body
      imageUrls
      createDate
      comments {
        id
        text
        createDate
        postId
        authorId
        }
         postLikes {
          authorId
          postId
          }
    }
  }
}
`;
