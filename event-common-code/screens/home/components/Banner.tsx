import React from 'react';
import Styled from 'styled-components/native';
import CHDEPL from '../../../assets/images/event_banner/CHDEPL.png';
import CZ from '../../../assets/images/event_banner/CZ.png';
import PH from '../../../assets/images/event_banner/PH.png';
import US from '../../../assets/images/event_banner/US.png';
import DK from '../../../assets/images/home/event_banner.png';

const Banner = Styled.Image`
  width: 100%;
  height: 100px;
`;

function BannerComponent({activeEvent}) {
  const events = [
    {eventId: '98729393', banner: DK},
    {eventId: '104687865', banner: CHDEPL},
    {eventId: '104690225', banner: PH},
    {eventId: '104686979', banner: US},
    {eventId: '104687458', banner: CZ},
  ];
  const currentBanner = events.find(banner => banner.eventId === activeEvent);
  return (
    <>
      {currentBanner && (
        <Banner source={currentBanner.banner} resizeMode={'contain'} />
      )}
    </>
  );
}

export default BannerComponent;
