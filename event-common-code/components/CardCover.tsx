import React, {useContext} from 'react';
import CardView from 'react-native-cardview'
import {ThemeContext} from "../../App";

interface AvatarInterface {
  max?: number;
  children: any;
  radius?: number;
  styles?: object;
  elevation?: number;
}

const CardCover = (props: AvatarInterface) => {
  const theme = useContext(ThemeContext)
  const {children, elevation = 6, radius = 8, max = 6, styles} = props;
  return (
      <CardView
          cornerRadius={radius}
          maxCardElevation={max}
          cardElevation={elevation}
          style={[{ backgroundColor: 'transparent', shadowColor: theme.color.shadow }, styles]}>
    {children}
  </CardView>)
};

export default CardCover;
