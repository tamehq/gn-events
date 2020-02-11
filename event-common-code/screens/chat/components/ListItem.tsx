import React from 'react';
import {capitalize} from "lodash";
import {
  Container, SubContainer, Image, DescriptionContainer, Designation, FirstLetter, NoAvatar,
  RaisedImage, Name, InnerContainer, MessageTime, Dot
} from './StyledComponents'
import moment from "moment";
import VectorIcon from "../../../components/VectorIcon";

const ListView = (props: any) => {
  const {attendee, navigation} = props;
  const [firstLetter, setFirstLetter] = React.useState('');
  const {name = {}, imageUri = '', messages = []} = attendee || {}
  const { first = '', last = '' } = name || {}

  React.useEffect(() => {
    if (first) {
      getFirstLetter(first);
    }
  }, []);

  const openDrawer = () =>
    navigation.push('ChatScreen', { attendee });

  const getFirstLetter = (name: string) =>
    setFirstLetter(name.charAt(0).toUpperCase());

    return (
    <Container onPress={openDrawer}>
          <SubContainer>
            {!!(imageUri) ?
              <RaisedImage>
                <Image source={{uri: imageUri || null}}/>
              </RaisedImage>
            : <NoAvatar>
                <FirstLetter>{firstLetter}</FirstLetter>
              </NoAvatar>
            }
              <DescriptionContainer>
                  <Name numberOfLines={1}>{capitalize(first)} {capitalize(last)}</Name>
                  <InnerContainer>
                  <Designation ellipsizeMod='tail' numberOfLines={1}>{capitalize(messages[0].text)}</Designation>
                   <Dot />
                  <MessageTime numberOfLines={1}>{moment(messages[0].date).format('hh:mm')}</MessageTime>
                  </InnerContainer>
              </DescriptionContainer>
            <VectorIcon name='carditem_Arrow' size={20}/>
          </SubContainer>
    </Container>
  );
};

export default ListView;
