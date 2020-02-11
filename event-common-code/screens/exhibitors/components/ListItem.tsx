import React from 'react';
import {capitalize} from 'lodash';
import {
  Container,
  SubContainer,
  Image,
  DescriptionContainer,
  FirstLetter,
  NoAvatar,
  Name,
} from './StyledComponents';
import VectorIcon from "../../../components/VectorIcon";

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
      navigation.push('ExhibitorsDrawer', {data: activeSection.data, index});
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
        <VectorIcon name="arrow" size={15}/>
      </SubContainer>
    </Container>
  );
};

export default ListView;
