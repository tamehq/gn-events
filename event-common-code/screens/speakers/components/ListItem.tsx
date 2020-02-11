import React from 'react';
import Styled from 'styled-components/native';
import {ListProps} from '../Speakers';
import VectorIcon from "../../../components/VectorIcon";

const Container = Styled.TouchableOpacity`
  margin-bottom: 15px;
  margin-right: 30px;
`;

const InnerContainer = Styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const SubContainer = Styled.View`
  flex-direction: row;
`;

const RaisedImage = Styled.View`
  margin-left: 30px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 5px;
  elevation: 4;
`;

const Image = Styled.Image`
  width: 85px;
  height: 85px;
`;

const DescriptionContainer = Styled.View`
  margin-top: 4px;
  margin-left: 15px;
  flex-shrink: 1;
`;

const Name = Styled.Text`
  color: ${props => props.theme.color.blackText};
  font-size: 22px;
  font-family: ${props => props.theme.fontFamilies.boldFont};
  font-weight: bold;
  line-height: 22px;
  width: 200px;
`;

const Designation = Styled.Text`
  color: ${props => props.theme.color.lightGray};
  font-size: 15px;
  font-family: ${props => props.theme.fontFamilies.regularFont};
  font-weight: bold;
  line-height: 15px;
  width: 200px;
`;

const NoAvatar = Styled.View`
  width: 85px;
  height: 85px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  margin-left: 30px;
`;

const FirstLetter = Styled.Text`
  color: ${props => props.theme.color.blackText};
  font-size: 30px;
  font-family: ${props => props.theme.fontFamilies.boldFont};
  font-weight: bold;
  text-align: center;
`;

const ListView = (props: ListProps) => {
  const {person, navigation, index, data, timeZone} = props;
  const [firstLetter, setFirstLetter] = React.useState('');

  React.useEffect(() => {
    if (person.name) {
      if (person.name.first) getFirstLetter(person.name.first);
    }
  }, []);

  const openDrawer = () =>
    navigation.push('SpeakersDrawer', {
      index: index,
      data: data,
      timeZone: timeZone,
    });

  const getFirstLetter = (name: string) =>
    setFirstLetter(name.charAt(0).toUpperCase());
  return (
    <Container onPress={openDrawer}>
      {person && (
        <InnerContainer>
          <SubContainer>
            {person.images && (
              <RaisedImage>
                <Image
                  source={{uri: person.images.profile}}
                  borderRadius={10}
                />
              </RaisedImage>
            )}
            {!person.images && (
              <NoAvatar>
                <FirstLetter>{firstLetter}</FirstLetter>
              </NoAvatar>
            )}
            {person.name && (
              <DescriptionContainer>
                {person.name.first.length > 0 && (
                  <Name numberOfLines={1}>{person.name.first}</Name>
                )}
                {person.name.last.length > 0 && (
                  <Name numberOfLines={1}>{person.name.last}</Name>
                )}
                {person.employment && (
                  <>
                    {person.employment.position !== undefined &&
                      person.employment.position.length > 0 && (
                        <Designation numberOfLines={1}>
                          {person.employment.position}
                        </Designation>
                      )}

                    {person.employment.company !== undefined && (
                      <Designation numberOfLines={1}>
                        {person.employment.company}
                      </Designation>
                    )}
                  </>
                )}
              </DescriptionContainer>
            )}
          </SubContainer>
          <VectorIcon name='carditem_Arrow' size={20}/>
        </InnerContainer>
      )}
    </Container>
  );
};

export default ListView;
