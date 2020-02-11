import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View`
  width: 100%;
`;

const Label = Styled.Text`
  font-family: ${props => props.theme.fontFamilies.latoRegular};
  color: rgb(166, 166, 166);
  font-size: 14px;
`;

const Input = Styled.TextInput`
  border-bottom-width: 2px;
  border-bottom-color: rgb(217, 217, 217);
  color: ${props => props.theme.color.charcoal};
  font-size: 15px;
  font-family: ${props => props.theme.fontFamilies.latoRegular};
  font-weight: normal;
  height: 25px;
  padding: 0;
  margin: 0;
`;

interface Login {
  placeholder: string;
  style?: object;
  password?: boolean;
  value: string;
  onChangeText: any;
  keyboardType?: string;
  autoCapitalize?: string;
}

const InputTextComponent = (props: Login) => {
  const {placeholder = 'Default', style, password, value, onChangeText, keyboardType, autoCapitalize} = props;
  return (
    <Container style={style}>
      <Label>{placeholder}</Label>
      <Input
        secureTextEntry={password}
        value={value}
        onChangeText={text => onChangeText && onChangeText(text)}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
      />
    </Container>
  );
};

export default InputTextComponent;
