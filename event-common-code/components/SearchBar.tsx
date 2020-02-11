import React from 'react';
import Styled from 'styled-components/native';
import VectorIcon from "../components/VectorIcon";
import Icon from "react-native-vector-icons/Ionicons";
import {Platform} from "react-native";

const Container = Styled.View`
  background-color: #ffffff;
  flex-direction: row;
  border-radius: 5px;
  margin: 15px 30px 0 30px;
  align-items: center;
  padding: 0 10px
`;

const Input = Styled.TextInput`
  flex: 1;
  margin-left: 10px;
  color: ${props => props.theme.color.lightGray};
  font-family: ${props => props.theme.fontFamilies.latoLight};
  font-weight: 300;
  min-height: 40px;
  font-size: 15px;
  line-height: 18px;
`;

function SearchBar({value, onChangeText}) {
  let inputRef = null
  return (
    <Container>
      <VectorIcon name='search' size={20} />
      <Input
        value={value}
        placeholder={'Search'}
        ref={ref => inputRef = ref}
        clearButtonMode='while-editing'
        onChangeText={text => onChangeText(text)}
      />
        {!!value && value.length && (Platform.OS === 'android') &&
            <Icon
            onPress={() => {
                if (inputRef) {
                    // @ts-ignore
                    inputRef.clear();
                    onChangeText('')
                }
            }}
            name='md-close-circle' size={18} color='rgb(204,204, 204)' />}
    </Container>
  );
}

export default SearchBar;
