import React from 'react';
import Styled from 'styled-components/native';
import {ThemeContext} from "../../../../App";

const Container = Styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : '#0d2a43'};
  padding: 17px;
  border-radius: 7px;
`;

const Description = Styled.Text`
  color: ${props => (props.color ? props.color : 'rgb(249, 249, 249)')};
  font-size: 17px;
  font-family: ${props => props.theme.fontFamilies.latoBold};
  font-weight: bold;
  text-align: center;
`;

interface ButtonInterface {
  onSubmit: () => void;
  submitted?: boolean;
  label?: string;
}

function ButtonComponent(props: ButtonInterface) {
  const theme = React.useContext(ThemeContext)
  const {onSubmit, submitted, label = 'Submit answer'} = props;
  return (
    <>
      {!submitted && (
        <Container onPress={onSubmit}>
          <Description>{label}</Description>
        </Container>
      )}
      {submitted && (
        <Container backgroundColor={theme.color.screenBg} onPress={onSubmit}>
          <Description color={'rgb(13, 42, 67)'}>Edit response</Description>
        </Container>
      )}
    </>
  );
}

export default ButtonComponent;
