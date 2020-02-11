import React from 'react';
import Styled from 'styled-components/native';

const Avatar = Styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

interface AvatarInterface {
  source: File;
}

const AvatarComponent = (props: AvatarInterface) => {
  const {source} = props;
  return <Avatar source={source} resizeMode={'contain'} />;
};

export default AvatarComponent;
