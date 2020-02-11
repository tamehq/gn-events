import React from 'react';
import Styled from 'styled-components/native';
import Search from '../.../../../../assets/images/speakers/search.png';

const Container = Styled.View`
  background-color: #ffffff;
  flex-direction: row;
  border-radius: 5px;
  margin: 15px 30px 15px 30px;
  align-items: center;
`;

const SearchIcon = Styled.Image`
  width: 20px;
  height: 20px;
  margin-left: 15px;
`;

const Input = Styled.TextInput`
  margin-left: 10px;
  color: ${props => props.theme.color.lightGray};
  font-family: ${props => props.theme.fontFamilies.latoLight};
  font-weight: 300;
  width: 100%;
  min-height: 40px;
  font-size: 15px;
  line-height: 18px;
`;

function SearchBar({value, onChangeText}) {
  return (
    <Container>
      <SearchIcon source={Search} resizeMode={'contain'} />
      <Input
        placeholder={'Search'}
        value={value}
        onChangeText={text => onChangeText(text)}
      />
    </Container>
  );
}

export default SearchBar;
