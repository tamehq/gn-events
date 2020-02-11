import React from 'react';
import {FlatList, Modal} from 'react-native';
import FilterHeader from '../components/Header';
import Styled from 'styled-components/native';
import Button from '../../../components/Button';

const FilterContainer = Styled.View`
  flex: 1;
  background-color: ${props => props.theme.color.screenBg};
`;

const FilterWrapper = Styled.View`
  padding: 30px;
  flex-grow: 1;
  justify-content: space-between;
`;

const Filters = Styled.View`
`;

const FilterHeading = Styled.Text`
  color: ${props => props.theme.color.charcoal};
  font-size: 20px;
  font-family: ${props => props.theme.fontFamilies.extraBoldFont};
  font-weight: 800;
  text-align: center;
`;

const FilterButton = Styled.TouchableOpacity`
  background: ${(props) => props.active ? props.theme.color.primary : 'white'};
  border-radius: 10px;
  margin-top: 10px;
`;

const FilterName = Styled.Text`
  color: ${(props) => props.active ? 'white' : props.theme.color.primary}
  font-size: 15px;
  font-family: ${props => props.theme.fontFamilies.latoRegular};
  font-weight: normal;
  text-align: center;
  padding: 8px 0px 10px 0px;
`;

interface FilterInterface {
  modalVisible: boolean;
  closeModal: () => void;
}

function FilterComponent(props: FilterInterface) {
  const {modalVisible, closeModal} = props;
  const data = [{name: 'Canteen', active: false}, {name: 'Event room', active: false}, {name: 'D13 + D14', active: false}]
  return(
    <Modal
      visible={modalVisible}
      onRequestClose={closeModal}
      onDismiss={closeModal}
      animated
      animationType={'slide'}>
      <FilterContainer>
        <FilterHeader title={'Filter'} leftPress={closeModal} />
        <FilterWrapper>
          <Filters>
            <FilterHeading>Filter by session tag</FilterHeading>
            <FilterButton active={true} style={{marginTop: 40}}>
              <FilterName active={true} >All</FilterName>
            </FilterButton>
            <FlatList
              data={data}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}) => (
                <FilterButton>
                  <FilterName>{item.name}</FilterName>
                </FilterButton>
              )}
            />
          </Filters>
          <Button label={'Apply filter'} onPress={closeModal} />
        </FilterWrapper>
      </FilterContainer>
    </Modal>
  );
}

export default FilterComponent;
