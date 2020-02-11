import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import {
    SendButton, CommentInput, Container, Description, FirstLetter, Image, InnerContainer, Name,
    NoAvatar, SubContainer, TimeStamp, TitleContainer
} from './StyledComponents'
import {getDisplayDate} from "../../../helpers/utils";
import {capitalize} from "lodash";

interface Props {
  comment: string;
  focusInput: boolean;
  comments: any[];
  setComment: (x: string) => void;
  sendComment: () => void;
}
const PostComments = ({
   comments = [], comment = '', setComment, focusInput, sendComment
}: Props) => {
  let input;
  const getFirstLetter = (name: string) => name.charAt(0).toUpperCase();

  useEffect(() => {
    if (focusInput) {
      input && input.focus()
    }
  }, [focusInput])
  return (
    <Container activeOpacity={1} onPress={() => {}}>
      {comments.map((comment) => {
        const {attendee, text, createDate } = comment
        const {name, imageUri} = attendee
        return (
          <SubContainer key={text} align='flex-start'>
            {imageUri ?
              <Image source={{uri: imageUri}}/>
              :<NoAvatar><FirstLetter>{getFirstLetter(name.first)}</FirstLetter></NoAvatar>
            }
            <TitleContainer>
              <InnerContainer>
                <Name size='14px'>{capitalize(name.first)} {capitalize(name.last)}</Name>
                <TimeStamp>{getDisplayDate(createDate)}</TimeStamp>
              </InnerContainer>
              <Description parse={[{pattern: /#(\w+)/, style: styles.hashTags}]}
              >{text}</Description>
            </TitleContainer>
          </SubContainer>
        )}
      )}
      <SubContainer>
        <CommentInput
            value={comment}
            ref={ref => input = ref}
            onChangeText={setComment} multiline placeholder='Write a comment' />
          {!!comment &&
          <SendButton onPress={sendComment} acticeOpacity={0.9}>
              <MaterialIcon size={20} name='arrow-upward' color={'white'} />
          </SendButton>}
      </SubContainer>
    </Container>
  );
};
export default PostComments;
const styles = StyleSheet.create({
  hashTags: {
    color: 'blue'
  }
})
