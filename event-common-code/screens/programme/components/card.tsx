import React from 'react';
import {Card} from 'native-base';
import gql from 'graphql-tag';
import {useMutation} from '@apollo/react-hooks';
import {FlatList} from 'react-native';
import Attendee from './Attendee';
import Styled from 'styled-components/native';
import moment from 'moment';
import {keyBy} from 'lodash';
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
  timeZone: string;
  finish: string;
  title: string;
  attendes: ReadonlyArray<AttendeInterface> | null;
  push?: any;
  activeDay: string;
  index: number;
  allRooms: [];
  rooms: [] | string;
  checked: boolean;
  removeId: string;
  getParam: any;
  color: string;
  colors: any[];
}

const CardPress = Styled.TouchableOpacity``;

const Program = Styled(Card)`
  width: 100%;
  border-left-width: 2;
  border-bottom-width: 0px;
  border-top-width: 0px;
  border-right-width: 0px;
  elevation: 3px;
  border-color: ${props => (props.color ? props.color : '#ffffff')};
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
  opacity: 0.31;
`;

const StageView = Styled.View`
  padding: 10px 0px 0px 0px;
  align-items: center;
  flex-direction: row;
`;

const StageName = Styled.Text`
  color: ${props => props.theme.color.cardGray};
  font-size: 13px;
  font-family: ${props => props.theme.fontFamilies.latoRegular};
  font-weight: normal;
  margin-left: 5px;
`;

const ADD_FAV_CARD = gql`
  mutation createProgrammeSessionFavourite(
    $input: CreateProgrammeSessionFavouriteInput
  ) {
    createProgrammeSessionFavourite(input: $input) {
      id
      attendeeId
      eventId
      programmeSessionId
    }
  }
`;

const DELETE_FAV_CARD = gql`
  mutation deleteFavProgramme($input: DeleteProgrammeSessionFavouriteInput) {
    deleteProgrammeSessionFavourite(input: $input) {
      programmeSessionId
    }
  }
`;

const CardComponent = (props: CardProps) => {
  const [fav, setFav] = React.useState(props.checked);
  const [activeEvent] = React.useState(props.getParam('activeEvent', ''));
  const {
    _id,
    _key,
    description,
    finish,
    push,
    timeZone,
    attendes,
    title,
    start,
    index,
    allRooms,
    rooms,
    activeDay,
    removeId,
    refetch,
    color,
    colors,
  } = props;
  const [remove, setRemoveID] = React.useState(props.removeId);
  const startTime = moment(start).utc().add(timeZone, 'minutes').format('HH:mm');
  const finishTime = moment(finish).utc().add(timeZone, 'minutes').format('HH:mm');
  const [addFav, {data}] = useMutation(ADD_FAV_CARD);
  const [removeFav, {data: removeData}] = useMutation(DELETE_FAV_CARD);

  React.useEffect(() => {
    if (data) {
      setRemoveID(data.createProgrammeSessionFavourite.id);
    }
  }, [data]);

  React.useEffect(() => {
    setFav(props.checked);
    setRemoveID(props.removeId);
  }, [props]);

  async function handleHeartTouch() {
    if (fav) {
      try {
        removeFav({
          variables: {
            input: {
              attendeeFavouriteProgrammeSessionId: remove,
            },
          },
        })
          .then(() => {
            setFav(!fav);
            refetch();
          })
          .catch(error => {
            console.warn('gql error in ', JSON.stringify(error));
          });
      } catch (error) {
        console.warn('card removing erorr programme card', error);
      }
    } else {
      try {
        addFav({
          variables: {
            input: {
              programmeSessionId: _id,
              eventId: activeEvent,
            },
          },
        });
        setFav(!fav);
      } catch (error) {
        console.warn('card saving erorr');
      }
    }
  }

  function handleCardPress() {
    push('ProgrammeDrawer', {
      activeDay: props.activeDay,
      activeIndex: index,
      activeEvent: activeEvent,
    });
  }

  let room;
  const roomList = keyBy(allRooms, ({_id}) => _id);

  if (typeof rooms == 'string') {
    room = roomList[rooms].title;
  }
  const currentColor = colors.find(colour => colour._id === color);

  return (
    <Program color={currentColor !== undefined ? currentColor.primary : false}>
      <Wrapper>
        <Header>
          <TopView>
            <TimeView>
              <Time>{startTime}</Time>
              <Time>-</Time>
              <Time>{finishTime}</Time>
            </TimeView>
            <HeartTouch onPress={handleHeartTouch}>
              <VectorIcon name={fav ? 'like' : 'heart'} size={20} />
            </HeartTouch>
          </TopView>
          <CardPress onPress={handleCardPress}>
            <Title>{title}</Title>
          </CardPress>
        </Header>
        {attendes && (
          <FlatList
            horizontal
            data={attendes}
            keyExtractor={(_item: AttendeInterface, index: number) =>
              index.toString()
            }
            renderItem={({item}) => <Attendee {...item} />}
          />
        )}
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
