import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import VectorIcon from "../../../components/VectorIcon";
import {
    Container, Description, ActionsContainer, FirstLetter, Hr, Image, InnerContainer, LikeText, Name,
    NoAvatar, RightText, SubContainer, TimeStamp, TitleContainer, TouchIcon
} from './StyledComponents'
import {capitalize} from "lodash";
import PostComments from "./PostComments";
import {getDisplayDate} from "../../../helpers/utils";
import ActionComponent from "../../../components/ActionSheet";
import FastImage from 'react-native-fast-image'
import CardCover from "../../../components/CardCover";
import {ThemeContext} from "../../../../App";

const PostItem = (props: any) => {
  const theme = React.useContext(ThemeContext)
  const [comment, setComment] = useState()
  const [openSheet, setOpenSheet] = useState()
  const [focusInput, setFocusInput] = useState(false)
  const {item, sendComment, likeUnlikePost, deletePost} = props;
  const {id, owner, attendee, imageUrls, body, createDate, liked, comments = [], postLikes = 0} = item
  const {name, employment} = attendee
  const {position, company} = employment
  const [firstLetter, setFirstLetter] = React.useState('');

  React.useEffect(() => {
    if (name) {
      if (name.first) getFirstLetter(name.first);
    }
  }, []);

  const getFirstLetter = (name: string) =>
    setFirstLetter(name.charAt(0).toUpperCase());

  const concatStr = (a, b) => a ? `${capitalize(a)}${b ? ', ' + capitalize(b) : '' }` : '';

  // @ts-ignore
    return (
    <Container activeOpacity={1} onPress={() => {}}>
          <SubContainer>
            {attendee.imageUri ?
              <Image source={{uri: attendee.imageUri, cache: 'force-cache'}}/>
            :<NoAvatar><FirstLetter>{firstLetter}</FirstLetter></NoAvatar>
            }
            <TitleContainer>
              <InnerContainer>
                <Name>{capitalize(name.first)} {capitalize(name.last)}</Name>
                {owner && <TouchIcon onPress={() => setOpenSheet(true)}>
                  <VectorIcon size={20} name='Options' color={theme.color.grayText} />
                </TouchIcon>}
              </InnerContainer>
              <InnerContainer>
                <TimeStamp>{concatStr(position, company)}</TimeStamp>
                <TimeStamp>{getDisplayDate(createDate)}</TimeStamp>
              </InnerContainer>
            </TitleContainer>
          </SubContainer>
      {(!!body) && <SubContainer>
        <Description parse={[{pattern: /#(\w+)/, style: styles.hashTags}]}
        >{body}</Description>
      </SubContainer>}
      {!!imageUrls &&
      <CardCover>
          <FastImage
              style={{ height: 270 }}
              source={{
                uri: imageUrls,
                priority: FastImage.priority.high
              }}
              resizeMode={FastImage.resizeMode.cover}
          />
      </CardCover>
      }
      <ActionsContainer>
        <TouchIcon style={{ width: 65 }} activeOpacity={0.8} onPress={() => likeUnlikePost(id, liked)}>
          <VectorIcon size={20} name='Like' color={liked ? 'red' : theme.color.feedIcon} />
          <LikeText>{liked ? 'Liked' : 'Like'}</LikeText>
        </TouchIcon>
        <TouchIcon activeOpacity={0.8} onPress={() => setFocusInput(true)}>
          <VectorIcon size={20} name='Comment' color={theme.color.feedIcon} />
          <LikeText>Comment</LikeText>
        </TouchIcon>
        <RightText>
          {`${postLikes.length} like${postLikes.length === 1 ? '' : 's'}, ${comments.length} comment${comments.length === 1 ? '' : 's'}`}
        </RightText>
      </ActionsContainer>
      <Hr />
      <PostComments
        comment={comment}
        comments={comments}
        focusInput={focusInput}
        setComment={setComment}
        sendComment={() => {
          sendComment(comment, id)
          setComment('')
        }}
      />
      <ActionComponent
        remove
        openSheet={openSheet}
        onHide={() => setOpenSheet(false)}
        onSelectImage={(index) => deletePost(index, id)}
      />
    </Container>
  );
};

export default PostItem;
const styles = StyleSheet.create({
  hashTags: {
    color: 'blue'
  }
})
