import React from 'react';
import {StyleSheet, Platform, Text} from 'react-native';
import Styled from 'styled-components/native';
import {Accordion} from 'native-base';
import VectorIcon from "../../../components/VectorIcon";

const HeaderContainer = Styled.View`
  background-color: rgb(255, 255, 255);
  padding: 15px;
  border-radius: 10px;
  justify-content: center;
  margin-bottom: 15px;
  width: 99.22%;
`;

const HeaderWrapper = Styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const HeaderTitle = Styled.Text`
  color: ${props => props.theme.color.blackText};
  font-size: 15px;
  font-family: ${props => props.theme.fontFamilies.boldFont};
  font-weight: bold;
  flex-shrink: 1;
`;

const Content = Styled.View`
  padding: 15px;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  justify-content: center;
  width: 99.22%;
  margin-bottom: 15px;
`;

const ContentHeaderView = Styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const ShrinkContent = Styled.TouchableOpacity``;

function AccordionComponent(props) {
  let accordionRef: any = React.useRef();

  function _renderHeader(item, expanded) {
    {
      return (
        item &&
        item.published &&
        (expanded ? (
          <Content style={styles.containerStyle}>
            <ContentHeaderView>
              <HeaderTitle>{item.name}</HeaderTitle>
              <ShrinkContent onPress={shrink}>
                <VectorIcon name='minus' size={20}/>
              </ShrinkContent>
            </ContentHeaderView>
            <Text></Text>
            {item.ops.map(value => {
              try {
                if (value.type.displayName == 'Image') {
                  return value;
                }
                return <Text>{value}</Text>;
              } catch (error) {
                console.log('Error while finding error type');
              }
            })}
          </Content>
        ) : (
          <HeaderContainer style={styles.containerStyle}>
            <HeaderWrapper>
              <HeaderTitle>{item.name}</HeaderTitle>
              <VectorIcon name='plus' size={20}/>
            </HeaderWrapper>
          </HeaderContainer>
        ))
      );
    }
  }

  function _renderContent() {
    return <></>;
  }

  function shrink() {
    // @ts-ignore
    accordionRef && accordionRef.current.setSelected(-1);
  }

  return (
    // @ts-ignore
    <Accordion
      style={{borderWidth: 0, width: '100%', marginTop: 16}}
      dataArray={props.data}
      animation={true}
      renderHeader={_renderHeader}
      renderContent={_renderContent}
      ref={ref => accordionRef = ref}
      disabled={true}
    />
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 2, height: 3},
        shadowOpacity: 0.05,
        shadowRadius: 1.41,
      },
      android: {
        shadowOffset: {width: 10, height: 10},
        shadowRadius: 3,
        elevation: 2,
        borderRadius: 12,
      },
    }),
  },
});

export default AccordionComponent;
