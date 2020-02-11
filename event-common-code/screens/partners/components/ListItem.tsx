import React from 'react';
import Arrow from '../../../../src/assets/images/speakers/Arrow.png';
import {capitalize} from 'lodash';
import {
  Container,
  SubContainer,
  Image,
  ArrowImage,
  DescriptionContainer,
  FirstLetter,
  NoAvatar,
  Name,
} from './StyledComponents';

const ListView = (props: any) => {
  const {attendee, navigation, data, index, section} = props;
  const {company = {}} = attendee;
  const {title, imageUri} = company;

  const [firstLetter, setFirstLetter] = React.useState('');

  React.useEffect(() => {
    if (title) {
      getFirstLetter(title);
    }
  }, []);

  const openDrawer = () => {
    try {
      const activeSection = data.find(partners => partners.title === section);
      navigation.push('PartnersDrawer', {
        title: activeSection.title,
        data: activeSection.data,
        index,
      });
    } catch (error) {
      console.log('list item error', error);
    }
  };

  const getFirstLetter = (name: string) =>
    setFirstLetter(name.charAt(0).toUpperCase());

  return (
    <Container onPress={openDrawer}>
      <SubContainer>
        {!!imageUri ? (
          <Image source={{uri: imageUri}} />
        ) : (
          <NoAvatar>
            <FirstLetter>{firstLetter}</FirstLetter>
          </NoAvatar>
        )}
        <DescriptionContainer>
          <Name numberOfLines={1}>{capitalize(title)}</Name>
        </DescriptionContainer>
        <ArrowImage source={Arrow} resizeMode={'contain'} />
      </SubContainer>
    </Container>
  );
};

export default ListView;
