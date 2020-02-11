import React, {useState} from 'react';
import Posts from './Posts';
import {createNewPost, deletePostReq, fetchAttendeeData, fetchLiveFeedList, likeUnlikePostReq} from './module/api/';
import {cloneDeep} from 'lodash';
import {ProgressModal} from "../../components/ProgressModal";
import {KeyboardAvoidingView, Platform} from "react-native";
import {getCurrentUser} from "../../api";

function index({navigation}) {
  const eventId = navigation.getParam('activeEvent');
  const [feedId, setFeedId] = React.useState('');
  const [posts, setPosts] = React.useState([]);
  const [attendees, setAttendees] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [fetching, setFetching] = React.useState(false);
  const [user, setUser] = useState<any>(null)

  React.useEffect(() => {
    getCurrentUser().then(user => {
      setUser(cloneDeep(user))
    })
  }, []);

  React.useEffect(() => {
    if (user) {
      getPosts();
    }
  }, [user]);

  const postComment = async (text, postId) => {
    setFetching(true);
    const {id: authorId} = user
    const input = {
      text, postId, authorId
    }
    await createNewPost(input, true)
    setTimeout(getPosts, 1000)
  }

  const likeUnlikePost = async (postId, liked) => {
    setFetching(true);
    const {id: authorId} = user
    const input = {
      postId, authorId
    }
    await likeUnlikePostReq(input, liked)
    setTimeout(getPosts, 300)
  }

  const deletePost = async (index, postId) => {
    if(index) {
      setFetching(true);
      await deletePostReq(postId)
      setTimeout(getPosts, 300)
    }
  }

  const getPosts = async () => {
    try {
      const livefeed = await fetchLiveFeedList(eventId);
      if (livefeed && user) {
        const {id: userId} = user
        const {id, posts} = livefeed
        let newPost: any[] = []
        for (const post of posts) {
          const {authorId, comments = [], postLikes = []} = post
          let newComments: any[] = []
          const attendee = await fetchAttendeeData(authorId)
          setAttendees({...attendees, [attendee.id]: attendee})
          for (const comment of comments) {
            const {authorId: id} = comment
            if (attendee[id]) {
              newComments.push({...comment, attendee: attendee[id]})
            } else {
              const attendee = await fetchAttendeeData(id)
              setAttendees({...attendees, [attendee.id]: attendee})
              newComments.push({...comment, attendee})
            }
          }
          const owner = (userId === authorId)
          const liked = (postLikes.findIndex(item => item.authorId === userId) !== -1)
          newComments = newComments.sort((a: any, b: any) => b.createDate > a.createDate ? 1 : -1)
          newPost.push({...post, liked, owner, comments: newComments, attendee})
        }
        newPost = newPost.sort((a: any, b: any) => b.createDate > a.createDate ? 1 : -1)
        setPosts(cloneDeep(newPost));
        setLoading(false);
        setFetching(false);
        setFeedId(id);
      } else {
        setLoading(false);
        setFetching(false);
      }
    } catch (error) {
      console.warn('posts fetching error');
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{flex: 1}}>
    <Posts
      posts={posts}
      feedId={feedId}
      loading={loading}
      loadPosts={getPosts}
      navigation={navigation}
      deletePost={deletePost}
      sendComment={postComment}
      likeUnlikePost={likeUnlikePost}
    />
    <ProgressModal show={fetching} />
    </KeyboardAvoidingView>
  );
}

export default index;
