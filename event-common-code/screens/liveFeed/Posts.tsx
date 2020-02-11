import React from 'react';
import {ActivityIndicator} from 'react-native';
import Header from '../../components/Header';
import PostItem from './components/PostItem';
import ButtonComponent from "../../components/Button";
import {
  Container, SubContainer, ButtonContainer, Headline, LoadingContainer, PostsList, Subheader
} from './StyledComponents'
import {ThemeContext} from "../../../App";

interface PostsInterface {
  posts: any[];
  feedId: string;
  navigation: any;
  loading: boolean;
  loadPosts: () => void;
  deletePost: (a: number, b: string) => void;
  sendComment: (a: string, b: string) => void;
  likeUnlikePost: (a: string, b: boolean) => void;
}

const Posts = (props: PostsInterface) => {
  const theme = React.useContext(ThemeContext)
  const {navigation, loadPosts, feedId, sendComment, likeUnlikePost, deletePost} = props;
  const [posts, setPosts] = React.useState<any[]>([]);
  const [isFetching, setIsFetching] = React.useState<boolean>(false);

  React.useEffect(() => {
    setPosts(props.posts);
    setIsFetching(false)
  }, [props.posts]);

  const onRefresh = () => {
    setIsFetching(true)
    loadPosts()
  }
  const addNewPost = () => {
    setTimeout(loadPosts, 2000)
  }

  const openDrawer = () =>
      navigation.push('WriteNewPost', {addNewPost, feedId});

  return (
    <Container>
      <Header drawer navigation={navigation} title='Live Feed' backArrow={false} />
      <SubContainer>
      {props.loading ?
          <LoadingContainer>
            <ActivityIndicator size="large" color={theme.color.primary}/>
          </LoadingContainer>
          :
        <SubContainer>
            <ButtonContainer>
              <ButtonComponent onPress={openDrawer} label='Write a post'/>
            </ButtonContainer>
                      <PostsList
                          data={posts}
                          extraData={posts}
                          onRefresh={onRefresh}
                          refreshing={isFetching}
                          keyExtractor={(_item, index) => _item.id || index.toString()}
                          ListEmptyComponent={() => (
                            <Container style={{flex: 1, justifyContent: 'center', padding: 20, minHeight: 300}}>
                              <Headline>Live Feed is empty</Headline>
                              <Subheader>Be the first to write a post!</Subheader>
                            </Container>
                          )}
                          renderItem={({item, index}) => (
                              <PostItem
                                  item={item}
                                  index={index}
                                  navigation={navigation}
                                  deletePost={deletePost}
                                  sendComment={sendComment}
                                  likeUnlikePost={likeUnlikePost}
                              />
                          )}
                      />
        </SubContainer>
      }
      </SubContainer>
    </Container>
  );
};

export default Posts;

