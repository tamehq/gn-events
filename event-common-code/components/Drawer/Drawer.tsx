import React, { Component } from 'react';
import {Modal} from 'react-native';
import VectorIcon from "../VectorIcon";
import {NavigationActions, StackActions} from "react-navigation";
import { View as AnimatedView} from 'react-native-animatable';
import {isIphoneX} from "../../helpers/iPhonex";
import { withTheme } from 'styled-components';
import AsyncStorage from "@react-native-community/async-storage";
import {
  Bar, BgContainer, ContentStyle, ContentText, IconCover, LogoutCover, ProfilePic, Row, Wrapper, Username, Scroll
} from './StyledComponents'
import {DrawerRoutes} from "../../../src/config/appRoutes";

interface DrawerInterface {
  openDrawer?: boolean;
  onChange: () => void;
  theme?: any;
  user?: any;
  navigation?: any;
}
class SideNavigator extends Component<DrawerInterface> {

  navigateToScene = async (screen: string = '') => {
    const {navigation, onChange} = this.props
    try {
      if (screen) {
        if(screen === 'EventSelection') {
          const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({
              routeName: 'EventSelection',
            })],
          });
          navigation.dispatch(resetAction);
        } else {
          onChange()
          navigation.navigate(screen)
        }
      }
    } catch (error) {
      console.warn('Error in navigate to next verify token');
    }
  }

   Logout = async () => {
    const {navigation} = this.props
    try {
      await AsyncStorage.clear();
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: 'Splash'})],
      });
      navigation.dispatch(resetAction);
    } catch (error) {
      console.warn('Error in navigate to next verify token');
    }
  }

  renderHeader = () => {
    const {user: {name: {first = '', last = ''} = {}, imageUri = ''} = {}} = this.props
    return (
        <Row
            style={{ marginTop: isIphoneX() ? 40 : 10 }}
            onPress={() => this.navigateToScene('Profile')}>
          <ProfilePic source={{ uri: imageUri || null}} />
          <Username>{first} {last}</Username>
        </Row>
    )
  }

  renderDrawerContent = ({icon, name, size = 20, screen = ''}) => {
    const {theme} = this.props
    return (
        <Row
            key={icon}
            onPress={() => this.navigateToScene(screen)}>
          <IconCover>
            <VectorIcon name={icon} size={size} color={theme.color.drawerIcon} />
          </IconCover>
          <ContentText>{name}</ContentText>
        </Row>
    )
  }

  render() {
    const {onChange} = this.props
    return (
        <Modal visible transparent>
          <BgContainer
              activeOpacity={1}
              onPress={onChange}>
            <AnimatedView
                delay={0}
                duration={10}
                easing='linear'
                useNativeDriver={true}
                animation='slideInLeft' >
              <Scroll showsVerticalScrollIndicator={false}>
                <Wrapper
                    activeOpacity={1}
                    onPress={() => {}}>
                  {this.renderHeader()}
                  <ContentStyle>
                    {DrawerRoutes.map(this.renderDrawerContent)}
                    <Bar />
                    {this.renderDrawerContent({name: 'Event Overview', icon: 'arrow-back', screen: 'EventSelection', size: 15})}
                  </ContentStyle>
                  <LogoutCover onPress={this.Logout}>
                    <Username style={{ fontSize: 12 }}>Log out</Username>
                  </LogoutCover>
                </Wrapper>
              </Scroll>
            </AnimatedView>
          </BgContainer>
        </Modal>
    );
  }
}
export default withTheme(SideNavigator)
