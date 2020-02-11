import React from 'react';
import {Card} from 'native-base';
import {FlatList} from 'react-native';
import Attendee from './Attendee';
import Styled from 'styled-components/native';
import moment from 'moment';
import _ from 'lodash';
import AsyncStorage from '@react-native-community/async-storage';
import VectorIcon from "../../../components/VectorIcon";

export interface AttendeInterface {
  avatar: File;
  name: string;
  designation: string;
}

interface CardProps {
  _id: string;
  _key: string;
  description: string;
  start: string;
  finish: string;
  title: string;
  attendes: ReadonlyArray<AttendeInterface> | null;
  push?: any;
  activeDay: string;
  index: number;
  allRooms: [];
  rooms: [] | string;
  refresh: () => void;
}

const CardPress = Styled.TouchableOpacity``;

const Program = Styled(Card)`
  width: 100%;
  border-left-width: 0;
  border-bottom-width: 0px;
  border-top-width: 0px;
  border-right-width: 0px;
  elevation: 3px;
`;

const Wrapper = Styled.View`
  padding: 15px;
`;

const Header = Styled.View`
  flex-grow: 1;
`;

const TopView = Styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
const TimeView = Styled.View`
  flex-direction: row;
`;

const Time = Styled.Text`
  color: ${props => props.theme.color.cardGray};
  font-size: 13px;
  font-family: ${props => props.theme.fontFamilies.latoRegular};
  font-weight: normal;
`;

const HeartTouch = Styled.TouchableOpacity``;

const Title = Styled.Text`
  color: ${props => props.theme.color.charcoal};
  font-size: 18px;
  font-family: ${props => props.theme.fontFamilies.boldFont};
  font-weight: bold;
`;

const Seprator = Styled.View`
  width: 100%;
  height: 1px;
  background-color: ${props => props.theme.color.borderLine};
  margin-top: 10px;
`;

const StageView = Styled.View`
  padding: 10px 0px 0px 0px;
  align-items: center;
  flex-direction: row;
`;

const Location = Styled.Image`
  width: 20px;
  height: 20px;
`;

const StageName = Styled.Text`
  color: ${props => props.theme.color.cardGray};
  font-size: 13px;
  font-family: ${props => props.theme.fontFamilies.latoRegular};
  font-weight: normal;
  margin-left: 5px;
`;

const CardComponent = (props: CardProps) => {
  const [fav, setFav] = React.useState(true);
  const {finish, push, attendes, title, start, index, allRooms, rooms, activeDay, refresh} = props;

  const startTime = moment(start).format('h:mm');
  const finishTime = moment(finish).format('h:mm');

  async function handleHeartTouch() {
    try {
      let favourites: any = [];
      favourites = await AsyncStorage.getItem('favCards');
      if (favourites !== null) {
        favourites = JSON.parse(favourites);
        if(favourites[activeDay]) {
          favourites[activeDay].splice(index, 1);
          console.log('removed', (favourites));
        }
        console.log('removed', (favourites));

        await AsyncStorage.setItem('favCards', JSON.stringify(favourites));
        await refresh();
      }
    } catch (error) {
      console.warn('card saving error')
    }
}

  function handleCardPress() {
    push('ProgrammeDrawer', {activeDay: props.activeDay, activeIndex: index});
  }

  let room;
  const roomList = _.keyBy(allRooms, ({ _id }) => _id);

  if(typeof(rooms) == 'string') {
    room = roomList[rooms].title;
  }

  return (
    <Program>
      <Wrapper>
        <Header>
          <TopView>
            <TimeView>
              <Time>{startTime}</Time>
              <Time>-</Time>
              <Time>{finishTime}</Time>
            </TimeView>
            <HeartTouch onPress={handleHeartTouch}>
              <VectorIcon name={fav ? 'like' : 'heart'} size={20}/>
            </HeartTouch>
          </TopView>
          <CardPress onPress={handleCardPress}>
            <Title>{title}</Title>
          </CardPress>
        </Header>
        {attendes && <FlatList
          horizontal
          data={attendes}
          keyExtractor={(_item: AttendeInterface, index: number) =>
            index.toString()
          }
          renderItem={({item}) => <Attendee {...item} />}
        />}
        {room && (
          <>
            <Seprator />
            <StageView>
              <VectorIcon name='venuePin' size={20}/>
              <StageName>{room}</StageName>
            </StageView>
          </>
        )}
      </Wrapper>
    </Program>
  );
};

export default CardComponent;
