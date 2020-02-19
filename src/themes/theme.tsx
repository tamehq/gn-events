import { Dimensions, PixelRatio } from 'react-native';
const { width, height } = Dimensions.get('window');
const theme = {
    color: {
        secondary: '',
        black: '#000000',
        primary: '#EA7200',
        charcoal: '#333333',
        feedIcon: '#a5abb9',
        screenBg: '#F7F7F7',
        blackText: '#4f4f4f',
        chatColor: '#46454c',
        chatTime: '#0d2a43',
        lightText: '#ffffff',
        lightGray: '#999999',
        separator: '#969696',
        cardGray: '#8B8B8B',
        background: '#ffffff',
        onBoardingBg: 'rgba(0, 0, 0, 0.04)',
        tabIconBg: 'rgb(19, 42, 65)',
        borderLine: 'rgba(151, 151, 151, 0.35)',
        shadow: 'rgba(0, 0, 0, 0.5)',
        grayText: 'rgb(171, 171, 171)',
        drawerIcon: 'rgba(255, 255, 255, 0.7)'
    },
    fontSizes: {
        xSmall: '13',
        small: '15',
        medium: '20',
        large: '25',
        xLarge: '30',
        sizes: ['14', '15', '20', '25', '30', '35'],
    },
    fontFamilies: {
        latoBold: 'Lato-Bold',
        latoRegular: 'Lato-Regular',
        latoLight: 'Lato-Light',
        boldFont: 'GNElliot-Bold',
        lightFont: 'GNElliot-Light',
        regularFont: 'GNElliot',
        extraBoldFont: 'GNElliot-Bold'
    },
    icons: {
      small: 12,
      normal: 15,
      medium: 17,
      standard: 20,
      large: 22,
      xl: 24
    },
    WP: widthPercentageToDP,
    HP: heightPercentageToDP
};
function widthPercentageToDP(widthPercent: string): number {
    const elemWidth = parseFloat(widthPercent);
    return PixelRatio.roundToNearestPixel((width * elemWidth) / 100);
}
function heightPercentageToDP(heightPercent: string): number {
    const elemHeight = parseFloat(heightPercent);
    return PixelRatio.roundToNearestPixel((height * elemHeight) / 100);
}
export { widthPercentageToDP as WP, heightPercentageToDP as HP };
export default theme;
export type Theme = typeof theme;
