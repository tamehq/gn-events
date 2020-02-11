import React from 'react';
import Styled from 'styled-components/native';
import FeatureList from '../components/features';
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
`;

const LocationView = Styled.View`
  flex-direction: row;
  margin-top: 20px;
  align-items: center;
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

function DrawerContent(props) {
  const {title, startTime, endTime} = props;

  return(
    <Container>
      <SubContainer>
      <TimeView>
        <Time>{startTime}</Time>
        <Time>-</Time>
        <Time>{endTime}</Time>
      </TimeView>
      <Heading>{title}</Heading>
      <Seprator />
      <LocationView>
        <VectorIcon name='venuePin' size={20}/>
        <StageName>{'Back Stage / Room'}</StageName>
      </LocationView>
      <FeatureList />
        <Seprator style={{marginTop: 15}} />
        <Description>Est ad id id anim non magna in nulla adipisicing. Ullamco ullamco Lorem do quis. Excepteur culpa labore et velit aliqua dolor irure. Elit qui est anim laborum. Quis ipsum mollit aute eu anim occaecat officia do et elit elit laborum excepteur amet. Do ullamco cillum Lorem nulla cupidatat ipsum excepteur commodo proident ea mollit tempor nostrud. Dolore incididunt commodo ipsum dolor sit aute. Tempor aute ad sunt occaecat quis aute et tempor in excepteur exercitation aliquip. </Description>
        {/* <Button label={'Add to My Programme'} style={{marginTop: 15}} icon={Heart} /> */}
      </SubContainer>
    </Container>
  );
}

export default DrawerContent;
