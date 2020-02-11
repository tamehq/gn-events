import React from 'react';
import Styled from 'styled-components/native';

const HeadingText = Styled.Text`
  color: ${props => props.theme.color.blackText};
  font-size: 25px;
  font-family: ${props => props.theme.fontFamilies.extraBoldFont};
  font-weight: 800;
  text-align: center;
`;

interface HeadingInterface {
  style?: object;
  text: string;
}

const Heading = ({ style, text }: HeadingInterface) => {
  return <HeadingText style={style}>{text}</HeadingText>;
};

export default Heading;
