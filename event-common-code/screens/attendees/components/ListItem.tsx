import React from 'react';
import {capitalize} from "lodash";
import {
  Container, SubContainer, Image, DescriptionContainer, Designation, FirstLetter, NoAvatar, Name
} from './StyledComponents'
import VectorIcon from "../../../components/VectorIcon";


const ListView = (props: any) => {
  const {attendee, navigation, fromChat} = props;
  const [firstLetter, setFirstLetter] = React.useState('');
  const {name = {}, employment = {}, imageUri = ''} = attendee || {}
  const { first = '', last = '' } = name || {}
  const { position = '', company = '' } = employment || {};

  React.useEffect(() => {
    if (first) {
      getFirstLetter(first);
    }
  }, []);

  const openDrawer = () => {
    if (fromChat) {
      navigation.replace('ChatScreen', { attendee } );
    } else {
      navigation.push('AttendeeProfile', { attendee });
    }
  }

  const getFirstLetter = (name: string) =>
    setFirstLetter(name.charAt(0).toUpperCase());

  const concatStr = (a, b) => a ? `${capitalize(a)}${b ? ', ' + capitalize(b) : '' }` : '';

    return (
    <Container onPress={openDrawer}>
          <SubContainer>
            {!!(imageUri) ?
                <Image source={{uri: imageUri}}/>
            : <NoAvatar>
                <FirstLetter>{firstLetter}</FirstLetter>
              </NoAvatar>
            }
              <DescriptionContainer>
                  <Name numberOfLines={1}>{capitalize(first)} {capitalize(last)}</Name>
                  <Designation numberOfLines={1}>
                      {concatStr(position, company)}
                  </Designation>
              </DescriptionContainer>
            <VectorIcon name='carditem_Arrow' size={20}/>
          </SubContainer>
    </Container>
  );
};

export default ListView;
