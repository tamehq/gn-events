import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import VectorIcon from "../../components/VectorIcon";
import Styled from 'styled-components/native';
import {TabRoutes} from "../../../src/config/appRoutes";

export default createBottomTabNavigator(
TabRoutes,
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused}) => {
        const {routeName} = navigation.state;
        let iconName = routeName.toLocaleLowerCase();
        return (
            <IconCover style={focused ? {} : {backgroundColor: 'transparent'}}>
              <VectorIcon
                  size={22}
                  name={iconName}
                  color={focused ? 'white' : 'black'}
              />
            </IconCover>
        );
      },
    }),
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      style: {
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#00000',
        shadowOffset: {width: 3, height: 0},
        shadowOpacity: 0.1,
        shadowRadius: 0,
        elevation: 3,
      },
    }
  }
);

const IconCover = Styled.View`
    width: 36px;
    height: 36px;
    border-radius: 18px;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.color.onBoardingBg}
`
