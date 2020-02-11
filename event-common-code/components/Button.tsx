import React from 'react';
import Styled from 'styled-components/native';
import {Button} from 'native-base';
import VectorIcon from "./VectorIcon";

const Container = Styled.View<{marginTop: string}>`
  margin-top: ${props => (props.marginTop ? props.marginTop : 0)};
  width: 100%;
  align-items: center;
`;

const ButtonView = Styled(Button)<{color: string}>`
  background-color: ${props =>
    props.color ? props.color : props.theme.color.primary};
	justify-content: center;
  border-radius: 4px;
  width: 100%;
  min-width: 100%;
`;

const Text = Styled.Text<{color: string}>`
  font-size: 15px;
  font-family: ${props => props.theme.fontFamilies.latoBold};
  text-align: center;
	color: ${props => (props.color ? props.color : 'rgb(249, 249, 249)')};
`;

interface ButtonInterface {
  color?: string;
  label: string;
  labelColor?: string;
  onPress?: unknown;
  style?: object;
  icon?: string;
}

const ButtonComponent = (props: ButtonInterface) => {
  const {color, label, labelColor, onPress, style, icon} = props;
  return (
    <Container style={style}>
      <ButtonView color={color} onPress={onPress}>
        {icon && <VectorIcon name={icon} color='white' size={20} style={{ marginRight: 10 }} /> }
        <Text color={labelColor}>{label}</Text>
      </ButtonView>
    </Container>
  );
};

export default ButtonComponent;
