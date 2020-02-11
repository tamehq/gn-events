import React from 'react';
import Styled from 'styled-components/native';
import FeatureList from '../components/features';
import _ from 'lodash';
import moment from 'moment';
import VectorIcon from "../../../components/VectorIcon";

const Container = Styled.View`
  flex: 1;
`;

const SubContainer = Styled.View`
  padding: 30px;
`;

const TimeView = Styled.View`
  flex-direction: row;
`;

const Time = Styled.Text`
  color: ${props => props.theme.color.separator};
  font-size: 15px;
  font-family: ${props => props.theme.fontFamilies.boldFont};
  font-weight: bold;
  margin-right: 5px;
`;

const Heading = Styled.Text`
  color: ${props => props.theme.color.charcoal};
  font-size: 25px;
  font-family: ${props => props.theme.fontFamilies.extraBoldFont};
  font-weight: 800;
  margin-top: 15px;
  line-height: 25px;
`;

const Seprator = Styled.View`
  width: 100%;
  height: 1px;
  background-color: ${props => props.theme.color.separator};
  margin-top: 15px;
  opacity: 0.31;
`;

const LocationView = Styled.View`
  flex-direction: row;
  margin-top: 20px;
  align-items: center;
`;

const Pin = Styled.Image`
  width: 20px;
  height: 20px;
`;

const StageName = Styled.Text`
  color: ${props => props.theme.color.charcoal};
  font-size: 15px;
  font-family: ${props => props.theme.fontFamilies.boldFont};
  font-weight: bold;
  margin-left: 5px;
`;

const Description = Styled.Text`
  color: ${props => props.theme.color.blackText};
  font-size: 15px;
  font-family: ${props => props.theme.fontFamilies.latoLight};
  font-weight: 300;
  margin-top: 15px;
`;

interface DrawerContentInteface {
  description: string;
  finish: string;
  start: string;
  rooms: [] | string;
  allRooms: [];
  speakers: [];
  title: string;
  _id: string;
  _key: string;
  timeZone: string;
  tags: any[];
}

function DrawerContent(props: DrawerContentInteface) {
  const {
    title,
    start,
    finish,
    rooms,
    allRooms,
    _id,
    timeZone,
    description,
    tags,
    _key,
  } = props;
  const startTime = moment(start).utc().add(timeZone, 'minutes').format('HH:mm');
  const endTime = moment(finish).utc().add(timeZone, 'minutes').format('HH:mm');

  const [activeTags, setActiveTags] = React.useState<any[]>([]);

  React.useEffect(() => {
    filterTags(tags);
  }, [tags, _key]);

  function filterTags(tags) {
    try {
      const currentTags = tags.filter(tag => tag.resourceId === _key);
      setActiveTags(currentTags);
    } catch (error) {
      console.log('error in drawer content while filtering tags');
    }
  }

  let room;
  const roomList = _.keyBy(allRooms, ({_id}) => _id);
  if (typeof rooms == 'string') {
    room = roomList[rooms].title;
  }

  return (
    <Container>
      <SubContainer>
        <TimeView>
          <Time>{startTime}</Time>
          <Time>-</Time>
          <Time>{endTime}</Time>
        </TimeView>
        <Heading>{title}</Heading>
        <Seprator />
        {room && (
          <LocationView>
            <VectorIcon name='venuePin' size={20}/>
            <StageName>{room}</StageName>
          </LocationView>
        )}
        {activeTags.length > 0 && <FeatureList features={activeTags} />}
        {activeTags.length > 0 && <Seprator />}

        <Description>{description}</Description>
      </SubContainer>
    </Container>
  );
}

export default DrawerContent;
